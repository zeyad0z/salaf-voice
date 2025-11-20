<script setup>
import { ref } from "vue";

const headerItems = ref([
  "ما بين الدنيا والآخرة",
  "منهج السلف",
  "الفتاوى الشرعية",
  "دروس في العقيدة",
]);

const currentIndex = ref(0);

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % headerItems.value.length;
};

const prevItem = () => {
  currentIndex.value =
    (currentIndex.value - 1 + headerItems.value.length) %
    headerItems.value.length;
};
</script>

<template>
  <div
    class="main-head border border-[#E9E9E9] flex justify-between bg-[#F9F9F9] py-5 px-4 rounded-[1.25rem]"
  >
    <div class="flex justify-center items-center gap-4">
      <client-only>
        <VsxIcon
          iconName="ArchiveBook"
          type="linear"
          :size="32"
          color="#6B9A8A"
          class="header-icon"
        />

        <transition name="slide-vertical" mode="out-in">
          <span
            :key="currentIndex"
            class="header-text text-[#133349] font-bold text-[1rem] block"
          >
            {{ headerItems[currentIndex] }}
          </span>
        </transition>
      </client-only>
    </div>

    <!-- ARROWS -->
    <div class="arrows-col flex flex-col gap-1 me-2">
      <button class="arrow-btn transition-all duration-200" @click="nextItem">
        <client-only>
          <VsxIcon
            iconName="ArrowSquareUp"
            :size="22"
            type="linear"
            :style="{ color: 'var(--icon-color)' }"
            class="arrow-icon"
          />
        </client-only>
      </button>

      <button class="arrow-btn transition-all duration-200" @click="prevItem">
        <client-only>
          <VsxIcon
            iconName="ArrowSquareDown"
            :size="22"
            type="linear"
            :style="{ color: 'var(--icon-color)' }"
            class="arrow-icon"
          />
        </client-only>
      </button>
    </div>
  </div>
</template>

<style scoped>
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

.arrow-btn:hover {
  background-color: #133349 !important;
  border-radius: 6px;
  --icon-color: #ffffff;
}

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

/* ==================  لابتوب / تابلت (max-width: 1024px) ================== */
@media (max-width: 1024px) {
  .main-head {
    padding-inline: 1rem;
    padding-block: 1.1rem;
  }

  .header-text {
    font-size: 0.95rem;
  }

  .header-icon :deep(svg) {
    transform: scale(0.92);
  }

  .arrow-icon :deep(svg) {
    transform: scale(0.9);
  }
}

/* ==================  موبايل (max-width: 640px) ================== */
@media (max-width: 640px) {
  .main-head {
    padding-inline: 0.9rem;
    padding-block: 0.9rem;
    gap: 0.75rem;
  }

  .header-text {
    font-size: 0.9rem;
  }

  .header-icon :deep(svg) {
    transform: scale(0.85);
  }

  .arrows-col {
    gap: 0.4rem;
  }

  .arrow-icon :deep(svg) {
    transform: scale(0.85);
  }
}
</style>
