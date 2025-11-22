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
    class="flex items-center gap-2 py-3 px-10 rounded-2xl select-none bg-[#EFEFEF] md:px-6 md:py-2.5 md:gap-2 sm:px-3 sm:py-2 sm:gap-1.5 sm:flex-wrap sm:justify-center"
  >
    <!-- Prev -->
    <button
      class="px-4 py-1 rounded-lg border border-[#497D74] bg-white text-[#497D74] hover:bg-[#E5EEE7] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-default md:px-3 md:text-[0.85rem] sm:px-2 sm:text-[0.8rem] sm:min-w-[2.2rem]"
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
      class="px-4 py-1 rounded-lg border cursor-pointer transition-all duration-200 md:px-3 md:text-[0.85rem] sm:px-2 sm:text-[0.8rem] sm:min-w-[2.2rem]"
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
      class="px-5 py-1 rounded-lg border border-[#497D74] bg-white text-[#497D74] hover:bg-[#E5EEE7] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-default md:px-4 md:text-[0.85rem] sm:px-2 sm:text-[0.8rem] sm:min-w-[2.2rem]"
      :disabled="modelValue === totalPages"
      @click="goTo(modelValue + 1)"
    >
      التالي
    </button>
  </div>
</template>
