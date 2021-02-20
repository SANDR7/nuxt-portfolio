<template>
  <div class="about">
    <LandingAboutPage />
    <div class="Sections">
      <!-- Status -->
      <div class="Section">
        <h2>Github Status</h2>
        <div class="Background">
          <GithubSection />
        </div>
      </div>
      <!-- Education -->
      <div class="Section">
        <h2>Education</h2>
        <div class="Background">
          <EducationSection />
        </div>
      </div>
      <!-- Skills -->
      <div class="Section skills">
        <h2>Skill set</h2>
        <div class="Background">
          <VaardighedenSection />
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import LandingAboutPage from "~/components/about/LandingAboutPage";
import EducationSection from "~/components/about/EducationSection";
import GithubSection from "~/components/about/GithubSection";
import VaardighedenSection from "~/components/home/VaardighedenSection";
export default {
  head() {
    return {
      titleTemplate: "About - %s",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Hi, my name is Sander van Ast. I'm an enthusiastic programmer and a starting entrepreneur based in The Netherlands."
        }
      ]
    };
  },
  components: {
    LandingAboutPage,
    EducationSection,
    VaardighedenSection,
    GithubSection
  }
};
</script>

<style lang="scss"></style>
