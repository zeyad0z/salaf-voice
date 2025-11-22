<script setup>
import { ref } from "vue";
import Footer from "~/components/layout/footer.vue";
import NavBar from "~/components/layout/navBar.vue";
import SideBar from "~/components/layout/sideBar.vue";
import MainHead from "~/components/UI/mainHead.vue";

const isSideOpen = ref(false);

const openSidebar = () => {
  isSideOpen.value = true;
};

const closeSidebar = () => {
  isSideOpen.value = false;
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Navbar -->
    <NavBar class="px-4 md:px-6 lg:px-10" />

    <!-- Main wrapper -->
    <div
      class="flex flex-col lg:flex-row justify-center gap-4 lg:gap-5 mt-4 mb-4 mx-3 md:mx-6 lg:mx-10"
    >
      <!-- Desktop sidebar -->
      <SideBar class="hidden lg:block lg:w-[21.5rem] lg:flex-shrink-0" />

      <!-- Main area -->
      <div class="flex-1">
        <!-- Mobile sidebar button -->
        <div class="mb-3 lg:hidden flex justify-start">
          <button
            @click="openSidebar"
            class="flex items-center gap-2 px-3 py-2 rounded-[0.75rem] bg-[#27445D] text-white text-[0.85rem] shadow-sm hover:bg-[#275379] transition-colors duration-200"
          >
            <client-only>
              <VsxIcon
                iconName="Menu"
                type="linear"
                :size="20"
                color="#FFFFFF"
              />
            </client-only>
            <span>القائمة الجانبية</span>
          </button>
        </div>

        <!-- Main head -->
        <MainHead class="mb-4" />

        <!-- Page content -->
        <slot />
      </div>
    </div>

    <!-- Mobile sidebar drawer -->
    <Transition name="sidebar">
      <div
        v-if="isSideOpen"
        class="fixed inset-0 z-40 bg-black/40 flex justify-start lg:hidden"
        @click.self="closeSidebar"
      >
        <div
          class="sidebar-panel h-full w-[calc(80%-10px)] max-w-xs bg-[#F9F9F9] shadow-xl p-3 pe-2 rounded-e-[1.25rem] flex flex-col"
        >
          <div class="flex justify-between items-center mb-3">
            <span class="text-[#133349] font-semibold text-[0.95rem]">
              القائمة الجانبية
            </span>
            <button
              class="p-1 rounded-md text-[#133349] hover:bg-[#E4E7EB] transition-colors"
              @click="closeSidebar"
            >
              <client-only>
                <VsxIcon
                  iconName="CloseSquare"
                  :size="26"
                  color="#133349"
                  type="linear"
                />
              </client-only>
            </button>
          </div>

          <!-- Sidebar inside drawer -->
          <SideBar @itemSelected="closeSidebar" />
        </div>
      </div>
    </Transition>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Overlay fade */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.25s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
}

/* Drawer slide */
.sidebar-enter-active .sidebar-panel,
.sidebar-leave-active .sidebar-panel {
  transition: transform 0.3s ease;
}

.sidebar-enter-from .sidebar-panel {
  transform: translateX(100%);
}
.sidebar-enter-to .sidebar-panel {
  transform: translateX(0%);
}
.sidebar-leave-from .sidebar-panel {
  transform: translateX(0%);
}
.sidebar-leave-to .sidebar-panel {
  transform: translateX(100%);
}
</style>
