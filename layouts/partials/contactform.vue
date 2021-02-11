<template>
  <div class="form">
    <form @submit.prevent="Submit" method="post" ref="form">
      <div :class="classMessage">{{ sendMessage }}</div>
      <div :class="classMessageErr">{{ sendMessageErr }}</div>
      <!-- <p>This is form is under development</p> -->
      <div class="FormItem">
        <label for="name">Name</label>
        <input
          v-model.trim="name"
          type="text"
          id="name"
          name="name"
          required="required"
        />
      </div>
      <div class="FormItem">
        <label for="email"
          ><span
            class="Accent2"
            title="You must enter a real email address, otherwise I will not respond"
            >*</span
          >
          Email</label
        >
        <input
          v-model.trim="email"
          type="email text"
          id="email"
          name="email"
          required="required"
        />
      </div>
      <div class="FormItem">
        <label for="message">Message</label>
        <textarea
          v-model.trim="message"
          name="message"
          id="message"
          lang="en"
          rows="6"
          required="required"
        ></textarea>
      </div>
      <div class="FormItem">
        <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
      </div>
      <div class="FormItem">
        <input
          class="Submit"
          type="submit"
          name="submit"
          value="Send"
          @click="topOfForm"
        />
      </div>
    </form>
  </div>
</template>
>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      sendMessage: "",
      sendMessageErr: "",
      classMessage: "",
      classMessageErr: "",
    };
  },
  methods: {
    Submit: async function (e, token) {
      // =====================================================
      // GOOGLE RECAPTCHA
      // =====================================================
      try {
        const token = await this.$recaptcha.getResponse();
        console.log("ReCaptcha token:", token);
        await this.$recaptcha.reset();
        // recaptcha validation
        if (token) {
          // email validation
          if (this.email.includes("@") && this.email.includes(".")) {
            emailjs
              .sendForm(
                "service_y6go5eq",
                "template_7udghln",
                e.target,
                "user_a360ayAtdCnk1lSc5WtWv"
              )
              .then(
                (result) => {
                  console.log("SUCCESS!", result.status, result.text);
                },
                (error) => {
                  console.log("FAILED...", error);
                  this.sendMessageErr = "Error occurred.";
                  this.classMessageErr = "EndmessageErr";
                }
              );

            (this.name = ""),
              (this.email = ""),
              (this.message = ""),
              (this.sendMessage = "The message has been sent!"),
              (this.classMessage = "Endmessage");
            e.target.reset();
          } else {
            this.sendMessageErr = "E-mail requires an '@' sign.";
            this.classMessageErr = "EndmessageErr";
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Login error:", error);
      }
      // =====================================================
    },
    topOfForm() {
      this.$refs["form"].scrollIntoView({
        behavior: "smooth",
      });
    },
    // recapchta handeling
    onError(error) {
      console.log("Error happened:", error);
      this.sendMessageErr = "Recaptcha unsuccessful";
      this.classMessageErr = "EndmessageErr";
    },
    onSuccess(token) {
      console.log("Succeeded:", token);
      this.sendMessageErr = "";
      this.classMessageErr = "";
    },
    onExpired() {
      console.log("Expired");
    },
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
  form {
    @include CardBackground;
    width: 50%;
    padding: 2rem 4rem;
    .Endmessage {
      @include CardBackground;
      text-align: center;
      font-weight: 600;
      font-size: $fs-paragraph-2 * 1.2;
      color: Color(GeneralLight);
      background-color: #4fcfbe;
      box-shadow: $innerShadow;
    }
    .EndmessageErr {
      @extend .Endmessage;
      background-color: $RedColor1;
    }
    .FormItem {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
      &:last-child {
        align-items: flex-end;
      }
      label {
        font-weight: bold;
        font-size: $fs-paragraph-2 * 1.5;
        [title] {
          color: red !important;
        }
        &::after {
          content: ":";
          color: $OrangeColor1;
        }
      }

      input,
      textarea {
        @include subCardBackground;
        font-family: "Rubik", sans-serif;
        border: none;
        margin: 0.5rem 0 0 0;
        padding: 1rem 1rem;
        font-size: $fs-paragraph-1;
        color: var(--TxtColor);
        line-height: 26px;
        &:hover,
        &:focus,
        &:valid {
          box-shadow: inset -5px -5px 5px 0 rgba(68, 68, 68, 0.08),
            inset 5px 5px 5px 0 rgba(0, 0, 0, 0.1);
          transform: scale(1);
          outline: none;
        }
      }
      textarea {
        resize: none;
      }
      .Submit {
        @include ButtonStyle;
        width: max-content;
        margin-top: 1rem;
        padding: 1rem 2rem;
      }
    }
  }
}
/* Mobile ----------- */
@media only screen and (min-width: $MobileSize1) {
  .form {
    form {
      width: 100%;
      padding: 2rem 1.5rem;
      .FormItem {
        label {
          font-size: $fs-paragraph-2 * 1.2;
        }
      }
    }
  }
}
/* Tablet ----------- */
// @media only screen and (min-width: $TabletSize1) {
// }
/* Laptops ----------- */
@media only screen and (min-width: $Laptop1) {
  .form {
    width: 45%;
    form {
      width: 70%;
      padding: 2rem 4rem;
      .FormItem {
        label {
          font-size: $fs-paragraph-2 * 1.5;
        }
      }
    }
  }
}
</style>
