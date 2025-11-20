<script setup></script>

<template>
  <div
    class="flex flex-col gap-1 justify-center items-center bg-[#EFEFEF] rounded-[20px] w-full py-4 md:py-5"
  >
    <!-- Logo -->
    <img
      src="/images/logo-gray.png"
      alt="default-image"
      class="logo w-[4.3rem] h-[7.37rem]"
    />

    <!-- Text -->
    <p class="text-[0.75rem] text-[#C7C8C8]">الموقع الرسمي لفضيلة</p>
    <p class="text-[1rem] text-[#C8C9C9] font-semibold">الشيخ ياسر برهامي</p>
  </div>
</template>

<style scoped>
/* موبايل فقط */
@media (max-width: 640px) {
  .logo {
    width: 3.5rem;
    height: 6rem;
  }
}
</style>
