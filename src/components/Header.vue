<template>
    <div class="menu">
        <div class="left-menu">
            <div class="menu-item">
                <img class="menu-icon" src="../assets/icons/bell-concierge-solid.svg" alt="">
                <p class="menu-text">kosher menu</p>
            </div>
            <div class="menu-item">
                <img class="menu-icon" src="../assets/icons/bed-solid.svg" alt="">
                <p class="menu-text">rooms</p>
            </div>
            <div class="menu-item">
                <img class="menu-icon" src="../assets/icons/gallery.svg" alt="">
                <p class="menu-text">gallery</p>
            </div>
            <div class="menu-item">
                <img class="menu-icon" src="../assets/icons/hotel-solid.svg" alt="">
                <p class="menu-text">services</p>
            </div>
        </div>
        <img class="header-icon" src="../assets/logo.svg" alt="">
        <div class="right-menu">
            <div class="menu-item">
                <img class="menu-icon" src="../assets/icons/house-solid.svg" alt="">
                <p class="menu-text">home</p>
            </div>
            <div class="menu-item">
                <img class="menu-icon" src="../assets/icons/phone-solid.svg" alt="">
                <p class="menu-text">contact</p>
            </div>
            <div class="menu-item">
                <img class="menu-icon" src="../assets/icons/address-card-solid.svg" alt="">
                <p class="menu-text">about</p>
            </div>
            <div class="menu-item">
                <img class="menu-icon" src="../assets/icons/city-solid.svg" alt="">
                <p class="menu-text">attractions</p>
            </div>
            <a class="booking-btn" href="#">Book now</a>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

</script>
<style scoped>
@font-face {
    font-family: 'VAG Rounded';
    src: url(../assets/fonts/VAGRoundedRegular.ttf);
}

* {
    font-family: 'VAG Rounded';
}
.booking-btn{
    display: block;
    text-align: center;
    text-decoration: none;
    color: white;
    border: 1px solid white;
    padding: 8px 30px;
    text-transform: uppercase;
    font-size: 17px;
    position: relative;
    left: 30px;
}
.booking-btn:hover{
    border: 1px solid white;
    background-color: white;
    color: black;
    transition: .3s;
}
.header-icon {
    /* filter: invert(96%) sepia(40%) saturate(0%) hue-rotate(103deg) brightness(105%) contrast(104%); */
    filter: invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%);
    
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
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    position: fixed;
    width: 100vw;
    z-index: 1;
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
    background-color: #DA291C;
    width: 0%;
    height: 2px;
    margin-top: 2px;
}

.menu-icon {
    /* filter: invert(83%) sepia(5%) saturate(41%) hue-rotate(169deg) brightness(109%) contrast(89%); */
    filter: invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%);
}

.menu-item:hover .menu-icon {
    filter: invert(25%) sepia(88%) saturate(2261%) hue-rotate(347deg) brightness(85%) contrast(103%);
}

.menu-text {
    padding-left: 5px;
    font-size: 15px;
}
</style>