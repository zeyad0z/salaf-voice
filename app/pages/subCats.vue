<script setup>
import { useRouter } from "vue-router";
import { useSubCatsStore } from "~/stores/subCats";

const router = useRouter();
const subCats = useSubCatsStore();

const selectSub = (item) => {
  subCats.setSelectedSubCat(item);
  router.push("/cats"); 
};
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
      v-for="item in subCats.subCats"
      @click="selectSub(item)"
        class="p-6 h-fit bg-[#27445D] text-[1rem] text-[#FFFFFF] font-bold rounded-[10px] flex items-center cursor-pointer hover:bg-[#497D74] transition-colors duration-200"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>
