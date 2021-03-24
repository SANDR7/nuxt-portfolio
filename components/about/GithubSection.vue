<template>
  <div class="Github">
    <div class="Card">
      <img :src="gitData.avatar_url" :alt="gitData.login" />
      <div class="info">
        <div style="padding-bottom: 2em">
          <span>{{ gitData.name }}</span>
          <h3>{{ gitData.login }}</h3>
          <div>Currently {{ gitData.followers }} followers</div>
          <a :href="gitData.html_url" target="blank">Full page</a>
        </div>
        <span class="title">latest repos</span>
        <div v-for="(data, index) in gitReData.slice(0, 5)" :key="index">
          <li class="reposes">{{ gitReData[index].name }}</li>
        </div>
      </div>
      <div></div>
    </div>
    <div class="teamMates">
      <div class="header">People I work with</div>
      <div class="Arr">
        <div v-for="(data, index) in gitFoData" :key="index" class="ArrCard">
          <div>
            {{ gitFoData[index].login }}
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
      gitData: [],
      gitReData: [],
      gitFoData: [],
      user: "sandr7"
    };
  },
  async fetch() {
    this.gitData = await fetch(
      `https://api.github.com/users/${this.user}`
    ).then(res => res.json());
    this.gitReData = await fetch(
      `https://api.github.com/users/${this.user}/repos`
    ).then(res => res.json());
    this.gitFoData = await fetch(
      `https://api.github.com/users/${this.user}/followers`
    ).then(res => res.json());
  }
};
</script>

<style lang="scss">
.Github {
  display: flex;
  .Card {
    display: flex;
    @include subCardBackground;
    width: max-content;
    img {
      height: 18em;
      padding: 2em;
      border-radius: $borderRadius12 !important;
    }
    .info {
      padding: 0 2em;
      h3 {
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
    }
    .Arr {
      display: flex;
      .ArrCard {
        @include CardBackground;
        margin-right: 2em;
      }
    }
  }
}
</style>
