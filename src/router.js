import { createRouter, createWebHashHistory } from 'vue-router';
import MainContent from './components/MainContent.vue'
import Gallery from './components/Gallery.vue'
import About from './components/About.vue'
import Attractions from './components/Attractions.vue'
const routes = [
    { path: '/', component: MainContent },
    { path: '/gallery', component: Gallery },
    { path: '/about', component: About },
    { path: '/attractions', component: Attractions }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;