<template>
  <div class="Educations">
    <div class="Education" v-for="Education in Educations" :key="Education.id">
      <div class="Logo">
        <img :src="Education.SchoolLogo" :alt="Education.SchoolLogoalt" />
        <div
          class="finished"
          v-if="Education.Success === true"
          :class="Education.Success == true ? 'isFinished' : 'notFinished'"
        >
          <i class="fad fa-file-check"></i>
          <p>Passed with an average of 7</p>
        </div>
        <div
          class="finished"
          :class="Education.Success == true ? 'isFinished' : 'notFinished'"
          v-else
        >
          <i class="fad fa-file-alt"></i>
          <p>In progress</p>
        </div>
      </div>
      <div class="SchoolInfo">
        <div class="Names">
          <a :href="Education.Schoolwebsite" target="blank">{{
            Education.SchoolName
          }}</a>
          <b>{{ Education.Specialty }}</b>
        </div>
        <p class="Fases">
          {{ Education.FaseInfo }}
        </p>
        <div class="Info">
          <span
            >{{ Education.SchoolSort }} || {{ Education.Language }} —
            {{ Education.Niveau }}</span
          >
          <span>{{ Education.Duration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Educations"]),
  },
};
</script>

<style lang="scss">
.Educations {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6rem 8rem;
  .Education {
    @include CardBackground;
    display: flex;
    height: max-content;
    .Logo {
      margin: 0.5rem;
      padding: 0.5rem;
      height: 100%;
      img {
        width: 150px;
        height: 100px;
        object-fit: contain;
      }
      .finished {
        display: flex;
        justify-items: center;
        align-items: center;
        margin-top: .3em;
        font-size: $fs-header * 0.6;
        p {
          line-height: 20px;
          font-size: $fs-paragraph-1;
          margin-left: 1em;
        }
      }
      .fad {
        padding: .3em;
      }
      .isFinished {
        color: green;
      }
      .notFinished {
        color: orange;
      }
    }
    .SchoolInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 0 1rem;
      .Fases {
        margin: 0.8rem 0;
        width: 95%;
        line-height: 24px;
      }
      .Names {
        display: flex;
        flex-direction: column;
        a {
          font-size: $fs-paragraph-2 * 1.2;
          width: max-content;
        }
      }
      .Info {
        display: flex;
        justify-content: space-between;
        filter: contrast(30%);
      }
    }
  }
}
@media only screen and (min-width: $MobileSize1) {
  .Educations {
    grid-template-columns: repeat(1, 1fr);
    .Education {
      .Logo {
        display: none;
      }
    }
  }
}
/* Tablet ----------- */
@media only screen and (min-width: $TabletSize1) {
  .Educations {
    grid-template-columns: repeat(1, 1fr);
    .Education {
      .Logo {
        display: block;
      }
    }
  }
}
@media only screen and (min-width: $Laptop1) {
  .Educations {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>