import { createRouter, createWebHashHistory } from 'vue-router';
const Home = () => import("./components/MainContent.vue")
const Gallery = () => import("./components/Gallery.vue")
const About = () => import("./components/About.vue")
const Attractions = () => import("./components/Attractions.vue")
const Kosher = () => import("./components/Kosher.vue")
const Rooms = () => import("./components/Rooms.vue")
const Booking = () => import("./components/Booking.vue")
const bookingConfirmed = () => import("./components/BookingConfirmed.vue")
const notFoundPage = () => import("./components/404Page.vue")
import store from './store/store';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/gallery', name: 'gallery', component: Gallery },
    { path: '/about', name: 'About', component: About },
    { path: '/attractions', name: 'Attractions', component: Attractions },
    { path: '/kosher', name: 'Kosher', component: Kosher },
    { path: '/rooms', name: 'Rooms', component: Rooms },
    { path: '/booking', name: 'Booking', component: Booking },
    { path: '/booking-confirmed', name: 'BookingConfirmed', component: bookingConfirmed },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: notFoundPage }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to) => {
    if (to.name == 'BookingConfirmed' && !store.state.isBookingConfirmed) {
        return { name: 'Booking' }
    }
})
export default router;