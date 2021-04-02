<template>
  <div class="Message">
    <div class="Toelichting">
      <div class="stageToelichting">
        <b class="heading">Internship update</b>
        <p>
          The last few week I've been search for an internship for my career.
          I'm pleased to tell you that company
          <a href="https://notanumber.digital/homepage">NotANumber</a> has taken
          me under the hood. I want to thank them for the hospitality and for
          giving me the chance to develop myself.
        </p>
      </div>
      <div class="thankU">
        <p>
          Hope you having a great time on my personal portfolio. For all of you
          visiting my website, I just want to say that appreciated being here.
          And when you have a idea or a concept in you're head, then you're
          welcome to get in touch with me!
        </p>
      </div>
    </div>
    <i class="fal fa-chart-network"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.Message {
  display: flex;
  align-items: center;
  .Toelichting {
    width: 50%;
    .stageToelichting {
      @include CardBackground;
      padding: 1.5rem 2rem;
      width: 100%;
      margin: 1.5rem 0;
      .heading {
        &::after {
          content: ":";
          color: $OrangeColor1;
        }
      }
    }
    .thankU {
      @include subCardBackground;
      box-shadow: $innerShadow;
      width: 60%;
    }
  }
  .fa-chart-network {
    font-size: $fs-header * 6;
    display: flex;
    width: 50%;
    justify-content: center;
    color: $GreenColor1;
    opacity: $WmarkOpacity * 2;
  }
}
/* Mobile ----------- */
@media only screen and (min-width: $MobileSize1) {
  .Message {
    flex-direction: column;
    .Toelichting {
      width: 100%;
      .thankU {
        width: 80%;
      }
    }
    .fa-chart-network {
      position: absolute;
      transform: scale(1.5) translate(15%, -30%);
      z-index: -1;
    }
  }
}
/* Laptop ----------- */
@media only screen and (min-width: $Laptop1) {
  .Message {
    flex-direction: row;
    .Toelichting {
      width: 50%;
      .thankU {
        width: 60%;
      }
    }
    .fa-chart-network {
      position: relative;
      transform: scale(1) translate(0, 0);
    }
  }
}
</style>
