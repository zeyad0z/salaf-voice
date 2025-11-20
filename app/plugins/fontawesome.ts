import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(faFacebook, faInstagram, faTwitter, faTiktok, faBars, faXmark);

export default defineNuxtPlugin((nuxtApp) => {
  // 🟢 مهم: PascalCase
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
