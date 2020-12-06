<template>
  <div class="contact">
    <div class="Sections">
      <div class="Section">
        <div class="Background">
          <landingPage />
        </div>
      </div>
      <div class="Section">
        <div class="Background">
          <ContactSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import landingPage from "~/components/contact/landingPage";
import ContactSection from "~/components/home/ContactSection";
export default {
  head() {
    return {
      titleTemplate: "Contact - %s",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "I'm currently searching for a dutch internship. If you have any interest you can easily fill out the contact form."
        }
      ]
    };
  },
  components: {
    ContactSection,
    landingPage
  }
};
</script>
