import './style.css'
import 'viewerjs/dist/viewer.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VueViewer from 'v-viewer'
import PrimeVue from 'primevue/config';
import store from './store/store';
const app = createApp(App)
app.use(store).use(router).use(PrimeVue).use(VueViewer)
app.mount('#app')


