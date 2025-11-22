<script setup>
import { useRouter } from "vue-router";
import { useSubCatsStore } from "~/stores/subCats";

const router = useRouter();
const subCats = useSubCatsStore();

// لاحقًا: ممكن تستبدل subCats.subCats بنداء API
// مثال: const { data } = await useFetch('/api/subcats') ثم تحفظهم في الـ store
const selectSub = (item) => {
  subCats.setSelectedSubCat(item);
  router.push("/cats");
};
</script>

<template>
  <div class="subcats-wrapper flex flex-col gap-4">
    <!-- Breadcrumb -->
    <div class="breadcrumb flex items-center gap-3 ps-3 overflow-hidden">
      <client-only>
        <VsxIcon iconName="Home2" :size="20" color="#497D74" type="linear" />
      </client-only>

      <div
        class="breadcrumb-path flex items-center gap-1 whitespace-nowrap overflow-hidden"
      >
        <p class="breadcrumb-text text-[#497D74]">»</p>
        <p class="breadcrumb-text text-[#497D74]">الفتاوي</p>
      </div>
    </div>

    <!-- Sub Categories Grid -->
    <div
      class="subcats-grid w-full bg-[#F9F9F9] border border-[#E9E9E9] rounded-[1.25rem] px-5 py-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
    >
      <button
        v-for="item in subCats.subCats"
        :key="item.id || item.label"
        @click="selectSub(item)"
        class="subcats-btn p-4 sm:p-6 h-fit bg-[#27445D] text-[0.95rem] sm:text-[1rem] text-white font-bold rounded-[10px] flex items-center justify-center text-center cursor-pointer hover:bg-[#497D74] transition-colors duration-200"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* تابلت وما تحتها */
@media (max-width: 1024px) {
  .subcats-grid {
    padding-inline: 1.25rem;
    padding-block: 1.5rem;
    gap: 1rem;
  }

  .subcats-btn {
    font-size: 0.95rem;
    padding-block: 0.9rem;
  }

  .breadcrumb-text {
    font-size: 0.9rem;
  }
}

/* موبايل (<= 640px) */
@media (max-width: 640px) {
  .subcats-grid {
    padding-inline: 1rem;
    padding-block: 1.25rem;
    gap: 0.75rem;
  }

  .subcats-btn {
    font-size: 0.9rem;
    padding-block: 0.8rem;
  }

  .breadcrumb {
    gap: 0.25rem;
    padding-inline-start: 0.4rem;
  }

  .breadcrumb-path {
    gap: 0.15rem;
  }

  .breadcrumb-text {
    font-size: 0.68rem;
  }
}

/* موبايل صغير جداً (<= 400px) */
@media (max-width: 400px) {
  .subcats-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .breadcrumb-text {
    font-size: 0.6rem;
  }
}
</style>
