<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const confirmPassword = ref("");

// TODO: هنا هتوصل بالـ endpoint الحقيقي
async function signup() {
  console.log("Signup with", {
    username: username.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });
}
</script>

<template>
  <form
    @submit.prevent="signup"
    class="flex flex-col items-center bg-[#F9F9F9] border border-[#E4E4E4] rounded-[16px] sm:rounded-[16px] md:rounded-[20px] w-full gap-5 sm:gap-5 md:gap-6 py-8 sm:py-9 md:py-9 lg:py-10 px-4 sm:px-5 md:px-6 lg:px-2"
  >
    <!-- العنوان -->
    <span
      class="text-[#002955] font-semibold text-[1.05rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem]"
    >
      انشاء حساب جديد
    </span>

    <!-- الحقول -->
    <div class="flex flex-col gap-4 w-full md:w-full lg:w-[85%]">
      <!-- اسم المستخدم -->
      <div class="flex flex-col gap-2">
        <label
          class="text-[#2D3748] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] mr-3 sm:mr-4 md:mr-5 lg:mr-6"
        >
          اسم المستخدم
        </label>
        <input
          v-model="username"
          type="text"
          placeholder="اسم المستخدم"
          class="border border-[#E9E9E9] bg-[#F4F4F4] rounded-[15px] text-[#2D3748] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] px-4 py-[0.9rem] sm:py-[1rem] md:py-[1.1rem] lg:py-[1.3rem] outline-none"
        />
      </div>

      <!-- كلمة المرور -->
      <div class="flex flex-col gap-2">
        <label
          class="text-[#2D3748] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] mr-3 sm:mr-4 md:mr-5 lg:mr-6"
        >
          كلمة المرور
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="كلمة المرور"
          class="border border-[#E9E9E9] bg-[#F4F4F4] rounded-[15px] text-[#2D3748] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] px-4 py-[0.9rem] sm:py-[1rem] md:py-[1.1rem] lg:py-[1.3rem] outline-none"
        />
      </div>

      <!-- تأكيد كلمة المرور -->
      <div class="flex flex-col gap-2">
        <label
          class="text-[#2D3748] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] mr-3 sm:mr-4 md:mr-5 lg:mr-6"
        >
          تاكيد كلمة المرور
        </label>
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="تاكيد كلمة المرور"
          class="border border-[#E9E9E9] bg-[#F4F4F4] rounded-[15px] text-[#2D3748] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] px-4 py-[0.9rem] sm:py-[1rem] md:py-[1.1rem] lg:py-[1.3rem] outline-none"
        />
      </div>
    </div>

    <!-- زر إنشاء حساب -->
    <button
      type="submit"
      class="bg-[#27445D] text-white rounded-[12px] cursor-pointer w-full md:w-full lg:w-[85%] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] py-[1rem] sm:py-[1.15rem] md:py-[1.3rem] lg:py-[1.5rem] mb-4 md:mb-5"
    >
      انشاء حساب جديد
    </button>
  </form>
</template>
