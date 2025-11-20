<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const socials = ref([
  { name: "instagram", icon: ["fab", "instagram"] },
  { name: "tiktok", icon: ["fab", "tiktok"] },
  { name: "facebook", icon: ["fab", "facebook"] },
  { name: "twitter", icon: ["fab", "twitter"] },
]);
</script>

<template>
  <footer
    class="footer w-full bg-[#27445D] flex justify-between items-center px-12 py-6"
  >
    <!-- Text -->
    <span
      class="footer-text text-[#ffffff] text-[0.87rem] leading-[1.6] max-w-[60%]"
    >
      حقوق النشر مكفولة لكل مسلم مع ذكر المصدر وحقوق الطبع محفوظة للموقع © 2025
    </span>

    <!-- Social Icons -->
    <div class="footer-icons flex items-center gap-3 me-2">
      <div
        v-for="social in socials"
        :key="social.name"
        class="social-item bg-[#FBFBFB] w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#497D74] text-[#A2B8CA] hover:text-white transition-all duration-200"
      >
        <client-only>
          <FontAwesomeIcon :icon="social.icon" class="text-[1.1rem]" />
        </client-only>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Large screens = default */

/* ================= TABLETS (max-width: 1024px) ================= */
@media (max-width: 1024px) {
  .footer {
    padding-inline: 2rem;
    flex-direction: column;
    gap: 1.2rem;
    text-align: center;
  }

  .footer-text {
    max-width: 90%;
    font-size: 0.85rem;
  }
}

/* ================= MOBILE (max-width: 640px) ================= */
@media (max-width: 640px) {
  .footer {
    padding-inline: 1.2rem;
    padding-block: 1.75rem;
    gap: 1.4rem;
  }

  .footer-text {
    font-size: 0.75rem;
    line-height: 1.6;
    max-width: 100%;
  }

  .footer-icons {
    gap: 0.8rem;
  }

  .social-item {
    width: 2.1rem;
    height: 2.1rem;
    font-size: 0.95rem;
  }
}

/* ================= VERY SMALL MOBILE (max-width: 420px) ================= */
@media (max-width: 420px) {
  .footer-text {
    font-size: 0.78rem;
  }

  .social-item {
    width: 2rem;
    height: 2rem;
  }
}
</style>
