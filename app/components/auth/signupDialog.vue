<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

function signup() {
  // add your signup logic
  console.log("Signup with", username.value, password.value);
}
</script>

<template>
  <form
    @submit.prevent="signup"
    class="signup-form flex flex-col gap-6 bg-[#F9F9F9] rounded-[20px] border border-[#E4E4E4] items-center py-10 px-2"
  >
    <text class="signup-title text-[#002955] text-[1.25rem] font-semibold">
      انشاء حساب جديد
    </text>

    <div class="signup-fields flex flex-col gap-4 w-[85%]">
      <div class="flex flex-col gap-2">
        <label class="signup-label text-[1rem] text-[#2D3748] mr-6">
          اسم المستخدم
        </label>
        <input
          v-model="username"
          type="text"
          placeholder="اسم المستخدم"
          class="signup-input border border-[#E9E9E9] px-4 rounded-[15px] bg-[#F4F4F4] py-[1.3rem] text-[1rem] text-[#2D3748]"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label class="signup-label text-[1rem] text-[#2D3748] mr-6">
          كلمة المرور
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="كلمة المرور"
          class="signup-input border border-[#E9E9E9] px-4 rounded-[15px] bg-[#F4F4F4] py-[1.3rem] text-[1rem] text-[#2D3748]"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label class="signup-label text-[1rem] text-[#2D3748] mr-6">
          تاكيد كلمة المرور
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="تاكيد كلمة المرور"
          class="signup-input border border-[#E9E9E9] px-4 rounded-[15px] bg-[#F4F4F4] py-[1.3rem] text-[1rem] text-[#2D3748]"
        />
      </div>
    </div>

    <button
      type="submit"
      class="signup-button bg-[#27445D] text-white rounded-[12px] py-[1.5rem] mb-5 w-[85%] text-[1rem] cursor-pointer"
    >
      انشاء حساب جديد
    </button>
  </form>
</template>

<style scoped>
/* Desktop (your main width) = exactly as Tailwind defines it */

/* Tablets / small laptops */
@media (max-width: 1024px) {
  .signup-form {
    width: 100%;
    /* no max-width so it matches the tabs/modal width */
    padding-inline: 1.5rem;
  }

  .signup-fields {
    width: 100%;
  }

  .signup-title {
    font-size: 1.2rem;
  }

  .signup-label {
    font-size: 0.95rem;
    margin-right: 1.25rem;
  }

  .signup-input {
    font-size: 0.95rem;
    padding-block: 1.1rem;
  }

  .signup-button {
    width: 100%;
    font-size: 0.95rem;
    padding-block: 1.3rem;
  }
}

/* Large phones / small tablets */
@media (max-width: 768px) {
  .signup-form {
    padding-inline: 1.25rem;
    padding-block: 2.25rem;
    gap: 1.25rem;
  }

  .signup-title {
    font-size: 1.1rem;
  }

  .signup-label {
    font-size: 0.9rem;
    margin-right: 1rem;
  }

  .signup-input {
    font-size: 0.9rem;
    padding-block: 1rem;
  }

  .signup-button {
    font-size: 0.9rem;
    padding-block: 1.15rem;
  }
}

/* Small phones */
@media (max-width: 640px) {
  .signup-form {
    border-radius: 16px;
    padding-inline: 1rem;
    padding-block: 2rem;
  }

  .signup-title {
    font-size: 1.05rem;
  }

  .signup-label {
    font-size: 0.85rem;
    margin-right: 0.75rem;
  }

  .signup-input {
    font-size: 0.85rem;
    padding-block: 0.9rem;
  }

  .signup-button {
    font-size: 0.85rem;
    padding-block: 1rem;
  }
}
</style>
