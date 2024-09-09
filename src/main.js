
import "@primevue/themes/nora"
import "viewerjs/dist/viewer.css";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import VueViewer from "v-viewer";
import PrimeVue from "primevue/config";
import VueCreditCardValidation from 'vue-credit-card-validation';
import "./style.css";
import Nora from "@primevue/themes/nora";

import store from "./store/store";
const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Nora,
      options: {
        darkModeSelector: "light",
      },
      pt: {
        datepicker: {
          root: { style: 'font-family: "Montserrat", sans-serif;' },
          input: { style: 'font-family: "Montserrat", sans-serif;' },
          panel: { style: 'font-family: "Montserrat", sans-serif;' }
        }
      }
    },
    pt: Nora,
  })
  .use(VueViewer)
  .use(VueCreditCardValidation);
app.mount("#app");
