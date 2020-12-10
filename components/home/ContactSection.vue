<template>
  <div class="Contact">
    <div class="info">
      <div class="Text">
        <span class="WMark">Get in Touch</span>
        <div class="header">
          Feel free to Reach Out <br /><span>For Projects or Work</span>
        </div>
      </div>
      <div class="Social">
        <ul>
          <li>
            <b class="title">Phone number</b>
            <div>
              <i class="fas fa-phone-alt" title="Phone"></i>
              <a href="tel:0681314693" target="blank" title="Phone Number"
                >+31 (06) 81314693</a
              >
            </div>
          </li>
          <li>
            <b class="title">E-mail Address</b>
            <div>
              <i class="fas fa-envelope" title="Mail"></i>
              <a
                href="mailto:contact@sandervanast.com"
                title="E-mail Address"
                target="blank"
                >contact@sandervanast.com</a
              >
            </div>
          </li>
          <li>
            <b class="title">Github Page</b>
            <div>
              <i class="fab fa-github" title="Github"></i>
              <a
                href="https://github.com/SANDR7"
                title="Github Profile"
                target="blank"
                >SANDR7</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="Icon">
      <i class="fal fa-file-signature"></i>
    </div> -->
    <ContactForm />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fireDb } from "~/plugins/firebase.js";
import ContactForm from "~/layouts/partials/contactform";
export default {
  computed: {
    ...mapState(["Services"])
  },

  // firestore() {
  //   return {
  //     firebaseData: fireDb.doc(documentPath),
  //   }
  // }
  components: {
    ContactForm
  }
};
</script>

<style lang="scss">
.Contact {
  display: flex;
  justify-content: space-between;
  position: relative;
  // @include CardBackground;
  padding: 1rem 3rem;
  // box-shadow: $innerShadow;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    .Text {
      .header {
        font-weight: 700;
        text-transform: uppercase;
        font-size: $fs-header;
        line-height: 50px;
        span {
          font-weight: 400;
          text-transform: initial;
          font-size: $fs-header / 2;
        }
      }
      .WMark {
        position: absolute;
        display: none;
        @include funkyText(4px);
        z-index: -1;
        transform: translateY(-70%);
        -webkit-text-stroke: 2px $OrangeColor1;
        font-size: 150px;
        letter-spacing: 3px;
        font-weight: 700;
        opacity: $WmarkOpacity * 2.5;
      }
    }
    .Social {
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        .title {
          margin: 1rem 0 0.5rem;
          font-size: $fs-paragraph-2;
          opacity: $WmarkOpacity * 3;
          text-transform: uppercase;
        }
        li {
          display: flex;
          flex-direction: column;
          font-size: $fs-header / 2.5;
          width: max-content;
          @include ColorTransition;
          &:hover svg {
            color: Color(DarkerGreyColor);
          }
          svg {
            @include ColorTransition;
            font-size: 30px;
            color: Color(GreyColor);
          }
          div {
            display: flex;
            text-align: center;
            height: 100%;
          }
          a {
            margin: 0 1rem;
          }
        }
      }
      height: 25%;
    }
  }

  .Icon {
    display: flex;
    width: 30%;
    height: 100%;
    align-items: center;
    justify-items: center;
    .fa-file-signature {
      font-size: $fs-header * 6;
      color: $GreenColor1;
      opacity: $WmarkOpacity * 2;
    }
  }
  .form {
    width: 100%;
    justify-content: flex-end;
    @media screen and (max-width: 1300px) {
      width: 100%;
    }
  }
}
/* Tablet ----------- */
@media only screen and (min-width: $MobileSize1) {
  .Contact {
    padding: 0;
    flex-direction: column;
    .info {
      .Text {
        margin: 4rem 0 3rem;
        .header {
          line-height: 40px;
          font-size: $fs-header * 0.8;
          span {
            font-size: $fs-paragraph-2;
          }
        }
        .WMark {
          display: none;
          position: absolute;
        }
      }
      .Social {
        margin: 4rem 0;
        ul {
          li {
            margin: 1rem 0;
            font-size: $fs-header / 3.5;
          }
        }
      }
    }
    .Icon {
      position: absolute;
      display: none;
      top: 16%;
      right: 5%;
      .fa-file-signature {
        font-size: $fs-header * 6;
        color: $GreenColor1;
        opacity: $WmarkOpacity * 2;
      }
    }
    .form {
      form {
        width: 100%;
      }
    }
  }
}
/* Tablet ----------- */
@media only screen and (min-width: $TabletSize1) {
  .Contact {
    flex-direction: column;
    padding: 1rem 2rem;
    .info {
      .Text {
        margin: 8rem 0 3rem;
        .WMark {
          display: block;
          position: absolute;
          font-size: 120px;
          width: 100%;
          line-height: 100px;
        }
        .header {
          width: 100%;
        }
      }
      .Social {
        margin: 3rem 0;
        ul {
          li {
            margin: 1rem 0;
            font-size: $fs-header / 3;
          }
        }
      }
    }
    .Icon {
      position: relative;
      top: 16%;
      right: 15%;
      display: block;
      margin: 20rem 0 0;
      .fa-file-signature {
        font-size: $fs-header * 4.7;
        color: $GreenColor1;
        opacity: $WmarkOpacity * 2;
      }
    }
    .form {
      form {
        width: 100%;
      }
    }
  }
}
@media only screen and (min-width: $TabletSize1) and (orientation: portrait) {
  .Contact {
    .Icon {
      position: relative;
      top: 16%;
      right: 17%;
      display: block;
      margin-bottom: 2rem;
    }
  }
}
@media only screen and (min-width: $TabletSize1) and (orientation: landscape) {
  .Contact {
    .Icon {
      position: relative;
      top: 16%;
      right: 10%;
      display: block;
      margin: 20rem 0 0;
    }
  }
}
/* Laptops ----------- */
@media only screen and (min-width: $Laptop1) {
  .Contact {
    flex-direction: row;
    padding: 1rem 3rem;
    .info {
      .Text {
        margin: 0;
        .header {
          font-size: $fs-header;
          line-height: 50px;
          span {
            font-weight: 400;
            font-size: $fs-header * 0.7;
          }
        }
        .WMark {
          font-size: 146px;
        }
      }
      .Social {
        margin: 2rem 0;
        ul {
          li {
            font-size: $fs-header / 2.5;
            margin: 0.5rem 0;
          }
        }
      }
    }
    .Icon {
      display: block;
      top: 0%;
      right: 5%;
      margin: 15rem 0 5rem;
      .fa-file-signature {
        font-size: $fs-header * 7;
        color: $GreenColor1;
        opacity: $WmarkOpacity * 2;
      }
    }
    .form {
      form {
        width: 90%;
      }
    }
  }
}
</style>
