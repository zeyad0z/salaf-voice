<script setup>
import { navigateTo } from "#app";
const router = useRouter();
</script>

<template>
  <div class="bg-[#EFE9D5] w-full py-1 flex justify-between items-center">
    <!-- right section -->
    <div class="flex justify-center items-center gap-6">
      <!-- logo + title -->
      <div class="flex gap-1.5">
        <img
          src="../../assets/logo 2.svg"
          alt="logo"
          class="w-[2.87rem] h-[4.93rem]"
        />
        <div class="flex flex-col mt-4">
          <span class="text-[0.87rem]">الموقع الرسمي لفضيلة</span>
          <span class="text-[#6B9A8A] font-semibold text-[1.15rem]">
            الشيخ ياسر برهامي
          </span>
        </div>
      </div>

      <!-- seach bar -->
      <div
        class="flex w-[36.8rem] h-[2.7rem] bg-[#FFFFFF] rounded-4xl p-1 items-center"
      >
        <div class="relative">
          <select
            class="w-[7.3rem] h-[2.25rem] bg-[#497D74] rounded-4xl text-[#ffffff] px-3 text-[0.87rem] cursor-pointer appearance-none"
          >
            <option selected>فتاوي</option>
          </select>

          <!-- custom arrow -->
          <client-only>
            <VsxIcon
              iconName="ArrowDown2"
              :size="14"
              color="#ffffff"
              type="linear"
              class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </client-only>
        </div>

        <input
          type="text"
          placeholder="كلمة البحث ..."
          class="flex-1 h-[2.25rem] text-[0.87rem] text-[#596780] ms-5 bg-transparent outline-none"
        />
        <client-only>
          <VsxIcon
            iconName="SearchNormal1"
            :size="24"
            color="#596780"
            type="linear"
            class="me-4"
          />
        </client-only>
      </div>
    </div>

    <!-- left section -->
    <div class="flex justify-center items-center gap-3.5">
      <!-- send fatwa -->
      <button
        class="bg-[#497D74] w-[9.3rem] h-[3.43rem] rounded-4xl flex justify-center items-center gap-1 cursor-pointer"
      >
        <client-only>
          <VsxIcon iconName="Edit2" :size="18" color="#ffffff" type="linear" />
        </client-only>
        <p class="text-[0.87rem] text-[#ffffff]">ارسل فتواك</p>
      </button>

      <!-- archive add -->
      <button
        class="w-[2.75rem] h-[2.75rem] rounded-full bg-[#ffffff] border border-[#E5EEE7] flex justify-center items-center cursor-pointer"
      >
        <client-only>
          <VsxIcon
            iconName="ArchiveAdd"
            :size="24"
            color="#6DA592"
            type="linear"
          />
        </client-only>
      </button>

      <!-- notification -->
      <button
        class="w-[2.75rem] h-[2.75rem] rounded-full bg-[#ffffff] border border-[#E5EEE7] flex justify-center items-center cursor-pointer"
      >
        <client-only>
          <VsxIcon
            iconName="Notification"
            :size="24"
            color="#6DA592"
            type="linear"
          />
        </client-only>
      </button>

      <!-- create account -->
      <button
        class="underline text-[0.87rem] text-[#133349] cursor-pointer"
        @click="router.push('/signup')"
      >
        انشاء حساب جديد
      </button>

      <!-- login -->
      <button
        @click="router.push('/login')"
        class="w-[9.37rem] h-[3rem] bg-[#ffffff] border border-[#E5EEE7] rounded-4xl flex justify-center items-center gap-1 cursor-pointer"
      >
        <client-only>
          <VsxIcon
            iconName="LoginCurve"
            :size="24"
            color="#7FB09F"
            type="linear"
          />
        </client-only>
        <p class="text-[0.87rem] text-[#133349]">تسجيل دخول</p>
      </button>
    </div>
  </div>
</template>
