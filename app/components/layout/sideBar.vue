<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useSideBarStore } from "~/stores/sideBar";

const router = useRouter();
const route = useRoute();
const sideData = useSideBarStore();
const hoveredIndex = ref(null);

const emit = defineEmits(["itemSelected"]);

const updateSelected = () => {
  const current = sideData.sideBar.find((item) => item.route === route.path);
  if (current) sideData.selectedSideBarId = current.id;
};

onMounted(updateSelected);

watch(
  () => route.path,
  () => updateSelected()
);

const selectItem = (item) => {
  sideData.setSelectedSideBar(item);
  router.push(item.route);
  emit("itemSelected", item);
};
</script>

<template>
  <aside
    class="sidebar-container w-full lg:w-[21.5rem] lg:flex-shrink-0 rounded-[1.25rem] border border-[#E9E9E9] bg-[#F9F9F9] px-2 py-4 max-h-[calc(100vh-6rem)] overflow-y-auto lg:max-h-none lg:overflow-visible"
  >
    <ul class="flex flex-col gap-2">
      <li
        v-for="(item, index) in sideData.sideBar"
        :key="item.id"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        @click="selectItem(item)"
        class="sidebar-item flex items-center gap-2 border rounded-[1.25rem] cursor-pointer transition-all duration-200 text-[0.9rem] sm:text-[0.95rem] lg:text-[1rem] px-[0.6rem] py-[0.6rem] sm:px-[0.75rem] sm:py-[0.7rem] lg:px-3 lg:py-3.5"
        :class="{
          'bg-[#27445D] border-transparent':
            sideData.selectedSideBarId === item.id || hoveredIndex === index,
          'bg-[#F9F9F9] border-[#E9E9E9]':
            sideData.selectedSideBarId !== item.id && hoveredIndex !== index,
        }"
      >
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

        <span
          class="sidebar-label transition-colors duration-200"
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
