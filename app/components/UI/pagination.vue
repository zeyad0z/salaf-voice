<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: Number, required: true }, // current page
  totalPages: { type: Number, required: true }, // last page
  limit: { type: Number, default: 5 }, // how many numbers to show
});

const emit = defineEmits(["update:modelValue"]);

// Go to page
function goTo(page) {
  if (page < 1 || page > props.totalPages) return;
  emit("update:modelValue", page);
}

// Generate page numbers
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
  <div class="flex items-center gap-2 mt-6 select-none">
    <!-- Prev -->
    <button
      class="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-600 disabled:opacity-40"
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
      class="px-4 py-1 rounded-lg border"
      :class="
        p === modelValue
          ? 'bg-[#497D74] text-white border-[#497D74]'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
      "
    >
      {{ p }}
    </button>

    <!-- Next -->
    <button
      class="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-600 disabled:opacity-40"
      :disabled="modelValue === totalPages"
      @click="goTo(modelValue + 1)"
    >
      التالي
    </button>
  </div>
</template>
