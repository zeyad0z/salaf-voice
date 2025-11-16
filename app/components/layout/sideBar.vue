<script setup>
import { ref } from "vue";

const sideData = ref([
  "الرئيسية",
  "الفتاوي",
  "بقلم المشرف",
  "دعواتنا",
  "ملفات خاصة",
  "المنهج السلفي",
  "قضايا معاصرة",
  "دليل طلب العلم",
  "الفتاوي",
  "المكتبة المقروءة",
  "مذاهب فكرية",
  "التزكية",
  "السيرة والتاريخ",
  "مع الدعاة",
  "المرأة والاسرة",
  "شبابنا",
]);

const hoveredIndex = ref(null);
</script>

<template>
  <aside
    class="py-4 px-2 border border-[#E9E9E9] bg-[#F9F9F9] w-[29.5rem] rounded-[1.25rem]"
  >
    <ul class="flex flex-col gap-2">
      <li
        v-for="(item, index) in sideData"
        :key="index"
        class="flex gap-2 items-center text-[1rem] px-3 py-3.5 rounded-[1.25rem] border border-[#E9E9E9] cursor-pointer hover:bg-[#27445D] group"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <client-only>
          <VsxIcon
            iconName="ArchiveBook"
            type="linear"
            :size="32"
            :color="hoveredIndex === index ? '#ffffff' : '#133349'"
          />
        </client-only>
        <span class="group-hover:text-white">{{ item }}</span>
      </li>
    </ul>
  </aside>
</template>
