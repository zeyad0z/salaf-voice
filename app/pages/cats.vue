<script setup>
import { useRouter } from "vue-router";
import DefaultImage from "~/components/UI/defaultImage.vue";
import { useCatsStore } from "~/stores/cats";
import { useSubCatsStore } from "~/stores/subCats";
import { ref, computed } from "vue";
import Pagination from "~/components/UI/pagination.vue";

const router = useRouter();
const cats = useCatsStore();
const subCats = useSubCatsStore();

const selectCat = (item) => {
  cats.setSelectedCat(item);
  router.push("/blog");
};

const currentPage = ref(1);
const itemsPerPage = 9; // عدد العناصر لكل صفحة

// حساب العناصر المرئية حسب الصفحة
const paginatedCats = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return cats.cats.slice(start, end);
});

const totalPages = computed(() => Math.ceil(cats.cats.length / itemsPerPage));
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-fit flex justify-center items-center gap-4 ps-3">
      <client-only>
        <VsxIcon iconName="Home2" :size="24" color="#497D74" type="linear" />
      </client-only>

      <div class="flex gap-2 justify-center items-center">
        <p class="text-[1rem] text-[#B8C2CA]">»</p>
        <p class="text-[1rem] text-[#B8C2CA]">الفتاوي</p>
        <p class="text-[1rem] text-[#497D74]">»</p>
        <p class="text-[1rem] text-[#497D74]">
          {{ subCats.selectedSubCat?.label }}
        </p>
      </div>
    </div>

    <div
      class="w-full bg-[#F9F9F9] border border-[#E9E9E9] rounded-[1.25rem] p-4 grid grid-cols-3 gap-x-5 gap-y-4"
    >
      <button
        @click="selectCat(item)"
        v-for="item in paginatedCats"
        class="p-2 h-fit bg-[#F9F9F9] hover:bg-[#E9E9E9] border border-[#E9E9E9] rounded-[20px] flex flex-col cursor-pointer transition-colors duration-200"
      >
        <div class="flex flex-col gap-2.5 items-center justify-center">
          <img
            v-if="item.image"
            :src="item.image"
            class="rounded-[20px] w-full h-[191px] object-fill"
          />
          <DefaultImage v-else />
          <p class="text-[1rem] text-[#27445D] font-bold">{{ item.label }}</p>
        </div>

        <hr class="w-full border-[#dbd7d7] my-2" />

        <div class="flex flex-col gap-2.5">
          <div class="flex flex-start items-center gap-1">
            <client-only>
              <VsxIcon
                iconName="Edit2"
                :size="16"
                color="#B8C2CA"
                type="linear"
              />
            </client-only>
            <p class="text-[0.87rem] text-[#313436]">{{ item.author }}</p>
          </div>

          <div class="flex gap-5">
            <div class="flex flex-start items-center gap-1">
              <client-only>
                <VsxIcon
                  iconName="Note1"
                  :size="18"
                  color="#B8C2CA"
                  type="linear"
                />
              </client-only>
              <p class="text-[0.87rem] text-[#313436]">{{ item.date }}</p>
            </div>

            <div class="flex flex-start items-center gap-1">
              <client-only>
                <VsxIcon
                  iconName="Eye"
                  :size="18"
                  color="#B8C2CA"
                  type="linear"
                />
              </client-only>
              <p class="text-[0.87rem] text-[#313436]">{{ item.nViews }}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
    <!-- Pagination -->
    <div class="flex justify-center">
      <Pagination v-model="currentPage" :total-pages="totalPages" />
    </div>
  </div>
</template>
