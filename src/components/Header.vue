<template >
    <div class="menu"
        :style="[{ backgroundColor: scrollValue > 4 ? 'white' : ((pageWidth < 900 ? 'white' : 'transparent') || (router.currentRoute.value.name == 'not-found' ? 'white' : '')) }, { color: scrollValue > 4 ? 'black' : (router.currentRoute.value.name == 'not-found' ? 'black' : 'white') }, { boxShadow: scrollValue > 4 ? '3px 10px 5px 0px rgba(0,0,0,0.11)' : (router.currentRoute.value.name == 'not-found' ? '3px 10px 5px 0px rgba(0,0,0,0.11)' : '') }, { transition: '.3s' }]">
        <img @click="$router.push('/')"
            :style="{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : ((router.currentRoute.value.name == 'not-found' || pageWidth < 900 ? 'invert(0%) sepia(8%) saturate(7469%) hue-rotate(300deg) brightness(103%) contrast(110%)' : 'invert(99%) sepia(22%) saturate(12%) hue-rotate(269deg) brightness(113%) contrast(101%)')) }"
            class="header-icon" src="/logo.svg" alt="">
        <div class="menu-items">
            <div @mouseenter="hover = true, menu_id = 5" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/"
                    :style="{ color: scrollValue > 4 ? 'black' : (router.currentRoute.value.name == 'not-found' ? 'black' : 'white'), 'pointer-events': router.currentRoute.value.path === '/' ? 'none' : 'auto' }"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 5 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 5 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : (router.currentRoute.value.name == 'not-found' ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)') }]"
                        class="menu-icon" src="/house-solid.svg" alt="">
                    <p class="menu-text">home</p>
                </router-link>

            </div>
            <div @mouseenter="hover = true, menu_id = 7" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/about" class="menu-item"
                    :style="{ color: scrollValue > 4 ? 'black' : (router.currentRoute.value.name == 'not-found' ? 'black' : 'white'), 'pointer-events': router.currentRoute.value.path === '/about' ? 'none' : 'auto' }"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/about' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 7 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/about' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 7 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : (router.currentRoute.value.name == 'not-found' ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)') }]"
                        class="menu-icon" src="/address-card-solid.svg" alt="">
                    <p class="menu-text">about</p>
                </router-link>
            </div>
            <div @mouseenter="hover = true, menu_id = 8" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/attractions"
                    :style="{ color: scrollValue > 4 ? 'black' : (router.currentRoute.value.name == 'not-found' ? 'black' : 'white'), 'pointer-events': router.currentRoute.value.path === '/attractions' ? 'none' : 'auto' }"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/attractions' }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 8 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/attractions' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 8 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : (router.currentRoute.value.name == 'not-found' ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)') }]"
                        class="menu-icon" src="/city-solid.svg" alt="">
                    <p class="menu-text">attractions</p>
                </router-link>
            </div>
            <div @mouseenter="hover = true, menu_id = 1" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/kosher" class="menu-item"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/kosher' }"
                    :style="{ 'pointer-events': router.currentRoute.value.path === '/kosher' ? 'none' : 'auto', color: scrollValue > 4 ? 'black' : (router.currentRoute.value.name == 'not-found' ? 'black' : 'white') }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 1 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/kosher' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 1 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : (router.currentRoute.value.name == 'not-found' ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)') }]"
                        class="menu-icon" src="/bell-concierge-solid.svg" alt="">
                    <p class="menu-text">kosher menu</p>
                </router-link>
            </div>
            <div @mouseenter="hover = true, menu_id = 2" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/rooms"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/rooms' }"
                    :style="{ 'pointer-events': router.currentRoute.value.path === '/rooms' ? 'none' : 'auto', color: scrollValue > 4 ? 'black' : (router.currentRoute.value.name == 'not-found' ? 'black' : 'white') }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 2 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/rooms' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 2 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : (router.currentRoute.value.name == 'not-found' ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)') }]"
                        class="menu-icon" src="/bed-solid.svg" alt="">
                    <p class="menu-text">rooms</p>
                </router-link>
            </div>
            <div @mouseenter="hover = true, menu_id = 3" @mouseleave="hover = false, console.log(hover)">
                <router-link to="/gallery"
                    :class="{ 'menu-item': true, 'active': router.currentRoute.value.path === '/gallery' }"
                    :style="{ 'pointer-events': router.currentRoute.value.path === '/gallery' ? 'none' : 'auto', color: scrollValue > 4 ? 'black' : (router.currentRoute.value.name == 'not-found' ? 'black' : 'white') }">
                    <img :style="[{ filter: scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: hover && menu_id == 3 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)' }, { filter: router.currentRoute.value.path === '/gallery' ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : scrollValue > 4 ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : hover && menu_id == 3 ? 'invert(41%) sepia(87%) saturate(1623%) hue-rotate(192deg) brightness(101%) contrast(103%)' : (router.currentRoute.value.name == 'not-found' ? 'invert(0%) sepia(72%) saturate(7469%) hue-rotate(10deg) brightness(91%) contrast(100%)' : 'invert(100%) sepia(97%) saturate(13%) hue-rotate(3deg) brightness(105%) contrast(102%)') }]"
                        class="menu-icon" src="/gallery.svg" alt="">
                    <p class="menu-text">
                        gallery
                    </p>
                </router-link>
            </div>
        </div>
        <div class="booking_and_language">
            <router-link to="/booking"
                :style="[{ color: scrollValue > 4 ? (btnHover ? 'white' : 'black') : router.currentRoute.value.name == 'not-found' ? (btnHover ? 'white' : 'black') : 'white' }, { backgroundColor: btnHover ? 'black' : '' }, { border: btnHover ? '1px solid black' : (scrollValue > 4 ? '1px solid black' : router.currentRoute.value.name == 'not-found' ? '1px solid black' : '1px solid white') }]"
                class="booking-btn" @mouseenter="btnHover = true" @mouseleave="btnHover = false">
                BOOK NOW
            </router-link>
            <div class="language-picker">
                <div class="selected-language" @click="toggleDropdown">
                    {{ selectedLanguage }}
                    <img v-if="!isDropdownOpen" src="/arrow-down.svg" class="arrow-icon"
                        :style="{ filter: scrollValue > 4 ? 'invert(0%) sepia(8%) saturate(7469%) hue-rotate(300deg) brightness(103%) contrast(110%)' : (router.currentRoute.value.name == 'not-found' ? 'invert(0%) sepia(8%) saturate(7469%) hue-rotate(300deg) brightness(103%) contrast(110%)' : 'invert(99%) sepia(22%) saturate(12%) hue-rotate(269deg) brightness(113%) contrast(101%)') }"
                        alt="">
                    <img v-if="isDropdownOpen" src="/arrow-up.svg" class="arrow-icon" alt=""
                        :style="{ filter: scrollValue > 4 ? 'invert(0%) sepia(8%) saturate(7469%) hue-rotate(300deg) brightness(103%) contrast(110%)' : (router.currentRoute.value.name == 'not-found' ? 'invert(0%) sepia(8%) saturate(7469%) hue-rotate(300deg) brightness(103%) contrast(110%)' : 'invert(99%) sepia(22%) saturate(12%) hue-rotate(269deg) brightness(113%) contrast(101%)') }">
                    <ul class="dropdown-menu" v-if="isDropdownOpen">
                        <li v-for="language in otherLanguages" :key="language" @click="changeLanguage(language)">
                            {{ language }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="burger-menu-wrapper" @click="triggerBurgerMenu" v-if="pageWidth < 900 && !burgerMenuClicked">
            <img class="burger-menu" src="/bars-solid.svg" alt="">
        </div>
        <img v-if="pageWidth < 900 && burgerMenuClicked" @click="triggerBurgerMenu" class="close-burger-menu"
            src="/xmark-solid.svg" alt="">
        <Button label="BOOK NOW" v-if="pageWidth < 900 && !burgerMenuClicked" severity="primary"
            @click="$router.push('/booking')" class="mobile-book-call-to-action" />
        <div v-if="burgerMenuClicked" class="opened-mobile-menu">
            <div class="mobile-menu-item" @click="$router.push('/')">
                <img class="mobile-menu-img" src="/house-solid.svg" alt="">
                <p class="mobile-menu-text">Home</p>
            </div>

            <div class="mobile-menu-item" @click="$router.push('/kosher')">
                <img class="mobile-menu-img" src="/bell-concierge-solid.svg" alt="">
                <p class="mobile-menu-text">Kosher Menu</p>
            </div>

            <div class="mobile-menu-item" @click="$router.push('/about')">
                <img class="mobile-menu-img" src="/address-card-solid.svg" alt="">
                <p class="mobile-menu-text">About</p>
            </div>
            <div class="mobile-menu-item" @click="$router.push('/gallery')">
                <img class="mobile-menu-img" src="/gallery.svg" alt="">
                <p class="mobile-menu-text">Gallery</p>
            </div>
            <div class="mobile-menu-item" @click="$router.push('/rooms')">
                <img class="mobile-menu-img" src="/bed-solid.svg" alt="">
                <p class="mobile-menu-text">Rooms</p>
            </div>
            <div class="mobile-menu-item" @click="$router.push('/attractions')">
                <img class="mobile-menu-img" src="/city-solid.svg" alt="">
                <p class="mobile-menu-text">Attractions</p>
            </div>
            <div class="mobile-menu-last">
                <div class="language-flags">
                    <svg class="russian-flag" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                        viewBox="0 0 512 512">
                        <path fill="#FF473E"
                            d="M1 312.52v101.445c0 7.251 4.94 13.588 11.981 15.318c159.163 39.106 318.326-43.539 477.489-8.034c9.83 2.193 19.149-5.331 19.149-15.403V312.52c-169.54-48.324-339.079 48.324-508.619 0" />
                        <path fill="#0B67B2"
                            d="M1 198.935v113.586c169.54 48.324 339.079-48.324 508.619 0V198.935c-169.54-48.324-339.079 48.324-508.619 0" />
                        <path fill="#E8E8E8"
                            d="M1 101.194v97.741c169.54 48.324 339.079-48.324 508.619 0V93.075c0-7.251-4.94-13.588-11.981-15.318c-159.163-39.106-318.326 43.539-477.489 8.034C10.319 83.599 1 91.122 1 101.194" />
                    </svg>
                    <svg class="american-flag" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                        viewBox="0 0 64 64">
                        <path fill="#ec1c24" d="M26 17.76v3.38h37.965c-.053-1.09-.167-2.468-.575-3.38" />
                        <path fill="#e6e7e8" d="M61.6 14.38H26v3.38h37.39c-.406-1.261-1.01-2.411-1.79-3.38" />
                        <path fill="#ec1c24" d="M54 11H26v3.38h35.6C59.931 12.29 57.184 11 54 11" />
                        <path fill="#e6e7e8"
                            d="M63.965 21.14H26v3.38h38v-2.253c0-.201-.013-.397-.019-.594c-.004-.054-.01-.193-.016-.533" />
                        <path fill="#ec1c24" d="M26 27.9h38v-3.38H26z" />
                        <path fill="#e6e7e8" d="M26 31.28h38V27.9H26z" />
                        <path fill="#ec1c24" d="M26 31.28h38v3.38H26z" />
                        <path fill="#e6e7e8" d="M0 34.66v3.38h64v-3.38H26z" />
                        <path fill="#ec1c24" d="M0 38.04h64v3.38H0z" />
                        <path fill="#e6e7e8"
                            d="M.005 43.499s-.009.819.015 1.301h63.96c.028-.494.015-1.301.015-1.301L64 41.42H0z" />
                        <path fill="#ec1c24"
                            d="M10 55h44c3.193 0 5.847-1.16 7.66-3.44H2.33C4.202 53.89 6.906 55 9.995 55" />
                        <path fill="#e6e7e8"
                            d="M2.335 51.56h59.33a9.993 9.993 0 0 0 1.74-3.38H.605a10.363 10.363 0 0 0 1.735 3.38" />
                        <path fill="#ec1c24"
                            d="M.6 48.18h62.8a14.38 14.38 0 0 0 .58-3.38H.02c.099 1.156.191 2.029.58 3.38" />
                        <path fill="#176496" d="M26 11H10C3.373 11 0 15.925 0 22v12.66h26z" />
                        <path fill="#fff"
                            d="m2.798 16.976l.544-.418l.543.418l-.211-.672l.541-.411h-.668l-.207-.675l-.206.675h-.667l.543.411zm3.594 0l.544-.418l.543.418l-.21-.672l.54-.411h-.667l-.207-.675l-.206.675H6.06l.543.411zm3.965 0l.543-.418l.544.418l-.211-.672l.54-.411h-.663l-.21-.675l-.207.675h-.663l.537.411zm3.936 0l.543-.418l.544.418l-.21-.672l.54-.411h-.67l-.204-.675l-.206.675h-.668l.542.411zm3.95 0l.544-.418l.543.418l-.21-.672l.541-.411h-.669l-.206-.675l-.206.675h-.667l.54.411zM4.711 18.731l.543-.417l.543.417l-.209-.671l.54-.411H5.46l-.207-.674l-.203.674h-.67l.541.411zm3.595 0l.543-.417l.543.417l-.21-.671l.54-.411H9.05l-.201-.674l-.207.674h-.667l.541.411zm3.965 0l.542-.417l.543.417l-.21-.671l.541-.411h-.667l-.207-.674l-.207.674h-.668l.541.411zm3.934 0l.544-.417l.544.417l-.213-.671l.542-.411h-.667l-.207-.674l-.205.674h-.668l.541.411zm3.955 0l.539-.417l.543.417l-.212-.671l.542-.411h-.666l-.208-.674l-.205.674h-.668l.541.411zm2.227-1.755l.543-.418l.544.418l-.211-.672l.54-.411h-.663l-.211-.675l-.206.675h-.673l.547.411zM2.745 31.02l.544-.413l.543.413l-.21-.666l.54-.412l-.667.002l-.208-.674l-.204.674l-.669-.002l.541.412zm3.595 0l.543-.413l.544.413l-.211-.666l.54-.412l-.666.002l-.208-.674l-.205.674l-.667-.002l.54.412zm3.965 0l.543-.413l.544.413l-.211-.666l.54-.412l-.671.002l-.203-.674l-.206.674l-.667-.002l.541.412zm3.936 0l.543-.413l.543.413l-.207-.666l.537-.412l-.668.002l-.206-.674l-.206.674l-.667-.002l.54.412zm3.949 0l.544-.413l.544.413l-.208-.666l.537-.412l-.667.002l-.207-.674l-.205.674l-.668-.002l.54.412zm4.144 0l.543-.413l.544.413l-.211-.666l.541-.412l-.671.002l-.204-.674l-.206.674l-.67-.002l.544.412zM2.798 20.488l.544-.418l.543.418l-.211-.672l.541-.411l-.668.002l-.207-.676l-.206.676l-.667-.002l.543.411zm3.594 0l.544-.418l.543.418l-.21-.672l.54-.411l-.667.002l-.207-.676l-.206.676l-.669-.002l.543.411zm3.965 0l.543-.418l.544.418l-.211-.672l.54-.411l-.663.002l-.21-.676l-.207.676l-.663-.002l.537.411zm3.936 0l.543-.418l.544.418l-.21-.672l.54-.411l-.67.002l-.204-.676l-.206.676l-.668-.002l.542.411zm3.95 0l.544-.418l.543.418l-.21-.672l.541-.411l-.669.002l-.206-.676l-.206.676l-.667-.002l.54.411zM4.711 22.244l.543-.417l.543.417l-.209-.671l.54-.413H5.46l-.207-.672l-.203.672h-.67l.541.413zm3.595 0l.543-.417l.543.417l-.21-.671l.54-.413H9.05l-.201-.672l-.207.672h-.667l.541.413zm3.965 0l.542-.417l.543.417l-.21-.671l.541-.413h-.667l-.207-.672l-.207.672h-.668l.541.413zm3.934 0l.544-.417l.544.417l-.213-.671l.542-.413h-.667l-.207-.672l-.205.672h-.668l.541.413zm3.955 0l.539-.417l.543.417l-.212-.671l.542-.413h-.666l-.208-.672l-.205.672h-.668l.541.413zm2.227-1.756l.543-.418l.544.418l-.211-.672l.54-.411l-.663.002l-.211-.676l-.206.676l-.673-.002l.547.411zM2.745 24l.544-.417l.543.417l-.211-.67l.541-.412l-.668.002l-.207-.676l-.204.676l-.669-.002l.541.412zm3.595 0l.543-.417l.544.417l-.211-.67l.54-.412l-.666.002l-.208-.676l-.205.676l-.667-.002l.539.412zm3.965 0l.543-.417l.543.417l-.21-.67l.54-.412l-.671.002l-.203-.676l-.206.676l-.667-.002l.541.412zm3.936 0l.542-.417l.544.417l-.207-.67l.537-.412l-.668.002l-.206-.676l-.206.676l-.667-.002l.54.412zm3.949 0l.544-.417l.543.417l-.207-.67l.537-.412l-.668.002l-.206-.676l-.205.676l-.668-.002l.54.412zM4.658 25.756l.543-.416l.543.416l-.209-.666l.539-.414h-.668L5.2 24l-.205.676h-.668l.541.414zm3.595 0l.543-.416l.543.416l-.21-.666l.54-.414H9L8.795 24l-.206.676h-.668l.542.414zm3.966 0l.541-.416l.544.416l-.214-.666l.544-.414h-.667L12.76 24l-.206.676h-.668l.541.414zm3.931 0l.546-.416l.544.416l-.21-.666l.539-.414h-.667L16.695 24l-.205.676h-.668l.541.414zm3.95 0l.546-.416l.544.416l-.211-.666l.542-.414h-.667L20.646 24l-.206.676h-.668l.541.414zM22.334 24l.543-.417l.543.417l-.21-.67l.541-.412l-.671.002l-.204-.676l-.206.676l-.67-.002l.544.412zM2.745 27.513l.544-.413l.543.413l-.211-.671l.541-.412l-.668.002l-.207-.676l-.204.676l-.669-.002l.541.412zm3.595 0l.543-.413l.544.413l-.211-.671l.54-.412l-.666.002l-.208-.676l-.205.676l-.667-.002l.539.412zm3.965 0l.543-.413l.543.413l-.21-.671l.54-.412l-.671.002l-.203-.676l-.206.676l-.667-.002l.541.412zm3.936 0l.542-.413l.544.413l-.207-.671l.537-.412l-.668.002l-.206-.676l-.206.676l-.667-.002l.54.412zm3.949 0l.544-.413l.543.413l-.207-.671l.537-.412l-.668.002l-.206-.676l-.205.676l-.668-.002l.54.412zM4.658 29.27l.543-.418l.543.418l-.209-.672l.539-.408h-.668l-.206-.677l-.205.677h-.668l.541.408zm3.595 0l.543-.418l.543.418l-.21-.672l.54-.408H9l-.205-.677l-.206.677h-.668l.542.408zm3.966 0l.541-.418l.544.418l-.214-.672l.544-.408h-.667l-.207-.677l-.206.677h-.668l.541.408zm3.931 0l.546-.418l.544.418l-.21-.672l.539-.408h-.667l-.207-.677l-.205.677h-.668l.541.408zm3.95 0l.546-.418l.544.418l-.211-.672l.542-.408h-.667l-.208-.677l-.206.677h-.668l.541.408zm2.234-1.757l.543-.413l.543.413l-.21-.671l.541-.412l-.671.002l-.204-.676l-.206.676l-.67-.002l.544.412z" />
                    </svg>
                    <svg class="israeli-flag" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36">
                        <path fill="#EDECEC" d="m20.666 19l-.467.809h.934zM18 21.618l.467-.809h-.934z" />
                        <path fill="#EEE" d="M0 25h36V11H0zM.294 7.5h35.413A4 4 0 0 0 32 5H4A3.999 3.999 0 0 0 .294 7.5" />
                        <path fill="#EDECEC"
                            d="M21.133 16.191h-.934l.467.809zm-5.332 0h-.934l.467.809zm3.243 3.618L20.089 18l-1.045-1.809h-2.088L15.911 18l1.045 1.809zM15.334 19l-.467.809h.934zM18 14.382l-.467.809h.934z" />
                        <path fill="#0038B8" d="M.294 7.5A3.982 3.982 0 0 0 0 9v2h36V9c0-.531-.106-1.036-.294-1.5z" />
                        <path fill="#EEE" d="M.294 28.5h35.413A4 4 0 0 1 32 31H4a3.999 3.999 0 0 1-3.706-2.5" />
                        <path fill="#0038B8"
                            d="M.294 28.5A3.982 3.982 0 0 1 0 27v-2h36v2c0 .531-.106 1.036-.294 1.5zm16.084-7.691L18 23.618l1.622-2.809h3.243L21.244 18l1.622-2.809h-3.243L18 12.382l-1.622 2.809h-3.243L14.756 18l-1.622 2.809zm1.622.809l-.467-.809h.934zm3.133-5.427l-.467.809l-.467-.808h.934zM20.666 19l.467.808h-.934zM18 14.382l.467.809h-.934zm-1.044 1.809h2.089L20.089 18l-1.044 1.809h-2.089L15.911 18zm-1.155 0l-.467.809l-.467-.808h.934zM15.334 19l.467.808h-.934z" />
                    </svg>
                </div>
                <Button label="BOOK NOW" class="mobile-menu-booking-btn" />

            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import store from '../store/store'
import Button from 'primevue/button';
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
    margin-right: 5%;
}

.language-flags {
    display: flex;
    justify-content: center;
    margin-top: 28px;
}

.language-flags svg {
    margin: 0 15px;
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

}

.mobile-menu-last {
    display: flex;
    flex-direction: column;
    align-items: center;
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

.mobile-book-call-to-action {
    position: absolute;
    left: 66%;
    right: 50%;
    bottom: 0;
    top: 0;
}

.mobile-menu-booking-btn {
    margin-top: 25px;
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

    .burger-menu-wrapper {
        position: absolute;
        width: 50px;
        padding-left: 15px;
        right: 0;
        height: 100%;
        top: 30px;
    }

    .header-icon {
        margin-left: 5vw;
    }

    .menu {
        background-color: white;
        justify-content: space-between;
    }
}</style>