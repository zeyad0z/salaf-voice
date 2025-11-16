<script setup>
import { ref } from "vue";
import BigCard from "~/components/UI/bigCard.vue";

const items = ref([
  "ما بين الدنيا والآخرة",
  "منهج السلف",
  "الفتاوى الشرعية",
  "دروس في العقيدة",
]);

const currentIndex = ref(0);

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length;
};

const prevItem = () => {
  currentIndex.value =
    (currentIndex.value - 1 + items.value.length) % items.value.length;
};
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <!-- first -->
    <div
      class="border border-[#E9E9E9] flex justify-between bg-[#F9F9F9] py-5 px-4 rounded-[1.25rem]"
    >
      <div class="flex justify-center items-center gap-4">
        <client-only>
          <VsxIcon
            iconName="ArchiveBook"
            type="linear"
            :size="32"
            color="#6B9A8A"
          />

          <transition name="slide-vertical" mode="out-in">
            <span
              :key="currentIndex"
              class="text-[#133349] font-bold text-[1rem] block"
            >
              {{ items[currentIndex] }}
            </span>
          </transition>
        </client-only>
      </div>

      <!-- ARROWS -->
      <div class="flex flex-col gap-1 me-2">
        <button class="arrow-btn group" @click="nextItem">
          <client-only>
            <VsxIcon
              iconName="ArrowSquareUp"
              :size="22"
              type="linear"
              :style="{ color: 'var(--icon-color)' }"
            />
          </client-only>
        </button>

        <button class="arrow-btn group" @click="prevItem">
          <client-only>
            <VsxIcon
              iconName="ArrowSquareDown"
              :size="22"
              type="linear"
              :style="{ color: 'var(--icon-color)' }"
            />
          </client-only>
        </button>
      </div>
    </div>

    <!-- BigCard under it in column -->
    <BigCard label="zeyad" />
  </div>
</template>

<style>
/* Reset button */
.arrow-btn {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  --icon-color: #133349;
}

/* Hover background + icon color */
.arrow-btn:hover {
  background-color: #133349 !important;
  border-radius: 6px;
  --icon-color: #ffffff;
}

/* Slide transition */
.slide-vertical-enter-active,
.slide-vertical-leave-active {
  transition: all 0.25s ease;
}

.slide-vertical-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.slide-vertical-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
