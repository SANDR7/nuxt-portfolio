<template>
  <div class="form">
      <form @submit.prevent="sendEmail">
        <!-- <div :class=classMessage>{{sendMessage}}</div> -->
        <p>This is form is under development</p>
        <div class="FormItem">
          <label for="name">Name</label>
          <input v-model.trim="name" type="text" id="name" name="name" required="required">
        </div>
        <div class="FormItem">
          <label for="email">Email</label>
          <input v-model.trim="email" type="email text" id="email" name="email" required="required"/>
        </div>
        <div class="FormItem">
          <label for="message">Message</label>
          <textarea v-model.trim="message" name="message" id="message" lang="en" rows="10" required="required"></textarea>
        </div>
        <div class="FormItem">
          <input class="Submit" type="submit" name="submit" value="Send" />
        </div>
      </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      sendMessage: '',
      classMessage: ''
    }
  },
  methods: {
    sendEmail () {
      const emailData = {
        email: this.email,
        name: this.name,
        message: this.message,
        sendMessage: this.sendMessage,
        classMessage: this.classMessage
      }
      this.$store.dispatch('sendEmail', emailData)
      this.name = ''
      this.email = ''
      this.message = ''
      this.sendMessage = 'The message has been sent!',
      this.classMessage = 'Endmessage'

    }
  }
}
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
        background-color: #4FCFBE;
        box-shadow: $innerShadow;
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