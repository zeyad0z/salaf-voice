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
  <div
    class="w-full bg-[#27445D] flex justify-between items-center px-10 py-5.5"
  >
    <span class="text-[#ffffff] text-[0.87rem]"
      >حقوق النشر مكفولة لكل مسلم مع ذكر المصدر و حقوق الطبع محفوظة للموقع ©
      2025</span
    >
    <div class="flex justify-center items-center gap-2.5 me-2">
      <div
        v-for="social in socials"
        :key="social.name"
        class="bg-[#FBFBFB] w-8 h-8 rounded-full flex justify-center items-center cursor-pointer p-4.5 hover:bg-[#497D74] text-[#A2B8CA] hover:text-[#ffffff]"
      >
        <FontAwesomeIcon :icon="social.icon" class="text-xl" />
      </div>
    </div>
  </div>
</template>
