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
    class="w-full bg-[#27445D] flex flex-col items-center justify-center gap-6 px-5 py-7 text-center lg:flex-row lg:justify-between lg:items-center lg:px-12 lg:py-6 lg:text-right lg:gap-0"
  >
    <!-- Text -->
    <span
      class="text-white leading-[1.6] text-[0.75rem] max-w-full sm:text-[0.85rem] sm:max-w-[90%] lg:text-[0.87rem] lg:max-w-[60%] max-[420px]:text-[0.78rem]"
    >
      حقوق النشر مكفولة لكل مسلم مع ذكر المصدر وحقوق الطبع محفوظة للموقع © 2025
    </span>

    <!-- Social Icons -->
    <div class="flex items-center gap-2.5 me-2 max-[640px]:gap-[0.8rem]">
      <button
        v-for="social in socials"
        :key="social.name"
        type="button"
        class="flex justify-center items-center rounded-full cursor-pointer bg-[#FBFBFB] text-[#A2B8CA] transition-all duration-200 w-[2.1rem] h-[2.1rem] text-[0.95rem] sm:w-[2.1rem] sm:h-[2.1rem] sm:text-[1rem] lg:w-9 lg:h-9 lg:text-[1.1rem] max-[420px]:w-8 max-[420px]:h-8 hover:bg-[#497D74] hover:text-white"
      >
        <client-only>
          <FontAwesomeIcon :icon="social.icon" />
        </client-only>
      </button>
    </div>
  </footer>
</template>
