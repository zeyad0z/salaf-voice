<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// بيانات الـ sidebar
const sideData = ref([
  { label: "الرئيسية", route: "/" },
  { label: "الفتاوي", route: "/subCats" },
  { label: "بقلم المشرف", route: "/cats" },
  { label: "دعواتنا", route: "/cats" },
  { label: "ملفات خاصة", route: "/cats" },
  { label: "المنهج السلفي", route: "/cats" },
  { label: "قضايا معاصرة", route: "/cats" },
  { label: "دليل طلب العلم", route: "/cats" },
  { label: "الفتاوي", route: "/cats" },
  { label: "المكتبة المقروءة", route: "/cats" },
  { label: "مذاهب فكرية", route: "/cats" },
  { label: "التزكية", route: "/cats" },
  { label: "السيرة والتاريخ", route: "/cats" },
  { label: "مع الدعاة", route: "/cats" },
  { label: "المرأة والاسرة", route: "/cats" },
  { label: "شبابنا", route: "/cats" },
]);

// لتتبع العنصر اللي عليه hover
const hoveredIndex = ref(null);
</script>

<template>
  <aside
    class="py-4 px-2 border border-[#E9E9E9] bg-[#F9F9F9] w-[21.5rem] rounded-[1.25rem]"
  >
    <ul class="flex flex-col gap-2">
      <li
  v-for="(item, index) in sideData"
  :key="index"
  @mouseenter="hoveredIndex = index"
  @mouseleave="hoveredIndex = null"
  @click="router.push(item.route)"
  class="flex gap-2 items-center text-[1rem] px-3 py-3.5 rounded-[1.25rem] cursor-pointer border transition-all duration-200"
  :class="{
    'bg-[#27445D] border-transparent': route.path === item.route || hoveredIndex === index,
    'bg-[#F9F9F9] border-[#E9E9E9]': route.path !== item.route && hoveredIndex !== index
  }"
>
  <!-- Icon -->
  <client-only>
    <VsxIcon
      iconName="ArchiveBook"
      type="linear"
      :size="32"
      :color="route.path === item.route || hoveredIndex === index ? '#ffffff' : '#133349'"
    />
  </client-only>

  <!-- Text -->
  <span
    class="transition-colors duration-200"
    :class="route.path === item.route || hoveredIndex === index ? 'text-white' : 'text-[#133349]'"
  >
    {{ item.label }}
  </span>
</li>

    </ul>
  </aside>
</template>
