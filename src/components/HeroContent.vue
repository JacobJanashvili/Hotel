<template>
    <div class="hero-wrapper">
        <div class="hero-subwrapper">
            <h1>Boutique hotel located in the Old City of Tbilisi</h1>
            <p>Your adventure starts here</p>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}





.hero-wrapper {
    height: 100vh;
    background: url(/main-background-min.jpg) no-repeat center center/cover;
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
    z-index: 0;
    font-size: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.hero-subwrapper h1 {
    font-size: 32px;
}

.hero-subwrapper p {
    margin-top: 10px;
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
    animation: website-ready 2s forwards;
    z-index: 1;
}

@media (max-width: 900px) and (min-width: 100px) {

    .hero-subwrapper p {
        font-size: 17px;
    }

    .hero-subwrapper {
        text-align: center;
    }

    .hero-subwrapper h1 {
        font-size: 28px;
    }
}
</style>