<template>
  <div class="footer">
    <div class="explore footerItem">
      <div class="Header">Explore</div>
      <ul  @click="ScrolltoTop">
        <nuxt-link @click="ScrolltoTop" to="/" title="Home Page">Home Page</nuxt-link>
        <nuxt-link @click="ScrolltoTop" to="/Projects" title="Projects Page">Projects Page</nuxt-link>
        <nuxt-link @click="ScrolltoTop" to="/Contact" title="Contact Page">Contact Page</nuxt-link>
        <nuxt-link @click="ScrolltoTop" to="/About" title="About Page">About Page</nuxt-link>
        <a
          href="https://src.sandervanast.com/docs/PDF/Sander%20van%20Ast.pdf"
          title="Resume ( CV )"
          target="blank"
        >My Resume</a>
        <a class="Donate" href="https://www.paypal.com/paypalme/SndrOfficial" target="blank">
         <i class="fab fa-paypal"></i><br> <div class="T">Support my Work</div> 
        </a>
      </ul>
      
    </div>
    <div class="recentProjects footerItem">
      <div class="Header">Recent Projects</div>
      <div class="wrapper">
        <div
          class="recentP"
          @click="ScrolltoTop"
          v-for="(project, id) in projects.slice(Math.max(projects.length - 3))"
          :key="id"
        >
        <nuxt-link
        
              title="Open Case Study"
              class="ProjectLink"
              :to="`/Projects/${project.id}`"
          >
          <p class="ProjectTitle">{{project.Projectnaam}}</p>
        </nuxt-link>
          <p class="ProjectDesc">{{project.UsedTech.Skills}}</p>
        </div>
      </div>
    </div>
    <div class="logo footerItem">
      <div class="wrapper">
        <img
          loading="lazy"
          class="FavLogo"
          src="data:image/png;base64,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"
          height="175"
          width="175"
          alt="logo"
        />
        <div @click="ScrolltoTopSmooth">
          <i class="fas fa-arrow-alt-up"  title="Scroll to Top"></i>
        </div>
      </div>

      <div class="Socials">
        <div class="SocialList">
          <a
            href="https://www.linkedin.com/in/sander-van-ast/"
            target="blank"
            title="Linkedin"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/SANDR7" target="blank" title="Github">
            <i class="fab fa-github-square"></i>
          </a>
          <a href="https://twitter.com/SANDR__7" target="blank" title="Twitter">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com/sndr.dsgn/" target="blank" title="Instagram">
            <i class="fab fa-instagram-square"></i>
          </a>
        </div>
        <div class="share">
          <button ref="Sharing" @click="Sharewidget">
            {{shareBtn}}</button>
            
        </div>
      </div>
      <div class="TextMark">
        Developing the web by Creating with
        <a href="https://nuxtjs.org/" target="blank" title="Nuxt.js website">
        Nuxt.js    
        </a> and lots of
        <i class="fas fa-coffee-pot" title="Coffee" style="color: #6C4C35"></i>
        <br />Made by
        <span class="Accent">SANDR7</span>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '~~/projects';
export default {
  data() {
    return {
      projects,
      shareBtn: 'Share the Website'
    }
  },
  methods: {
    ScrolltoTop() {
      scrollTo({scrollTop:1200},'0');
    },
    ScrolltoTopSmooth() {
      scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    Sharewidget: function () {
      const btn = this.$refs.Sharing;
      const Url = window.document.location.href;
      const shareData = {
        title: 'SMA Website',
        text: 'Portfolio Website from Sander van Ast | SMA ',
        url: `${Url}`,
      }
      if(navigator.share) {
        navigator.share(shareData)
        .then(()=> {
          console.log('Thanks for Sharing!')
        }).catch(console.error)
      } else {
        console.log('Not Supported')
        this.shareBtn = 'Only works on Mobile Devices'
      }
        // try {
        //   await navigator.share(shareData)
        //   console.log('Thanks for Sharing!');
        // } catch(err) {
        //   console.log(`Error: ${err}`);
        // }
    }
  }
};
</script>

<style lang="scss">
.footer {
  background-color: var(--BackGroundCardLevel1);
  // filter: brightness(80%);
  height: max-content;
  display: grid;
  padding: 3rem 4rem 4rem;
  grid-template-columns: 100%;

  $listMargin: 1rem;
  
  .logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80%;
      .fa-arrow-alt-up {
        font-size: $fs-header * 2;
        cursor: pointer;
        padding: 1rem;
        color: $RedColor1;
        @include ColorTransition;
        &:hover {
          @include ColorTransition;
          transform: scale(.9);
        }
      }
      img {
        height: 100px;
        width: 100px;
      }
    }
    
    .Socials {
      display: flex;
      flex-direction: column;
      .SocialList {
      font-size: $fs-paragraph-2 * 2.8;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin: 1rem 0;
      a {
        color: Color(GreyColor);
        margin: 0 1rem;
        &:hover {
          color: Color(DarkerGreyColor);
          }
        }
      }
      .share {
        display: flex;
        justify-content: center;
        button {
          width: 85%;
          outline: none;
          @include ButtonStyle;
          text-transform: initial !important;
        }
      }
    }
    .TextMark {
      text-align: center;
      line-height: 24px;
        margin: 1.5rem 0 3rem;
      .fa-coffee-togo {
        color: #6a2b05;
      }
      a {
        @include HoverFx(2px, #41b883, 0);
        color: #41b883;
      }
      .nuxtjs {
        transform: translateY(15%);
        font-size: $fs-paragraph-1 * 1.5;
      }
    }
  }
  .footerItem {
    .Header {
      font-size: $fs-paragraph-2 * 2;
      font-weight: 700;
      letter-spacing: 1px;
      align-items: flex-start;
      &::after {
        content: ";";
        color: $OrangeColor1;
      }
    }
  }
  .explore {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 60%;
      margin: $listMargin 0;
      a {
        margin: .5rem 0;
        &:nth-child(5) {
          color: $RedColor1;
          filter: brightness(110%);
          @include HoverFx(2px, $RedColor1, 0);
        }
        &:last-child {
          color: $RedColor1;
          @include HoverFx(2px, $RedColor1, 0);
        }
        padding: 0.5rem 0;
        display: flex;
        width: 70%;
          .fa-paypal {
            margin-right: 1rem;
          }
      }
      
    }
  }
  .recentProjects {
    // wrapper is voor het omdraaien van de projecten array
    .wrapper {
      display: flex;
      flex-direction: column-reverse;
      .recentP {
        margin: 1rem 0;
        .ProjectLink {
            color: var(--TxtColor);
            outline: none;
            .ProjectTitle {
            @include HoverFx(1px, var(--TxtColor), 0);
            font-weight: bold;
            width: 50%;
          }
        }
       
        .ProjectDesc {
          width: 85%;
        }
      }
    }
  }
  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: $MobileSize1) {
  height: max-content + 200px;
  padding: 3rem 2rem 4rem;

    grid-template-columns: 100%;
    .logo {
      margin: 2rem 0;
      .wrapper {
      img {
        height: 100px;
        width: 100px;
        }
      }
      .Socials {
        flex-direction: column;
      }
      .Socials {
      .SocialList {
        display: flex;
        flex-direction: column;
        a {
            display: flex;
            margin: 0.5rem 0;
            justify-content: center;
          }
        }
        .share {
          display: flex;
          button {
            width: 100%;
          }
        }
      }
    }
    .recentProjects {
      margin: 2rem 0;
      .wrapper {
        .recentP {
          .ProjectDesc {
            width: 100%;
          }
        }
      }
    }
    .explore {
      ul { 
        a { 
          margin: .2rem 0;
          padding: 1rem 0;
          font-size: $fs-paragraph-2;
        }
        .Donate {
          display: flex;
          padding: .8rem 0;   
          width: 100%;       
          .fa-paypal {
            margin-right: 1rem;
          }
        }
      }
    }
  }
  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-width: $TabletSize1) {
    // grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    padding: 3rem 2.5rem 4rem;
    .logo {
      margin: 2rem 0;
      width: 200%;
      .wrapper {
      img {
        height: 135px;
        width: 135px;
        }
      }
       .Socials {
      display: flex;
      flex-direction: column;
      .SocialList {
      font-size: $fs-paragraph-2 * 2.8;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin: 1rem 0;
      a {
        color: Color(GreyColor);
        margin: 0 3rem;
        &:hover {
          color: Color(DarkerGreyColor);
          }
        }
      }
      .share {
        display: flex;
        justify-content: center;
        button {
          width: 185%;
          @include ButtonStyle;
        }
      }
    }
    }
    .recentProjects {
      margin: 0;
      .wrapper {
        .recentP {
          .ProjectDesc {
            width: 100%;
          }
        }
      }
    }
    .explore {
      ul {
        a {
          margin: .2rem 0;
          padding: 1rem 0;
          font-size: $fs-paragraph-2;
        }
        .Donate {
          display: flex;
          padding: .8rem 0;          
          .fa-paypal {
            font-size: $fs-paragraph-2 * 1.7;
            margin-right: 1rem;
          }
        }
      }
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: $Laptop1) {
    grid-template-columns: 20% 50% 30%;
    .logo {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 0;
      flex-direction: column;
      width: 100%;
      img {
        height: 175px;
        width: 175px;
      }
    .Socials {
      display: flex;
      flex-direction: column;
      .SocialList {
      font-size: $fs-paragraph-2 * 2.8;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin: 1rem 0;
      a {
        color: Color(GreyColor);
        margin: 0 1.5rem;
        &:hover {
          color: Color(DarkerGreyColor);
          }
        }
      }
      .share {
        display: none;
        justify-content: center;
        button {
          width: 185%;
          @include ButtonStyle;
        }
      }
    }
      .TextMark {
        .fa-coffee-togo {
          color: #6a2b05;
        }
        a {
          @include HoverFx(2px, #41b883, 0);
          color: #41b883;
        }
        .nuxtjs {
          transform: translateY(15%);
          font-size: $fs-paragraph-1 * 1.5;
        }
      }
    }
    .footerItem {
      .Header {
        font-size: $fs-paragraph-2 * 2;
        font-weight: 700;
        letter-spacing: 1px;
        align-items: flex-start;
        &::after {
          content: ";";
          color: $OrangeColor1;
        }
      }
    }
    .explore {
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60%;
        margin: $listMargin 0;
        a {
          margin: 0;
          padding: .8rem 0;
          font-size: $fs-paragraph-1;
          width: 70%;
          
          .fa-paypal {
            font-size: $fs-paragraph-2 * 1.7;
          }
        }
        .Donate {
          display: flex;
          align-items: center;
          height: 100%;
          margin-top: 1rem;
          
          .T {
            margin: 0 .5rem;
          }
        }
      }
    }
    .recentProjects {
      margin: 0;
      // wrapper is voor het omdraaien van de projecten array
      .wrapper {
        display: flex;
        flex-direction: column-reverse;
        .recentP {
          margin: 1rem 0;
          font-size: $fs-paragraph-1;
          .ProjectTitle {
            font-size: $fs-paragraph-2;
            font-weight: bold;
          }
          .ProjectDesc {
            width: 85%;
          }
        }
      }
    }
  }
}
</style>