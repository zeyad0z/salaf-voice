<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

function login() {
  // add your login logic
  console.log("Login with", username.value, password.value);
}
</script>

<template>
  <form
    @submit.prevent="login"
    class="login-form flex flex-col gap-6 bg-[#F9F9F9] rounded-[20px] border border-[#E4E4E4] items-center py-10 px-2"
  >
    <span class="login-title text-[#002955] text-[1.25rem] font-semibold">
      تسجيل الدخول
    </span>

    <div class="login-fields flex flex-col gap-4 w-[85%]">
      <div class="flex flex-col gap-2">
        <label class="login-label text-[1rem] text-[#2D3748] mr-6">
          اسم المستخدم
        </label>
        <input
          v-model="username"
          type="text"
          placeholder="اسم المستخدم"
          class="login-input border border-[#E9E9E9] px-4 rounded-[15px] bg-[#F4F4F4] py-[1.3rem] text-[1rem] text-[#2D3748]"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label class="login-label text-[1rem] text-[#2D3748] mr-6">
          كلمة المرور
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="كلمة المرور"
          class="login-input border border-[#E9E9E9] px-4 rounded-[15px] bg-[#F4F4F4] py-[1.3rem] text-[1rem] text-[#2D3748]"
        />
      </div>
    </div>

    <button
      type="submit"
      class="login-button bg-[#27445D] text-white rounded-[12px] py-[1.5rem] mb-5 w-[85%] text-[1rem] cursor-pointer"
    >
      تسجيل الدخول
    </button>
  </form>
</template>

<style scoped>
/* Desktop (1535px+) stays exactly as your Tailwind classes define */

/* Slightly smaller laptops / tablets */
@media (max-width: 1024px) {
  .login-form {
    width: 100%;
    /* ❌ removed max-width here so it matches the tabs width */
    padding-inline: 1.5rem;
  }

  .login-fields {
    width: 100%;
  }

  .login-title {
    font-size: 1.2rem;
  }

  .login-label {
    font-size: 0.95rem;
    margin-right: 1.25rem;
  }

  .login-input {
    font-size: 0.95rem;
    padding-block: 1.1rem;
  }

  .login-button {
    width: 100%;
    font-size: 0.95rem;
    padding-block: 1.3rem;
  }
}

/* Large phones / small tablets */
@media (max-width: 768px) {
  .login-form {
    /* ❌ removed max-width: 420px so it doesn't shrink more than the tabs */
    padding-inline: 1.25rem;
    padding-block: 2.25rem;
    gap: 1.25rem;
  }

  .login-title {
    font-size: 1.1rem;
  }

  .login-label {
    font-size: 0.9rem;
    margin-right: 1rem;
  }

  .login-input {
    font-size: 0.9rem;
    padding-block: 1rem;
  }

  .login-button {
    font-size: 0.9rem;
    padding-block: 1.15rem;
    margin-bottom: 1rem;
  }
}

/* Small phones */
@media (max-width: 640px) {
  .login-form {
    /* هنا فقط لو حابب تضبط الموبايل قوي */
    max-width: 100%;
    border-radius: 16px;
    padding-inline: 1rem;
    padding-block: 2rem;
  }

  .login-title {
    font-size: 1.05rem;
  }

  .login-label {
    font-size: 0.85rem;
    margin-right: 0.75rem;
  }

  .login-input {
    font-size: 0.85rem;
    padding-block: 0.9rem;
  }

  .login-button {
    font-size: 0.85rem;
    padding-block: 1rem;
  }
}
</style>
