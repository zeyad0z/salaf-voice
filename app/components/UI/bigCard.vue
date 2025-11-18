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
        'flex justify-between px-3 py-2 rounded-t-[1.25rem]',
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
          />
        </client-only>

        <!-- TITLE FROM PROP -->
        <p class="text-[#062033] text-[1rem]">{{ props.label }}</p>
      </div>

      <button
        v-if="props.viewAll"
        class="flex justify-center items-center gap-1 cursor-pointer"
      >
        <span class="text-[#062033] text-[0.87rem]">شاهد الكل</span>

        <p class="text-[1rem] text-[#062033]">»</p>
      </button>
    </div>

    <slot />
  </div>
</template>
