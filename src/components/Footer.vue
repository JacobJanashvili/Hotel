<script setup>
</script>
<template>
    <footer>
        <div class="footer-wrapper">
            <div class="copyright_and_logo">
                <img class="footer-wrapper-logo" src="../assets/logo.svg" alt="">
                <p>All rights reserved &copy; 2023</p>
                <div class="social">
                    <img src="../assets/icons/social/facebook.svg" alt="">
                    <img src="../assets/icons/social/instagram.svg" alt="">
                    <img src="../assets/icons/social/whatsapp.svg" alt="">
                </div>
            </div>
            <div class="header-items">
                <div class="item-list">
                    <p>Kosher Menu</p>
                    <p>Rooms</p>
                    <p>Gallery</p>
                    <p>Services</p>
                </div>
                <div class="item-list">
                    <p>Home</p>
                    <p>Contact</p>
                    <p>About</p>
                    <p>Attractions</p>
                </div>

            </div>
        </div>
    </footer>
</template>
<style scoped>
@font-face {
    font-family: 'VAG Rounded';
    src: url(../assets/fonts/VAGRoundedRegular.ttf);
}

* {
    font-family: 'VAG Rounded';
}

footer {
    position: relative;
    width: 100%;
    height: 150px;
    background: black;
    border-radius: 8px;

}

footer::before {
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(28, 0, 151, 0.062), rgba(0, 0, 0, 1)), url(../assets/images/Tbilisi.jpg) no-repeat center center;
    z-index: 0;
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

.copyright_and_logo {
    z-index: 1;
    font-size: 14px;
    color: white;
}

.copyright_and_logo p {
    line-height: 1px;
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
.item-list p{
    cursor: pointer;
}
.item-list p:hover{
    color: #1E90FF;
}
.social {
    margin-top: 20px;
}

.social img {
    margin: 0 5px;
    cursor: pointer;
}

.social img:hover {
    filter: invert(48%) sepia(100%) saturate(2067%) hue-rotate(189deg) brightness(95%) contrast(114%);
}</style>