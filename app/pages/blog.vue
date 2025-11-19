<script setup>
import { useCatsStore } from "~/stores/cats";
import { useSubCatsStore } from "~/stores/subCats";

const cats = useCatsStore();
const subCats = useSubCatsStore();
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-fit flex justify-center items-center gap-4 ps-3">
      <client-only>
        <VsxIcon iconName="Home2" :size="24" color="#497D74" type="linear" />
      </client-only>

      <div class="flex gap-2 justify-center items-center">
        <p class="text-[1rem] text-[#B8C2CA]">»</p>
        <p class="text-[1rem] text-[#B8C2CA]">الفتاوي</p>
        <p class="text-[1rem] text-[#B8C2CA]">»</p>
        <p class="text-[1rem] text-[#B8C2CA]">
          {{ subCats.selectedSubCat?.label }}
        </p>
        <p class="text-[1rem] text-[#497D74]">»</p>
        <p class="text-[1rem] text-[#497D74]">{{ cats.selectedCat?.label }}</p>
      </div>
    </div>
  </div>
</template>
