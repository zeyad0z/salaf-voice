<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  image: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    class="bg-[#ffffff] border border-[#EDEDED] rounded-[1.25rem] px-2 pt-2 pb-1.25 mx-2 my-3 flex gap-3"
  >
    <img
      :src="item.img"
      alt="book image"
      class="w-12 h-16 object-cover rounded-md"
    />

    <div class="flex flex-col gap-2">
      <div class="font-bold text-[0.96rem] text-[#133349]">
        {{ item.text }}
      </div>

      <div class="flex items-center gap-6 ms-1.5">
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
    </div>
  </div>
</template>
