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
      title: "Contact - Sander van Ast",
    };
  },
  components: {
    ContactSection,
    landingPage
  },
};
</script>