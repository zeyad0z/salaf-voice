<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  author: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    class="bg-[#ffffff] border border-[#EDEDED] rounded-[1.25rem] px-2 pt-4 pb-2 mx-2 my-3 flex flex-col gap-2"
  >
    <div class="font-bold text-[0.96rem] text-[#133349]">
      {{ item.text }}
    </div>

    <div class="flex justify-between">
      <div class="flex justify-center items-center gap-6 ms-1.5">
        <button class="flex justify-center items-center gap-1 cursor-pointer">
          <VsxIcon
            iconName="ArchiveAdd"
            :size="16"
            color="#133349"
            type="linear"
          />
          <span class="text-[0.87rem] text-[#133349]">حفظ</span>
        </button>

        <button class="flex justify-center items-center gap-1 cursor-pointer">
          <VsxIcon iconName="Share" :size="18" color="#133349" type="linear" />
          <span class="text-[0.8rem] text-[#133349]">مشاركة</span>
        </button>
      </div>

      <div
        v-if="author"
        class="bg-[#FBFBFB] rounded-3xl border border-[#EDEDED] text-[0.81rem] text-[#133349] px-6.5 py-1"
      >
        {{ item.author ?? "unkown author" }}
      </div>
    </div>
  </div>
</template>
