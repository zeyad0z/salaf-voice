<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useSideBarStore } from "~/stores/sideBar";

const router = useRouter();
const route = useRoute();
const sideData = useSideBarStore();
const hoveredIndex = ref(null);

// علشان نقدر نبلّغ البيرنت إن فيه اختيار حصل
const emit = defineEmits(["itemSelected"]);

const updateSelected = () => {
  const current = sideData.sideBar.find((item) => item.route === route.path);
  if (current) sideData.selectedSideBarId = current.id;
};

onMounted(() => updateSelected());

watch(
  () => route.path,
  () => updateSelected()
);

const selectItem = (item) => {
  sideData.setSelectedSideBar(item);
  router.push(item.route);
  emit("itemSelected", item); // 🟢 ده اللي البيرنت هيستقبله في الموبايل
};
</script>

<template>
  <aside
    class="sidebar-container py-4 px-2 border border-[#E9E9E9] bg-[#F9F9F9] rounded-[1.25rem] w-full lg:w-[21.5rem] lg:flex-shrink-0"
  >
    <ul class="flex flex-col gap-2">
      <li
        v-for="(item, index) in sideData.sideBar"
        :key="item.id"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        @click="selectItem(item)"
        class="sidebar-item flex gap-2 items-center text-[1rem] px-3 py-3.5 rounded-[1.25rem] cursor-pointer border transition-all duration-200"
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

<style scoped>
@media (max-width: 1024px) {
  .sidebar-container {
    width: 100%;
  }

  .sidebar-item {
    font-size: 0.95rem;
    padding-inline: 0.75rem;
    padding-block: 0.7rem;
  }
}

@media (max-width: 640px) {
  .sidebar-item {
    font-size: 0.9rem;
    padding-inline: 0.6rem;
    padding-block: 0.6rem;
  }
}
</style>
