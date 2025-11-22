<script setup>
const props = defineProps({
  items: Array,
  author: Boolean,
});
</script>

<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    class="card bg-white border border-[#EDEDED] rounded-[1.25rem] px-2 pt-4 pb-2 mx-2 my-3 flex flex-col gap-2"
  >
    <!-- TEXT -->
    <p class="card-text font-bold text-[0.96rem] text-[#133349]">
      {{ item.text }}
    </p>

    <!-- FOOTER -->
    <div class="card-footer flex justify-between items-center">
      <div class="card-actions flex items-center gap-6 ms-1.5">
        <!-- Save -->
        <button class="flex items-center gap-1 cursor-pointer">
          <VsxIcon
            iconName="ArchiveAdd"
            :size="16"
            color="#133349"
            type="linear"
          />
          <span class="card-btn-text text-[0.87rem] text-[#133349]">حفظ</span>
        </button>

        <!-- Share -->
        <button class="flex items-center gap-1 cursor-pointer">
          <VsxIcon iconName="Share" :size="18" color="#133349" type="linear" />
          <span class="card-btn-text text-[0.8rem] text-[#133349]">مشاركة</span>
        </button>
      </div>

      <!-- AUTHOR -->
      <div
        v-if="author"
        class="card-author bg-[#FBFBFB] border border-[#EDEDED] rounded-3xl text-[0.81rem] text-[#133349] px-6.5 py-1"
      >
        {{ item.author ?? "unknown author" }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* =============== TABLET (<=1024px) =============== */
@media (max-width: 1024px) {
  .card {
    margin-inline: 0.4rem;
    margin-block: 0.6rem;
    padding-inline: 0.7rem;
    padding-block: 0.8rem;
    gap: 0.35rem;
  }

  .card-text {
    font-size: 0.92rem;
  }

  .card-btn-text {
    font-size: 0.8rem;
  }

  .card-author {
    font-size: 0.78rem;
    padding-inline: 1.1rem;
    padding-block: 0.35rem;
  }
}

/* =============== MOBILE (<=640px) =============== */
@media (max-width: 640px) {
  .card {
    margin-inline: 0.3rem;
    margin-block: 0.45rem;
    padding-inline: 0.6rem;
    padding-block: 0.7rem;
  }

  .card-text {
    font-size: 0.88rem;
  }

  .card-actions {
    gap: 0.25rem; /* يعادل gap-1 */
  }

  .card-btn-text {
    font-size: 0.75rem;
  }

  .card-author {
    font-size: 0.68rem;
    padding-inline: 0.65rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
  }
}
</style>
