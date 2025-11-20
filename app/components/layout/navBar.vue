<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import AuthLayout from "~/layouts/auth.vue";

// نقدر برضه نستورد الأيقونات هنا ونبعتها مباشرة للكومبوننت
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const router = useRouter();

const showAuth = ref(false);
const authMode = ref("login");

function openLogin() {
  authMode.value = "login";
  showAuth.value = true;
}

function openSignup() {
  authMode.value = "signup";
  showAuth.value = true;
}

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// الأيقونة الحالية للبورجر (bars / xmark)
const burgerIcon = computed(() => (isMobileMenuOpen.value ? faXmark : faBars));
</script>

<template>
  <div class="bg-[#EFE9D5] w-full py-1">
    <!-- DESKTOP NAVBAR -->
    <div class="navbar-desktop flex justify-between gap-3 items-center">
      <div class="flex justify-center items-center gap-6">
        <div class="flex gap-1.5">
          <img
            @click="router.push('/')"
            src="/images/logo.svg"
            alt="logo"
            class="w-[2.87rem] h-[4.93rem] cursor-pointer"
          />
          <div class="flex flex-col mt-4 leading-tight">
            <span class="logo-subtitle text-[0.87rem]">
              الموقع الرسمي لفضيلة
            </span>
            <span
              class="logo-title text-[#6B9A8A] font-semibold text-[1.15rem]"
            >
              الشيخ ياسر برهامي
            </span>
          </div>
        </div>

        <div
          class="flex w-[36.8rem] h-[2.7rem] bg-[#FFFFFF] rounded-4xl p-1 items-center"
        >
          <div class="relative">
            <select
              class="w-[7.3rem] h-[2.25rem] bg-[#497D74] hover:bg-[#6B9A8A] rounded-4xl text-[#ffffff] px-3 text-[0.87rem] cursor-pointer appearance-none transition-all duration-200"
            >
              <option selected>فتاوي</option>
            </select>

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

      <div class="flex justify-center items-center gap-3.5">
        <button
          class="bg-[#497D74] hover:bg-[#6B9A8A] w-[9.3rem] h-[3.43rem] rounded-4xl flex justify-center items-center gap-1 cursor-pointer transition-all duration-200"
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

        <button
          class="underline text-[0.87rem] text-[#133349] cursor-pointer hover:text-[#6B9A8A] transition-all duration-200"
          @click="openSignup"
        >
          انشاء حساب جديد
        </button>

        <button
          @click="openLogin"
          class="w-[9.37rem] h-[3rem] bg-[#ffffff] hover:bg-[#E5EEE7] border border-[#E5EEE7] rounded-4xl flex justify-center items-center gap-1 cursor-pointer transition-all duration-200"
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

    <!-- MOBILE HEADER -->
    <div class="navbar-mobile items-center py-2">
      <button
        :class="['burger-btn', { 'burger-btn--open': isMobileMenuOpen }]"
        @click="toggleMobileMenu"
      >
        <!-- هنا بقى بنبعت الـ icon definition مش string -->
        <FontAwesomeIcon :icon="burgerIcon" />
      </button>

      <div class="flex-1 flex justify-center">
        <img
          @click="router.push('/')"
          src="/images/logo.svg"
          alt="logo"
          class="mobile-logo w-[2.87rem] h-[4.93rem] cursor-pointer"
        />
      </div>

      <div class="w-[2.4rem] h-[3.8rem]"></div>
    </div>

    <!-- MOBILE MENU -->
    <Transition name="fade-slide">
      <div
        v-if="isMobileMenuOpen"
        class="navbar-mobile-menu flex flex-col mt-2 gap-4 px-4 pb-4"
      >
        <div
          class="flex w-full h-[2.6rem] bg-[#FFFFFF] rounded-4xl p-1 items-center border border-[#E5EEE7]"
        >
          <div class="relative">
            <select
              class="w-[6.5rem] h-[2.1rem] bg-[#497D74] hover:bg-[#6B9A8A] rounded-4xl text-[#ffffff] px-3 text-[0.8rem] cursor-pointer appearance-none transition-all duration-200"
            >
              <option selected>فتاوي</option>
            </select>

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
            class="flex-1 h-[2.1rem] text-[0.8rem] text-[#596780] ms-3 bg-transparent outline-none"
          />
        </div>

        <button
          class="bg-[#497D74] hover:bg-[#6B9A8A] w-full h-[2.9rem] rounded-4xl flex justify-center items-center gap-2 text-white cursor-pointer transition-all duration-200"
        >
          <client-only>
            <VsxIcon
              iconName="Edit2"
              :size="18"
              color="#ffffff"
              type="linear"
            />
          </client-only>
          <span class="text-[0.85rem]">ارسل فتواك</span>
        </button>

        <div class="flex items-center gap-3">
          <button
            class="w-[2.5rem] h-[2.5rem] rounded-full bg-[#ffffff] border border-[#E5EEE7] flex justify-center items-center cursor-pointer"
          >
            <client-only>
              <VsxIcon
                iconName="ArchiveAdd"
                :size="22"
                color="#6DA592"
                type="linear"
              />
            </client-only>
          </button>

          <button
            class="w-[2.5rem] h-[2.5rem] rounded-full bg-[#ffffff] border border-[#E5EEE7] flex justify-center items-center cursor-pointer"
          >
            <client-only>
              <VsxIcon
                iconName="Notification"
                :size="22"
                color="#6DA592"
                type="linear"
              />
            </client-only>
          </button>

          <button
            class="underline text-[0.85rem] text-[#133349] cursor-pointer hover:text-[#6B9A8A] transition-all duration-200 ms-auto"
            @click="
              openSignup();
              isMobileMenuOpen = false;
            "
          >
            انشاء حساب جديد
          </button>
        </div>

        <button
          @click="
            openLogin();
            isMobileMenuOpen = false;
          "
          class="w-full h-[2.9rem] bg-[#ffffff] hover:bg-[#E5EEE7] border border-[#E5EEE7] rounded-4xl flex justify-center items-center gap-1 cursor-pointer transition-all duration-200"
        >
          <client-only>
            <VsxIcon
              iconName="LoginCurve"
              :size="22"
              color="#7FB09F"
              type="linear"
            />
          </client-only>
          <p class="text-[0.85rem] text-[#133349]">تسجيل دخول</p>
        </button>
      </div>
    </Transition>

    <AuthLayout
      v-if="showAuth"
      :initialMode="authMode"
      @close="showAuth = false"
    />
  </div>
</template>

<style scoped>
.navbar-desktop {
  display: flex;
}
.navbar-mobile,
.navbar-mobile-menu {
  display: none;
}

@media (max-width: 1535px) and (min-width: 1401px) {
  .logo-subtitle {
    font-size: 0.84rem;
  }
  .logo-title {
    font-size: 1.08rem;
  }
}
@media (max-width: 1400px) and (min-width: 1301px) {
  .logo-subtitle {
    font-size: 0.8rem;
  }
  .logo-title {
    font-size: 1.02rem;
  }
}
@media (max-width: 1300px) and (min-width: 1251px) {
  .logo-subtitle {
    font-size: 0.76rem;
  }
  .logo-title {
    font-size: 0.96rem;
  }
}

@media (max-width: 1250px) {
  .navbar-desktop {
    display: none;
  }
  .navbar-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 5px;
  }
  .navbar-mobile-menu {
    display: flex;
  }
}

.burger-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #497d74;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  border: none;
}
.burger-btn--open {
  background-color: #6b9a8a;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
