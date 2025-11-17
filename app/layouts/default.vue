<script setup>
import Footer from "~/components/layout/footer.vue";
import NavBar from "~/components/layout/navBar.vue";
import SideBar from "~/components/layout/sideBar.vue";
</script>

<template>
  <NavBar class="px-10" />
  <div class="flex justify-center gap-5 mt-4 mb-4 me-10 ms-10">
    <SideBar />
    <div class="flex-1">
      <slot />
    </div>
  </div>
  <Footer />
</template>
