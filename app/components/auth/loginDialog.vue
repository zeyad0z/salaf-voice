<script setup>
const username = ref("");
const password = ref("");

function login() {
  // add your login logic
  console.log("Login with", username.value, password.value);
}
</script>

<template>
  <form
    class="flex flex-col gap-6 bg-[#F9F9F9] rounded-[20px] border border-[#E4E4E4] items-center py-10 px-2"
  >
    <text class="text-[#002955] text-[1.25rem] font-semibold"
      >تسجيل الدخول</text
    >

    <div class="flex flex-col gap-4 w-[85%]">
      <div class="flex flex-col gap-2">
        <label class="text-[1rem] text-[#2D3748] mr-6">اسم المستخدم</label>
        <input
          v-model="username"
          type="text"
          placeholder="اسم المستخدم"
          class="border border-[#E9E9E9] p-2 rounded-[15px] bg-[#F4F4F4] py-[1.3rem] text-[1rem] text-[#2D3748]"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-[1rem] text-[#2D3748] mr-6">كلمة المرور</label>
        <input
          v-model="password"
          type="password"
          placeholder="كلمة المرور"
          class="border border-[#E9E9E9] p-2 rounded-[15px] bg-[#F4F4F4] py-[1.3rem] text-[1rem] text-[#2D3748]"
        />
      </div>
    </div>

    <button
      @click="login"
      class="bg-[#27445D] text-white rounded-[12px] py-[1.5rem] mb-5 w-[85%] text-[1rem] cursor-pointer"
    >
      تسجيل الدخول
    </button>
  </form>
</template>
