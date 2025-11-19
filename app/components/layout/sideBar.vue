<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useSideBarStore } from "~/stores/sideBar";

const router = useRouter();
const route = useRoute();
const sideData = useSideBarStore();
const hoveredIndex = ref(null);

// Initialize selected item on first render
const updateSelected = () => {
  const current = sideData.sideBar.find((item) => item.route === route.path);
  if (current) sideData.selectedSideBarId = current.id;
};

onMounted(() => updateSelected());

// Watch for route changes to update selected
watch(
  () => route.path,
  () => updateSelected()
);

// Click handler
const selectItem = (item) => {
  sideData.setSelectedSideBar(item);
  router.push(item.route);
};
</script>

<template>
  <aside
    class="py-4 px-2 border border-[#E9E9E9] bg-[#F9F9F9] w-[21.5rem] rounded-[1.25rem]"
  >
    <ul class="flex flex-col gap-2">
      <li
        v-for="(item, index) in sideData.sideBar"
        :key="item.id"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        @click="selectItem(item)"
        class="flex gap-2 items-center text-[1rem] px-3 py-3.5 rounded-[1.25rem] cursor-pointer border transition-all duration-200"
        :class="{
          'bg-[#27445D] border-transparent':
            sideData.selectedSideBarId === item.id || hoveredIndex === index,
          'bg-[#F9F9F9] border-[#E9E9E9]':
            sideData.selectedSideBarId !== item.id && hoveredIndex !== index,
        }"
      >
        <!-- Icon -->
        <client-only>
          <VsxIcon
            iconName="ArchiveBook"
            type="linear"
            :size="32"
            :color="
              sideData.selectedSideBarId === item.id || hoveredIndex === index
                ? '#ffffff'
                : '#133349'
            "
          />
        </client-only>

        <!-- Text -->
        <span
          class="transition-colors duration-200"
          :class="
            sideData.selectedSideBarId === item.id || hoveredIndex === index
              ? 'text-white'
              : 'text-[#133349]'
          "
        >
          {{ item.label }}
        </span>
      </li>
    </ul>
  </aside>
</template>
