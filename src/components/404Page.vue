<script setup>
import { defineAsyncComponent, ref } from 'vue';
import Button from 'primevue/button';
const Header = defineAsyncComponent({
    loader: () => import('./Header.vue')
})
const Footer = defineAsyncComponent({
    loader: () => import('./Footer.vue')
})
</script>
<template>
    <Header />
    <div class="not-found-wrapper">
        <div class="not-found-title-wrapper">
            <h1>404</h1>
            <p>Not found</p>
        </div>
        <p class="not-found-apology">We're sorry the page you are looking for does not exist in our website</p>
        <div class="rerouting">
            <Button label="Go back" link @click="$router.back()" />
            <Button outlined class="border-2" @click="$router.push('/')">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="m221.56 100.85l-79.95-75.47l-.16-.15a19.93 19.93 0 0 0-26.91 0l-.17.15l-79.93 75.47a20.07 20.07 0 0 0-6.44 14.7V208a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-44h24v44a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-92.45a20.07 20.07 0 0 0-6.44-14.7M204 204h-40v-44a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v44H52v-86.72l76-71.75l76 71.75Z" />
                </svg>
                <p class="rerouting-btn-text">Return home</p>
            </Button>
        </div>
    </div>
    <Footer />
</template>
<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}

.not-found-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 20% auto;
    justify-content: center;
    align-items: center;
}


.not-found-title-wrapper {
    display: flex;
    align-items: center;
}

.not-found-title-wrapper h1 {
    font-size: 40px;
}

.not-found-title-wrapper p {
    font-size: 30px;
    margin-left: 10px;
}

.not-found-apology {
    font-size: 20px;
    margin-top: 5px;
}
.rerouting{
    margin-top: 25px;
}
.rerouting-btn-text{
    margin-left: 5px;
}
@media (max-width: 900px) and (min-width: 100px) {
    .not-found-wrapper{
        margin: 50% 5%;
    }
    .rerouting{
        margin-top: 15px;
    }
}
</style>