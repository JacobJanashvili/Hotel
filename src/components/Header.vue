<template >
    <div class="menu"
        :style="[{ backgroundColor: scrollValue > 4 ? 'white' : (pageWidth < 900 ? 'white' : 'transparent') }, { color: scrollValue > 4 ? 'black' : 'white' }, { boxShadow: scrollValue > 4 ? '3px 10px 5px 0px rgba(0,0,0,0.11)' : '' }, { transition: '.3s' }]">
        <img :style="{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : (pageWidth > 900 ? 'invert(96%) sepia(40%) saturate(0%) hue-rotate(103deg) brightness(105%) contrast(104%)' : 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)') }"
            class="header-icon" src="/logo.svg" alt="">
        <div class="menu-items">
            <div @mouseenter="hover = true, menu_id = 5" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/"
                    :style="{ color: scrollValue > 4 ? 'black' : 'white', 'pointer-events': router.currentRoute.value.path === '/' ? 'none' : 'auto' }"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 5 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 5 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                        class="menu-icon" src="/house-solid.svg" alt="">
                    <p class="menu-text">home</p>
                </router-link>

            </div>
            <div @mouseenter="hover = true, menu_id = 7" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/about" class="menu-item"
                    :style="{ color: scrollValue > 4 ? 'black' : 'white', 'pointer-events': router.currentRoute.value.path === '/about' ? 'none' : 'auto' }"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/about' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 7 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/about' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 7 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                        class="menu-icon" src="/address-card-solid.svg" alt="">
                    <p class="menu-text">about</p>
                </router-link>
            </div>
            <div @mouseenter="hover = true, menu_id = 8" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/attractions"
                    :style="{ color: scrollValue > 4 ? 'black' : 'white', 'pointer-events': router.currentRoute.value.path === '/attractions' ? 'none' : 'auto' }"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/attractions' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 8 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/attractions' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 8 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                        class="menu-icon" src="/city-solid.svg" alt="">
                    <p class="menu-text">attractions</p>
                </router-link>
            </div>
            <div @mouseenter="hover = true, menu_id = 1" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/" class="menu-item" :style="{ color: scrollValue > 4 ? 'black' : 'white' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 1 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                        class="menu-icon" src="/bell-concierge-solid.svg" alt="">
                    <p class="menu-text">kosher menu</p>
                </router-link>
            </div>
            <div @mouseenter="hover = true, menu_id = 2" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/" class="menu-item" :style="{ color: scrollValue > 4 ? 'black' : 'white' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 2 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                        class="menu-icon" src="/bed-solid.svg" alt="">
                    <p class="menu-text">rooms</p>
                </router-link>
            </div>
            <div @mouseenter="hover = true, menu_id = 3" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/gallery"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/gallery' }"
                    :style="{ 'pointer-events': router.currentRoute.value.path === '/gallery' ? 'none' : 'auto', color: scrollValue > 4 ? 'black' : 'white' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 3 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/gallery' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 3 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                        class="menu-icon" src="/gallery.svg" alt="">
                    <p class="menu-text">
                        gallery
                    </p>
                </router-link>
            </div>
        </div>
        <div class="booking_and_language">
            <a @mouseenter="btnHover = true" @mouseleave="btnHover = false"
                :style="[{ color: scrollValue > 4 ? (btnHover ? 'white' : 'black') : 'white' }, { backgroundColor: btnHover ? 'black' : '' }, { border: btnHover ? '1px solid black' : (scrollValue > 4 ? '1px solid black' : '1px solid white') }]"
                class="booking-btn" href="#">Book now</a>
            <div class="language-picker">
                <div class="selected-language" @click="toggleDropdown">
                    {{ selectedLanguage }}
                    <BxSolidDownArrow v-if="!isDropdownOpen" class="arrow-icon" />
                    <BxSolidUpArrow v-if="isDropdownOpen" class="arrow-icon" />
                    <ul class="dropdown-menu" v-if="isDropdownOpen">
                        <li v-for="language in otherLanguages" :key="language" @click="changeLanguage(language)">
                            {{ language }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <img @click="triggerBurgerMenu" class="burger-menu" src="/bars-solid.svg" alt=""
            v-if="pageWidth < 900 && !burgerMenuClicked">
        <img v-if="pageWidth < 900 && burgerMenuClicked" @click="triggerBurgerMenu" class="close-burger-menu"
            src="/xmark-solid.svg" alt="">
        <div v-if="burgerMenuClicked" class="opened-mobile-menu">
            <div class="mobile-menu-item">
                <img class="mobile-menu-img" src="/house-solid.svg" alt="">
                <p class="mobile-menu-text">Home</p>
            </div>

            <div class="mobile-menu-item">
                <img class="mobile-menu-img" src="/bell-concierge-solid.svg" alt="">
                <p class="mobile-menu-text">Kosher Menu</p>
            </div>

            <div class="mobile-menu-item">
                <img class="mobile-menu-img" src="/address-card-solid.svg" alt="">
                <p class="mobile-menu-text">About</p>
            </div>
            <div class="mobile-menu-item">
                <img class="mobile-menu-img" src="/gallery.svg" alt="">
                <p class="mobile-menu-text">Gallery</p>
            </div>
            <div class="mobile-menu-item">
                <img class="mobile-menu-img" src="/bed-solid.svg" alt="">
                <p class="mobile-menu-text">Rooms</p>
            </div>
            <div class="mobile-menu-item">
                <img class="mobile-menu-img" src="/city-solid.svg" alt="">
                <p class="mobile-menu-text">Attractions</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { BxSolidDownArrow } from "@kalimahapps/vue-icons";
import { BxSolidUpArrow } from "@kalimahapps/vue-icons";
import { onMounted, ref } from 'vue';
import store from '../store/store'
import { computed } from '@vue/reactivity';
import { useRouter } from "vue-router";
let scrollValue = ref(0)
let menu_id = ref(0)
let btnHover = ref(false)
let hover = ref(false)
let burgerMenuClicked = ref(false)
const router = useRouter();
const triggerBurgerMenu = () => {
    burgerMenuClicked.value = !burgerMenuClicked.value
}
onMounted(() => {
    window.addEventListener('scroll', () => {
        scrollValue.value = window.scrollY
    })
    console.log(pageWidth.value)
})
const pageWidth = computed(() => store.state.pageWidth)

const isDropdownOpen = ref(false);

const changeLanguage = (language) => {
    selectedLanguage.value = language;
    isDropdownOpen.value = false;
};
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const selectedLanguage = ref('ENG'); // Initial language selection
const languages = ['ENG', 'РУС', 'יבר'];
const otherLanguages = computed(() => {
    return languages.filter((language) => language !== selectedLanguage.value);
});
console.log(router.currentRoute.value.path)
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

@font-face {
    font-family: 'VAG Rounded';
    src: url(../assets/fonts/VAGRoundedRegular.ttf);
}

* {
    font-family: 'Montserrat', sans-serif;

}

.booking-btn {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 8px;
    text-transform: uppercase;
    position: relative;
    width: 150px;
}

.booking-btn:hover {

    transition: .3s;
}

.booking_and_language {
    display: flex;
    align-items: center;
    position: relative;
}

.close-burger-menu {
    position: absolute;
    right: 20px;
}

.header-icon {
    /* filter: invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%); */
    margin-right: 5%;
}



.menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px 0 7px 0;
    width: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    color: white;
}

.menu-items {
    display: flex;
    align-items: center;
    margin-right: 5%;

}

.menu-item {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    padding: 0 10px;
    flex-wrap: wrap;
    text-decoration: none;
}

.menu-item.active::after {
    width: 100%;
}

.menu-item:hover.active::after {
    width: 0;
    /* Change to 0 for active state */
}

.disable-hover:hover::after {
    width: 0;
}

.menu-item:hover {
    cursor: pointer;
}

.menu-item:hover::after {
    width: 100%;
    transition: .4s;
}

.menu-item::after {
    content: '';
    background-color: #1E90FF;
    width: 0%;
    height: 2px;
    margin-top: 2px;
}

.menu-item.active::after {
    width: 100%;
}

.menu-item:hover.active::after {
    width: 0;
    /* Change to 0 for active state */
}



.menu-text {
    padding-left: 5px;
    font-size: 13px;
}

.menu-text a {
    text-decoration: none;
}

.mobile-menu-item {
    display: flex;
    align-items: center;
    padding: 30px 0 5px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.199);
}

.mobile-menu-text {
    color: black;
    margin-left: 5px;
}

.mobile-booking {
    margin-top: 30px;
    text-decoration: none;
    display: block;
    text-align: center;
    width: 100vw;
    padding: 30px;
    background-color: black;
    color: white;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    list-style-type: none;
    padding: 0;
    margin: 5px 0;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.dropdown-menu li {
    padding: 10px;
    cursor: pointer;
    color: black;
}

.dropdown-menu li:hover {
    background-color: #f5f5f5;
}

.language-picker {
    position: relative;
    margin-left: 5%;
}

.selected-language {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.arrow-icon {
    margin-left: 5px;
    width: 12px;
}

.opened-mobile-menu {
    top: 65px;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 1;
}

@media (max-width: 900px) and (min-width: 100px) {
    .menu-items {
        display: none;
    }

    .booking-btn {
        display: none;
    }

    .booking_and_language {
        display: none;
    }

    .burger-menu {
        position: absolute;
        right: 20px;
    }


    .header-icon {
        margin-left: 5vw;
    }

    .menu {
        background-color: white;
        justify-content: space-between;
    }
}
</style>