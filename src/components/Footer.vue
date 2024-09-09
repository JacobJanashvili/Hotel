<script setup>
</script>
<template>
    <footer>
        <div class="footer-wrapper">
            <div class="copyright_and_logo">
                <img class="footer-wrapper-logo" src="/logo.svg" alt="">
                <p>All rights reserved &copy; 2023</p>
            </div>
            <div class="header-items">
                <div class="item-list">
                    <div class="item" @click="$router.push('/kosher')">
                        <p class="item-title">Kosher Menu</p>
                        <img class="item-icon" src="/chevron-right-solid.svg" alt="">
                    </div>
                    <div class="item" @click="$router.push('/rooms')">
                        <p class="item-title">Rooms</p>
                        <img class="item-icon" src="/chevron-right-solid.svg" alt="">
                    </div>
                    <div class="item" @click="$router.push('/gallery')">
                        <p class="item-title">Gallery</p>
                        <img class="item-icon" src="/chevron-right-solid.svg" alt="">
                    </div>
                </div>
                <div class="item-list">
                    <div class="item" @click="$router.push('/')">
                        <p class="item-title">Home</p>
                        <img class="item-icon" src="/chevron-right-solid.svg" alt="">
                    </div>
                    <div class="item" @click="$router.push('/about')">
                        <p class="item-title">About</p>
                        <img class="item-icon" src="/chevron-right-solid.svg" alt="">
                    </div>
                    <div class="item" @click="$router.push('/attractions')">
                        <p class="item-title">Attractions</p>
                        <img class="item-icon" src="/chevron-right-solid.svg" alt="">
                    </div>
                </div>
                <div class="footer-contact-menu">
                    <p class="contact-title">Contact us</p>
                    <p class="phone-number">(+995) 599 74 00 44</p>
                    <p class="email">tourfa.hotel@gmail.com</p>
                </div>
                <div class="footer-location-menu">
                    <p class="location-title">Visit us</p>
                    <div class="location">Yetim Gurji 5, Tbilisi, Georgia</div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');


* {
    font-family: 'Montserrat', sans-serif;
}



.contact-title {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 10px;
}

.copyright_and_logo {
    z-index: 1;
    font-size: 14px;
    color: white;
}

.copyright_and_logo p {
    line-height: 1px;
}

.footer-contact-menu {
    padding-right: 30px;
}

.footer-location-menu {
    padding-right: 30px;
}

footer {
    position: relative;
    width: 100%;
    height: 150px;
    margin-top: 10dvh;
    background: rgba(0, 0, 0, 0.918);

}



.footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0 0 180px;
}

.footer-wrapper-logo {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(340deg) brightness(102%) contrast(102%);
}



.header-items {
    z-index: 1;
    color: white;
    display: flex;
    align-items: center;
}

.item-list {
    margin: 0 50px;
}

.item-list p {
    cursor: pointer;
}

.item-list p:hover {
    color: #059669;
}

.item-icon {
    display: none;
}

.location-title {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
}

.phone-number {
    padding-bottom: 5px;
}

@media (max-width: 1024px) and (min-width: 100px) {
    .copyright_and_logo {
        text-align: center;
    }

    footer {
        height: 50%;
    }

    .footer-contact-menu {
        text-align: center;
        padding-left: 15px;
        padding-top: 10px;
    }

    .footer-location-menu {
        text-align: center;
        padding-top: 20px;
        padding-left: 15px;
    }

    .footer-wrapper {
        flex-direction: column;
        padding: 5% 0;
        align-items: inherit;
        height: 100%;
    }

    .header-items {
        flex-direction: column;
        align-items: inherit;
        padding: 45px;
        font-size: 18px;
    }

    .item-list {
        margin: 0;
    }


    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        cursor: pointer;
    }

    .item-icon {
        display: block;
    }



}
</style>