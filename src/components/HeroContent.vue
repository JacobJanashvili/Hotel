<template>
    <div class="hero-wrapper">
        <div class="hero-subwrapper">
            <h1>Hotel at the heart of Tbilisi</h1>
            <p>Your adventure starts here</p>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
@font-face {
    font-family: 'VAG Rounded';
    src: url(../assets/fonts/VAGRoundedRegular.ttf);
}

* {
    font-family: 'VAG Rounded';
}


.hero-wrapper {
    height: 100vh;
    background: url(../assets/images/სასტუმროს-ფოტოები/tourfa-tbilisi-pic-2.JPEG);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-wrapper::before {
    background-color: rgba(0, 0, 0, 0.452);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}

.hero-subwrapper {
    color: white;
    z-index: 1;
    font-size: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
}

@keyframes website-ready {
    0% {
        opacity: 0;
    }


    100% {
        right: 0;
        opacity: 1;
    }

}

.hero-subwrapper p {
    font-size: 20px;
    text-align: center;
    position: absolute;
    top: 100%;
    right: 40%;
    width: 100%;
    animation: website-ready 2s  forwards;
}
</style>