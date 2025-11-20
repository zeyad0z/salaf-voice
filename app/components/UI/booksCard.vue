<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  image: {
    type: Boolean,
    default: false, // موجود لو حبيت تستخدمه بعدين
  },
});
</script>

<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    class="book-card bg-[#ffffff] border border-[#EDEDED] rounded-[1.25rem] px-2 pt-2 pb-1.25 mx-2 my-3 flex gap-3"
  >
    <img
      :src="item.img"
      alt="book image"
      class="book-card-img w-12 h-16 object-cover rounded-md"
    />

    <div class="book-card-body flex flex-col gap-2">
      <div class="book-card-text font-bold text-[0.96rem] text-[#133349]">
        {{ item.text }}
      </div>

      <div class="book-card-actions flex items-center gap-6 ms-1.5">
        <button class="flex justify-center items-center gap-1 cursor-pointer">
          <VsxIcon
            iconName="ArchiveAdd"
            :size="16"
            color="#133349"
            type="linear"
          />
          <span class="book-card-btn-text text-[0.87rem] text-[#133349]">
            حفظ
          </span>
        </button>

        <button class="flex justify-center items-center gap-1 cursor-pointer">
          <VsxIcon
            iconName="Share"
            :size="18"
            color="#133349"
            type="linear"
          />
          <span class="book-card-btn-text text-[0.8rem] text-[#133349]">
            مشاركة
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* تابلت / لابتوب صغير */
@media (max-width: 1024px) {
  .book-card {
    margin-inline: 0.4rem;
    margin-block: 0.6rem;
    padding-inline: 0.7rem;
    padding-block: 0.7rem;
    gap: 0.75rem;
  }

  .book-card-img {
    width: 2.6rem;
    height: 3.6rem;
  }

  .book-card-text {
    font-size: 0.9rem;
  }

  .book-card-btn-text {
    font-size: 0.8rem;
  }
}

/* موبايل */
@media (max-width: 640px) {
  .book-card {
    margin-inline: 0.3rem;
    margin-block: 0.45rem;
    padding-inline: 0.6rem;
    padding-block: 0.6rem;
    gap: 0.6rem;
  }

  .book-card-img {
    width: 2.3rem;
    height: 3.2rem;
  }

  .book-card-text {
    font-size: 0.86rem;
  }

  .book-card-actions {
    gap: 0.4rem; /* تقريبًا زي gap-1 */
  }

  .book-card-btn-text {
    font-size: 0.76rem;
  }
}
</style>
