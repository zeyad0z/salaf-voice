<script setup>
import { ref } from "vue";
import BigCard from "~/components/UI/bigCard.vue";
import Card from "~/components/UI/card.vue";
import BooksCard from "~/components/UI/booksCard.vue";

/* Blogs (جاهزة للاستبدال بـ API لاحقًا) */
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

/* Books */
const books = [
  {
    text: "كونوا على الخير أعواناً",
    img: "/images/books/ea52f9a10abc4b73f29c44b7ed6ee1e3f5b40fe6.png",
  },
  {
    text: "الدين الإبراهيمي بين الحقيقة والضلال",
    img: "/images/books/5f49c796165c506ec0b5f0ed5f8d14a133155e5b.png",
  },
  {
    text: "كونوا على الخير أعواناً",
    img: "/images/books/821211867e8aef18a32b44ad814c15e504c7f15a.png",
  },
  {
    text: "الدين الإبراهيمي بين الحقيقة",
    img: "/images/books/252a8c089a0a87a8184feed10013e9ad3dd1b8de.png",
  },
];

/* Reading Library */
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

// مثال جاهز لو حابب تستبدل بـ endpoints:
// const { data: blogs } = await useFetch('/api/blogs/latest')
// const { data: books } = await useFetch('/api/books/latest')
</script>

<template>
  <div class="home-wrapper flex flex-col gap-4 w-full">
    <!-- main -->
    <div class="home-main flex gap-5">
      <!-- right side -->
      <div class="home-right flex-2 flex flex-col gap-4">
        <BigCard label="جديد المقالات" viewAll>
          <Card :items="blogs" author />
        </BigCard>

        <BigCard label="جديد الفتاوي" viewAll>
          <Card :items="blogs" author />
        </BigCard>

        <BigCard label="ارسال فتوي">
          <form class="fatwa-form m-4 flex flex-col gap-4">
            <input
              type="text"
              class="w-full h-[2.5rem] bg-[#FBFBFB] rounded-3xl px-4 border border-[#EDEDED] text-[#133349]"
              placeholder="الاسم"
            />
            <div class="fatwa-grid grid grid-cols-2 gap-x-8 gap-y-4">
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
              class="fatwa-submit h-[3.5rem] w-fit px-7 bg-[#6B9A8A] hover:bg-[#497D74] rounded-4xl flex justify-center items-center gap-1 cursor-pointer transition-all duration-200"
            >
              <client-only>
                <VsxIcon
                  iconName="Edit2"
                  :size="18"
                  color="#ffffff"
                  type="linear"
                />
              </client-only>
              <p class="text-[0.87rem] text-white">ارسل فتواك</p>
            </button>
          </form>
        </BigCard>
      </div>

      <!-- left side -->
      <div class="home-left flex flex-col gap-4">
        <BigCard label="الكتب" viewAll>
          <BooksCard :items="books" image />
        </BigCard>

        <!-- images -->
        <div class="home-images flex gap-4 mb-2">
          <img
            src="/images/right.png"
            alt="book image"
            class="home-image w-[165px] h-[165px] object-cover rounded-2xl"
          />
          <img
            src="/images/left.png"
            alt="book image"
            class="home-image w-[165px] h-[165px] object-cover rounded-2xl"
          />
        </div>

        <BigCard label="المكتبة المقروءة" blue viewAll class="w-full">
          <div
            class="reading-grid grid grid-cols-3 grid-rows-3 gap-3 my-3 mx-2"
          >
            <div
              v-for="item in readingLibrary"
              :key="item"
              class="reading-item bg-white border border-[#EDEDED] flex flex-col items-center justify-center rounded-[1.25rem] w-[100px] h-[100px]"
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
            class="newsletter flex flex-col justify-center items-center gap-4 py-14 px-3"
          >
            <p class="text-[0.87rem] text-black">اشترك في النشرة البريدية</p>
            <input
              type="text"
              class="newsletter-input w-full h-[2.5rem] bg-[#FBFBFB] rounded-4xl px-4 border border-[#EDEDED] text-black"
              placeholder="ادخل البريد الإلكترونى"
            />
            <button
              class="newsletter-btn w-[46%] h-14 bg-[#6B9A8A] hover:bg-[#497D74] rounded-4xl text-white flex justify-center items-center gap-1 cursor-pointer mb-1 transition-all duration-200"
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

<style scoped>
/* < 1280px */
@media (max-width: 1280px) {
  .home-main {
    gap: 1rem;
  }

  .home-right,
  .home-left {
    flex: 1;
  }

  .reading-item {
    width: 90px;
    height: 90px;
  }

  .home-image {
    width: 150px;
    height: 150px;
  }
}

/* <= 1024px */
@media (max-width: 1024px) {
  .home-main {
    flex-direction: column;
  }

  .home-left {
    order: 2;
  }

  .home-right {
    order: 1;
  }

  .reading-grid {
    gap: 0.65rem;
  }

  .reading-item {
    width: 100%;
    max-width: 110px;
    height: 90px;
  }

  .fatwa-grid {
    gap-inline: 1rem;
  }

  .home-images {
    justify-content: space-between;
  }

  .home-image {
    width: 48%;
    height: 240px;
  }
}

/* <= 640px */
@media (max-width: 640px) {
  .home-wrapper {
    gap: 1.25rem;
  }

  .home-main {
    gap: 1.25rem;
  }

  .fatwa-form {
    margin: 0.75rem;
    gap: 0.9rem;
  }

  .fatwa-grid {
    grid-template-columns: 1fr;
    gap-inline: 0.75rem;
    gap-block: 0.75rem;
  }

  .fatwa-submit {
    width: 100%;
    justify-content: center;
  }

  .home-images {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .home-image {
    width: 48%;
    max-width: none;
    height: 220px;
  }

  .reading-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-items: center;
    gap: 0.7rem;
  }

  .reading-item {
    width: 100%;
    max-width: 130px;
    height: 90px;
  }

  .newsletter {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    gap: 0.9rem;
  }

  .newsletter-btn {
    width: 100%;
    height: 3.2rem;
  }

  .newsletter-input {
    height: 2.4rem;
  }
}
</style>
