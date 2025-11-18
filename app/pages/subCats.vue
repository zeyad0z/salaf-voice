<script setup>
import MainHead from "~/components/UI/mainHead.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const subCats = ref([
  {
    label: "فتاوى العقيدة",
  },
  {
    label: "فتاوى المعاملات",
  },
  {
    label: "فتاوى المنهج والالتزام والدعوة",
  },
  {
    label: "فتاوى الأيمان والنذور والكفارات",
  },
  {
    label: "فتاوى الكمبيوتر والإنترنت والاتصالات ووسائل الترفيه",
  },
  {
    label: "فتاوى في ميزان الشرع",
  },
  {
    label: "فتاوى متنوعة",
  },
  {
    label: "فتاوى العبادات",
  },
  {
    label: "فتاوى الزواج والمرأة والأسرة",
  },
  {
    label: "شبهات وجوابها",
  },
  {
    label: "فتاوى الأطعمة واللباس",
  },
  {
    label: "فتاوى طبية وعلاجية",
  },
  {
    label: "فتاوى الملل والنحل",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-fit flex justify-center items-center gap-4 ps-3">
      <client-only>
        <VsxIcon iconName="Home2" :size="24" color="#497D74" type="linear" />
      </client-only>

      <div class="flex gap-2 justify-center items-center">
        <p class="text-[1rem] text-[#497D74]">»</p>
        <p class="text-[1rem] text-[#497D74]">الفتاوي</p>
      </div>
    </div>

    <div
      class="w-full bg-[#F9F9F9] border border-[#E9E9E9] rounded-[1.25rem] px-5 py-7 grid grid-cols-2 gap-5"
    >
      <button
        @click="router.push('/cats')"
        v-for="item in subCats"
        class="p-6 h-fit bg-[#27445D] text-[1rem] text-[#FFFFFF] font-bold rounded-[10px] flex items-center cursor-pointer hover:bg-[#497D74] transition-colors duration-200"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>
