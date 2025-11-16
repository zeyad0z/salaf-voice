<script setup>
import Footer from "~/components/layout/footer.vue";
import NavBar from "~/components/layout/navBar.vue";
import SideBar from "~/components/layout/sideBar.vue";
</script>

<template>
  <NavBar />
  <div class="flex justify-between">
    <SideBar />
    <slot />
  </div>
  <Footer />
</template>
