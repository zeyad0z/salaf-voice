<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import DefaultImage from "~/components/UI/defaultImage.vue";
import Pagination from "~/components/UI/pagination.vue";
import { useCatsStore } from "~/stores/cats";
import { useSubCatsStore } from "~/stores/subCats";

const router = useRouter();
const cats = useCatsStore();
const subCats = useSubCatsStore();

// لاحقًا: استبدل بيانات cats.cats بنداء API
// مثال: const { data } = await useFetch('/api/cats', { params: { subCatId: subCats.selectedSubCat?.id } })

const selectCat = (item) => {
  cats.setSelectedCat(item);
  router.push("/blog");
};

const currentPage = ref(1);
const itemsPerPage = 9;

const paginatedCats = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return cats.cats.slice(start, end);
});

const totalPages = computed(
  () => Math.ceil((cats.cats?.length || 0) / itemsPerPage) || 1
);
</script>

<template>
  <div class="cats-wrapper flex flex-col gap-4">
    <!-- Breadcrumb -->
    <div class="w-fit flex items-center gap-4 ps-3">
      <client-only>
        <VsxIcon
          iconName="Home2"
          :size="24"
          color="#497D74"
          type="linear"
          class="cursor-pointer"
          @click="$router.push('/')"
        />
      </client-only>

      <div
        class="cats-breadcrumb flex gap-2 justify-center items-center text-[1rem]"
      >
        <p class="crumb-text text-[#B8C2CA]">»</p>
        <p
          class="crumb-text text-[#B8C2CA] cursor-pointer"
          @click="$router.push('/subCats')"
        >
          الفتاوي
        </p>
        <p class="crumb-text text-[#497D74]">»</p>
        <p class="crumb-text text-[#497D74]">
          {{ subCats.selectedSubCat?.label }}
        </p>
      </div>
    </div>

    <!-- Cards Grid -->
    <div
      class="cats-grid w-full bg-[#F9F9F9] border border-[#E9E9E9] rounded-[1.25rem] p-4 grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4"
    >
      <button
        v-for="item in paginatedCats"
        :key="item.id || item.label"
        @click="selectCat(item)"
        class="cats-card p-2 h-fit bg-[#F9F9F9] hover:bg-[#E9E9E9] border border-[#E9E9E9] rounded-[20px] flex flex-col cursor-pointer transition-colors duration-200"
      >
        <div class="flex flex-col gap-2.5 items-center justify-center">
          <img
            v-if="item.image"
            :src="item.image"
            class="cats-image rounded-[20px] w-full h-[191px] object-cover"
          />
          <DefaultImage v-else />

          <p
            class="cats-title text-[1rem] text-[#27445D] font-bold text-center"
          >
            {{ item.label }}
          </p>
        </div>

        <hr class="w-full border-[#dbd7d7] my-2" />

        <div class="flex flex-col gap-2.5">
          <div class="flex items-center gap-1">
            <client-only>
              <VsxIcon
                iconName="Edit2"
                :size="16"
                color="#B8C2CA"
                type="linear"
              />
            </client-only>
            <p class="cats-meta text-[0.87rem] text-[#313436]">
              {{ item.author }}
            </p>
          </div>

          <div class="flex gap-5">
            <div class="flex items-center gap-1">
              <client-only>
                <VsxIcon
                  iconName="Note1"
                  :size="18"
                  color="#B8C2CA"
                  type="linear"
                />
              </client-only>
              <p class="cats-meta text-[0.87rem] text-[#313436]">
                {{ item.date }}
              </p>
            </div>

            <div class="flex items-center gap-1">
              <client-only>
                <VsxIcon
                  iconName="Eye"
                  :size="18"
                  color="#B8C2CA"
                  type="linear"
                />
              </client-only>
              <p class="cats-meta text-[0.87rem] text-[#313436]">
                {{ item.nViews }}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-2 mb-1">
      <Pagination v-model="currentPage" :totalPages="totalPages" />
    </div>
  </div>
</template>

<style scoped>
/* لابتوب أصغر / تابلت كبير */
@media (max-width: 1280px) {
  .cats-grid {
    gap: 1rem 1.25rem;
  }

  .cats-card {
    padding-inline: 0.75rem;
  }

  .cats-image {
    height: 180px;
  }
}

/* تابلت (<= 1024px) */
@media (max-width: 1024px) {
  .cats-grid {
    padding: 1rem;
    gap: 1rem;
  }

  .cats-image {
    height: 170px;
  }

  .cats-title {
    font-size: 0.95rem;
  }

  .cats-meta {
    font-size: 0.8rem;
  }
}

/* موبايل (<= 640px) */
@media (max-width: 640px) {
  .cats-grid {
    gap: 0.85rem;
    padding: 0.9rem;
  }

  .cats-card {
    padding-inline: 0.6rem;
    padding-block: 0.8rem;
  }

  .cats-image {
    height: 150px;
  }

  .cats-title {
    font-size: 0.9rem;
  }

  .cats-meta {
    font-size: 0.78rem;
  }
}

/* شاشات صغيرة جداً (<= 400px): نخليها عمود واحد */
@media (max-width: 400px) {
  .cats-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

/* breadcrumb text */
.cats-breadcrumb {
  white-space: nowrap;
  gap: 0.5rem;
}

.crumb-text {
  font-size: 1rem;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .cats-breadcrumb {
    gap: 0.4rem;
  }
  .crumb-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .cats-breadcrumb {
    gap: 0.3rem;
  }
  .crumb-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .cats-breadcrumb {
    gap: 0.2rem;
  }
  .crumb-text {
    font-size: 0.7rem;
  }
}

@media (max-width: 360px) {
  .crumb-text {
    font-size: 0.62rem;
  }
}
</style>
