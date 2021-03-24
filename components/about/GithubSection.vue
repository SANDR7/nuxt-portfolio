<template>
  <div>
    <input type="text" v-model="InputUser"/>
    <button @click="test">submit</button>
    {{InputUser}}
    <div class="Github">
      <div class="Card">
        <img :src="gitData.avatar_url" :alt="gitData.login" />
        <div class="info">
          <div style="padding-bottom: 2em">
            <span>{{ gitData.name }}</span>
            <h3 class="loginName">{{ gitData.login }}</h3>
            <div>Currently {{ gitData.followers }} followers</div>
            <a :href="gitData.html_url" target="blank">Full Github page</a>
          </div>
          <span class="title">latest repos</span
          ><span>&nbsp;{{ this.shownRepos }}/{{ gitData.public_repos }}</span>
            <!-- v-for="(data, index) in gitReData.slice(0, this.shownRepos)" -->
          <div
            v-for="(data, index) in gitReData"
            :key="index"
          >
            <li class="reposes">{{ gitReData[index].name }}</li>
          </div>
        </div>
        <div></div>
      </div>
      <div class="teamMates">
        <div class="header">people I collaborate with</div>
        <div class="Arr">
          <div v-for="(data, index) in gitFoData" :key="index" class="ArrCard">
            <div>
              <img
                height="150rem"
                :src="gitFoData[index].avatar_url"
                :alt="gitFoData.login"
              />
            </div>
            <div style="margin: 0.5em 0">
              <a
                :href="gitFoData.html_url"
                target="blank"
                style="padding-bottom: 0.4em"
              >
                {{ gitFoData[index].login }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shownRepos: 5,
      gitData: [],
      gitReData: [],
      gitFoData: [],
      user: "Sandr7",
    };
  },
  test() {
    this.user = this.InputUser;
  },
  async fetch() {
    this.gitData = await fetch(
      `https://api.github.com/users/${this.user}`
    ).then((res) => res.json());
    this.gitReData = await fetch(
      `https://api.github.com/users/${this.user}/repos`
    ).then((res) => res.json());
    this.gitFoData = await fetch(
      `https://api.github.com/users/${this.user}/following`
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss">
.Github {
  display: flex;
  .Card {
    display: flex;
    @include subCardBackground;
    flex: 0.55;
    height: 50%;
    img {
      height: 10em;
      padding: 1em;
      padding-top: 0;
      border-radius: $borderRadius12 !important;
    }
    .info {
      padding: 0 2em;
      .loginName {
        font-size: $fs-header * 0.8;
      }
      .title {
        font-weight: bold;
        font-size: $fs-header * 0.6;
      }
      .reposes {
        margin: 0.4em 0;
        margin-left: 1em;
        list-style-type: disc !important;
      }
    }
  }
  .teamMates {
    .header {
      font-size: $fs-header * 0.6;
      &::after {
        content: ":";
        color: $OrangeColor1;
      }
    }
    .Arr {
      display: flex;
      margin: 1em 0;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 33%);
      grid-row-gap: 2em;
      grid-column-gap: 0.5em;
      .ArrCard {
        @include CardBackground;
        padding: 0.6em;
        margin-right: 2em;
        text-align: center;
        img {
          border-radius: $borderRadius12;
        }
      }
    }
  }
}
</style>
