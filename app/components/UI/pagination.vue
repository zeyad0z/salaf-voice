<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  limit: { type: Number, default: 5 },
});

const emit = defineEmits(["update:modelValue"]);

const goTo = (page) => {
  if (page < 1 || page > props.totalPages || page === props.modelValue) return;
  emit("update:modelValue", page);
};

const pages = computed(() => {
  const half = Math.floor(props.limit / 2);
  let start = Math.max(1, props.modelValue - half);
  let end = Math.min(props.totalPages, start + props.limit - 1);

  if (end - start < props.limit - 1) {
    start = Math.max(1, end - props.limit + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});
</script>

<template>
  <div
    class="pagination flex items-center gap-2 py-3 px-10 rounded-2xl select-none bg-[#EFEFEF]"
  >
    <!-- Prev -->
    <button
      class="nav-btn px-4 py-1 rounded-lg border border-[#497D74] bg-white text-[#497D74] hover:bg-[#E5EEE7] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-default"
      :disabled="modelValue === 1"
      @click="goTo(modelValue - 1)"
    >
      السابق
    </button>

    <!-- Numbers -->
    <button
      v-for="p in pages"
      :key="p"
      @click="goTo(p)"
      class="page-btn px-4 py-1 rounded-lg border cursor-pointer transition-all duration-200"
      :class="
        p === modelValue
          ? 'bg-[#497D74] text-white border border-[#E5EEE7]'
          : 'bg-white text-[#497D74] border-[#497D74] hover:bg-[#E5EEE7]'
      "
    >
      {{ p }}
    </button>

    <!-- Next -->
    <button
      class="nav-btn px-5 py-1 rounded-lg border border-[#497D74] bg-white text-[#497D74] hover:bg-[#E5EEE7] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-default"
      :disabled="modelValue === totalPages"
      @click="goTo(modelValue + 1)"
    >
      التالي
    </button>
  </div>
</template>

<style scoped>
/* Tablet */
@media (max-width: 1024px) {
  .pagination {
    padding-inline: 1.5rem;
    padding-block: 0.6rem;
    gap: 0.5rem;
  }

  .page-btn,
  .nav-btn {
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    font-size: 0.85rem;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .pagination {
    padding-inline: 0.75rem;
    padding-block: 0.5rem;
    gap: 0.4rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .page-btn,
  .nav-btn {
    padding-inline: 0.5rem;
    padding-block: 0.25rem;
    font-size: 0.8rem;
    min-width: 2.2rem;
  }
}
</style>
