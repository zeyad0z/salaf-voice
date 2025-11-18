<template>
  <div
    class="fixed inset-0 z-[9999] flex justify-center items-center bg-[#364D5B]/48 backdrop-blur-xs"
  >
    <div class="rounded-[30px] bg-white w-[38.81rem] h-fit p-6 relative z-10">
      <VsxIcon
        iconName="CloseSquare"
        :size="32"
        color="#5584FF"
        type="linear"
        class="absolute top-4 right-4 cursor-pointer"
      />
      <div class="flex flex-col justify-center items-center">
        <div class="flex p-3 gap-5">
          <p class="text-[1.125rem]">تسجيل الدخول</p>
          <p class="text-[1.125rem]">انشاء حساب جديد</p>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
