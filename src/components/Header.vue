<template>
    <div class="menu"
        :style="[{ backgroundColor: scrollValue > 10 ? 'white' : 'transparent' }, { color: scrollValue > 10 ? 'black' : 'white' }, { boxShadow: scrollValue > 10 ? '10px 13px 58px -17px rgba(94, 95, 102, 0.75)' : '' }, { transition: '.3s' }]">
        <div class="left-menu">
            <div @mouseenter="hover = true, menu_id = 1" @mouseleave="hover = false, console.log(hover)" class="menu-item">
                <img class="menu-icon"
                    :style="[{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 1 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                    src="../assets/icons/bell-concierge-solid.svg" alt="">
                <p class="menu-text">kosher menu</p>
            </div>
            <div @mouseenter="hover = true, menu_id = 2" @mouseleave="hover = false, console.log(hover)" class="menu-item">
                <img :style="[{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 2 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                    class="menu-icon" src="../assets/icons/bed-solid.svg" alt="">
                <p class="menu-text">rooms</p>
            </div>
            <div @mouseenter="hover = true, menu_id = 3" @mouseleave="hover = false, console.log(hover)" class="menu-item">
                <img :style="[{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 3 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                    class="menu-icon" src="../assets/icons/gallery.svg" alt="">
                <p class="menu-text">gallery</p>
            </div>
            <div @mouseenter="hover = true, menu_id = 4" @mouseleave="hover = false, console.log(hover)" class="menu-item">
                <img :style="[{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 4 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                    class="menu-icon" src="../assets/icons/hotel-solid.svg" alt="">
                <p class="menu-text">services</p>
            </div>
        </div>
        <img :style="{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(96%) sepia(40%) saturate(0%) hue-rotate(103deg) brightness(105%) contrast(104%)' }"
            class="header-icon" src="../assets/logo.svg" alt="">
        <div class="right-menu">
            <div @mouseenter="hover = true, menu_id = 5" @mouseleave="hover = false, console.log(hover)" class="menu-item">
                <img :style="[{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 5 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                    class="menu-icon" src="../assets/icons/house-solid.svg" alt="">
                <p class="menu-text">home</p>
            </div>
            <div @mouseenter="hover = true, menu_id = 6" @mouseleave="hover = false, console.log(hover)" class="menu-item">
                <img :style="[{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 6 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                    class="menu-icon" src="../assets/icons/phone-solid.svg" alt="">
                <p class="menu-text">contact</p>
            </div>
            <div @mouseenter="hover = true, menu_id = 7" @mouseleave="hover = false, console.log(hover)" class="menu-item">
                <img :style="[{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 7 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                    class="menu-icon" src="../assets/icons/address-card-solid.svg" alt="">
                <p class="menu-text">about</p>
            </div>
            <div @mouseenter="hover = true, menu_id = 8" @mouseleave="hover = false, console.log(hover)" class="menu-item">
                <img :style="[{ filter: scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 8 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 10 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }]"
                    class="menu-icon" src="../assets/icons/city-solid.svg" alt="">
                <p class="menu-text">attractions</p>
            </div>
            <a @mouseenter="btnHover = true" @mouseleave="btnHover = false"
                :style="[{ color: scrollValue > 10 ? (btnHover ? 'white' : 'black') : 'white' }, { backgroundColor: btnHover ? 'black' : '' }, { border: btnHover ? '1px solid black' : (scrollValue > 10 ? '1px solid black' : '1px solid white') }]"
                class="booking-btn" href="#">Book now</a>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
let scrollValue = ref(0)
let menu_id = ref(0)
let btnHover = ref(false)
let hover = ref(false)
onMounted(() => {

    window.addEventListener('scroll', () => {
        scrollValue.value = window.scrollY
    })
})
</script>
<style scoped>
@font-face {
    font-family: 'VAG Rounded';
    src: url(../assets/fonts/VAGRoundedRegular.ttf);
}

* {
    font-family: 'VAG Rounded';
}

.booking-btn {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 8px 30px;
    text-transform: uppercase;
    font-size: 17px;
    position: relative;
    left: 30px;
}

.booking-btn:hover {

    transition: .3s;
}

.header-icon {
    /* filter: invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%); */
    margin-left: 5%;
}

.left-menu {
    display: flex;
    align-items: center;
}

.right-menu {
    display: flex;
    align-items: center;
    padding-right: 15px;
}

.menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px 0 7px 0;
    position: fixed;
    width: 100vw;
    z-index: 2;
    /* color: #DDDEDF; */
    color: white;

}

.menu-item {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    padding: 0 10px;
    flex-wrap: wrap;
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





.menu-text {
    padding-left: 5px;
    font-size: 15px;
}
</style>