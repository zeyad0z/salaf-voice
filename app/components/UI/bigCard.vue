<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  viewAll: {
    type: Boolean,
    default: false,
  },
  blue: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="bg-[#F9F9F9] border border-[#E9E9E9] rounded-[1.25rem]">
    <div
      :class="[
        'big-card-header flex justify-between items-center px-3 py-2 rounded-t-[1.25rem]',
        props.blue ? 'bg-[#ECF4F2]' : 'bg-[#EFE9D5]',
      ]"
    >
      <div class="flex justify-center items-center gap-2">
        <client-only>
          <VsxIcon
            iconName="ArchiveBook"
            type="linear"
            :size="32"
            color="#133349"
            class="big-card-icon"
          />
        </client-only>

        <!-- TITLE FROM PROP -->
        <p class="big-card-title text-[#062033] text-[1rem]">
          {{ props.label }}
        </p>
      </div>

      <button
        v-if="props.viewAll"
        class="big-card-viewall flex justify-center items-center gap-1 cursor-pointer"
      >
        <span class="big-card-viewall-text text-[#062033] text-[0.87rem]">
          شاهد الكل
        </span>
        <p class="big-card-viewall-arrow text-[1rem] text-[#062033]">»</p>
      </button>
    </div>

    <slot />
  </div>
</template>

<style scoped>
/* ديسكتوب: الستايل الأساسي من الـ Tailwind */

/* تابلت ولابتوب صغير */
@media (max-width: 1024px) {
  .big-card-header {
    padding-inline: 0.9rem;
    padding-block: 0.45rem;
  }

  .big-card-title {
    font-size: 0.95rem;
  }

  .big-card-viewall-text {
    font-size: 0.83rem;
  }

  .big-card-icon :deep(svg) {
    transform: scale(0.95);
  }
}

/* موبايل */
@media (max-width: 640px) {
  .big-card-header {
    padding-inline: 0.75rem;
    padding-block: 0.4rem;
  }

  .big-card-title {
    font-size: 0.9rem;
  }

  .big-card-viewall-text {
    font-size: 0.8rem;
  }

  .big-card-viewall-arrow {
    font-size: 0.9rem;
  }

  .big-card-icon :deep(svg) {
    transform: scale(0.9);
  }
}
</style>
