import { defineNuxtPlugin } from "#app";
import * as Iconsax from "vue-iconsax";

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(Iconsax).forEach(([key, value]) => {
    nuxtApp.vueApp.component(key, value as any);
  });
});
