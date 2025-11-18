<script setup>
import { ref } from "vue";
import BigCard from "~/components/UI/bigCard.vue";
import Card from "~/components/UI/card.vue";
import BooksCard from "~/components/UI/booksCard.vue";

/* ---------------------- Blogs ---------------------- */
const blogs = ref([
  {
    text: "الدين الإبراهيمي بين الحقيقة والضلال (196) دعوة إبراهيم صلى الله عليه وسلم أباه إلى التوحيد",
    author: "ياسر برهامي",
  },
  {
    text: "الدين الإبراهيمي بين الحقيقة والضلال (196) دعوة إبراهيم صلى الله عليه وسلم",
    author: "زياد الكيلاني",
  },
  {
    text: "الدين الإبراهيمي بين الحقيقة والضلال (196) دعوة إبراهيم",
    author: "محمد اشرف",
  },
  {
    text: "الدين الإبراهيمي بين الحقيقة والضلال (196) دعوة إبراهيم صلى الله عليه وسلم",
    author: "احمد محمود",
  },
]);

/* ---------------------- Books (Auto Images Loader) ---------------------- */
const images = import.meta.glob("~/assets/books/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

// the texts
const bookTexts = [
  "كونوا على الخير أعواناً",
  "الدين الإبراهيمي بين الحقيقة والضلال",
  "كونوا على الخير أعواناً",
  "الدين الإبراهيمي بين الحقيقة",
];

// merge images + texts
const books = Object.values(images).map((img, i) => ({
  img,
  text: bookTexts[i] || "",
}));

/* ---------------------- reading library ---------------------- */
const readingLibrary = ref([
  "العقيدة",
  "الزهد والرقائق",
  "الفرق والمذاهب",
  "التفسير وعلوم القرآن",
  "الحديث الشريف",
  "التربية والسلوك",
  "قضايا دعوية",
  "الفقه",
  "السير والتاريخ",
]);

/* ---------------------- Header Rotating Text ---------------------- */
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
  <div class="flex flex-col gap-4 w-full">
    <!-- head -->
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
              {{ headerItems[currentIndex] }}
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
    
    <!-- main -->
    <div class="flex gap-5">
      <!-- right side -->
      <div class="flex-2 flex flex-col gap-4">
        <BigCard label="جديد المقالات" viewAll="true">
          <Card :items="blogs" author="true" />
        </BigCard>

        <BigCard label="جديد الفتاوي" viewAll="true">
          <Card :items="blogs" author="true" />
        </BigCard>

        <BigCard label="ارسال فتوي">
          <form action="" class="m-4 flex flex-col gap-4">
            <input
              type="text"
              class="w-full h-[2.5rem] bg-[#FBFBFB] rounded-3xl px-4 border border-[#EDEDED] text-[#133349]"
              placeholder="الاسم"
            />
            <div class="grid grid-cols-2 gap-x-8 gap-y-4">
              <input
                type="text"
                class="w-full h-[2.5rem] bg-[#FBFBFB] rounded-3xl px-4 border border-[#EDEDED] text-[#133349]"
                placeholder="البريد الإلكترونى"
              />
              <input
                type="text"
                class="w-full h-[2.5rem] bg-[#FBFBFB] rounded-3xl px-4 border border-[#EDEDED] text-[#133349]"
                placeholder="السن"
              />
              <input
                type="text"
                class="w-full h-[2.5rem] bg-[#FBFBFB] rounded-3xl px-4 border border-[#EDEDED] text-[#133349]"
                placeholder="البلد"
              />
              <input
                type="text"
                class="w-full h-[2.5rem] bg-[#FBFBFB] rounded-3xl px-4 border border-[#EDEDED] text-[#133349]"
                placeholder="موضوع الاستفتاء"
              />
            </div>
            <textarea
              class="w-full h-[6rem] bg-[#FBFBFB] rounded-3xl px-4 border border-[#EDEDED] text-[#133349] text-[0.87rem]"
              placeholder="السؤال"
            ></textarea>
            <button
              class="h-[3.5rem] w-fit px-7 bg-[#6B9A8A] rounded-4xl flex justify-center items-center gap-1 cursor-pointer"
            >
              <client-only>
                <VsxIcon
                  iconName="Edit2"
                  :size="18"
                  color="#ffffff"
                  type="linear"
                />
              </client-only>
              <p class="text-[0.87rem] text-[#ffffff]">ارسل فتواك</p>
            </button>
          </form>
        </BigCard>
      </div>

      <!-- left side -->
      <div class="flex flex-col gap-4">
        <BigCard label="الكتب" viewAll="true" class="">
          <BooksCard :items="books" image="true" />
        </BigCard>

        <!-- images -->
        <div class="flex gap-4 mb-2">
          <img
            src="../assets/right.png"
            alt="book image"
            class="w-[165px] h-[165px] object-cover rounded-2xl"
          />
          <img
            src="../assets/left.png"
            alt="book image"
            class="w-[165px] h-[165px] object-cover rounded-2xl"
          />
        </div>

        <BigCard
          label="المكتبة المقروءة"
          blue="true"
          viewAll="true"
          class="w-full"
        >
          <div class="grid grid-cols-3 grid-rows-3 gap-3 my-3 mx-2">
            <div
              class="bg-[#FFFFFF] border border-[#EDEDED] flex flex-col items-center justify-center rounded-[1.25rem] w-[100px] h-[100px]"
              v-for="item in readingLibrary"
              :key="item"
            >
              <client-only>
                <VsxIcon
                  iconName="ArchiveBook"
                  type="outline"
                  :size="46"
                  color="#133349"
                />
              </client-only>
              <p class="text-[#133349] text-[0.87rem] text-center">
                {{ item }}
              </p>
            </div>
          </div>
        </BigCard>

        <BigCard label="النشرة البريدية" class="w-full">
          <div
            class="flex flex-col justify-center items-center gap-4 py-14 px-3"
          >
            <p class="text-[0.87rem] text-[#000000]">
              اشترك في النشرة البريدية
            </p>
            <input
              type="text"
              class="w-full h-[2.5rem] bg-[#FBFBFB] rounded-4xl px-4 border border-[#EDEDED] text-[#000000]"
              placeholder="ادخل البريد الإلكترونى"
            />
            <button
              class="w-[46%] h-14 bg-[#6B9A8A] rounded-4xl text-white flex justify-center items-center gap-1 cursor-pointer mb-1"
            >
              <client-only>
                <VsxIcon
                  iconName="Edit2"
                  :size="18"
                  color="#ffffff"
                  type="linear"
                />
              </client-only>
              <span class="text-[0.87rem]">اشتراك</span>
            </button>
          </div>
        </BigCard>
      </div>
    </div>
  </div>
</template>

<style>
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
</style>
