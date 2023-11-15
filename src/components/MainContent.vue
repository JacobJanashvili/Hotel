<script setup>
import { onMounted } from 'vue';
import axiox from 'axios'
const api_key = "AIzaSyB3H6rDOuQixdWki7N2pmcH1MS9ieMsF3Y"


const getReviews = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ48imxoYNREARNlpd35vbTdM&reviews_sort&key=${api_key}`
onMounted(() => {
   fetch(getReviews).then(res=>console.log(res)).catch(err=>console.log(err))
})
</script>
<template>
    <div class="reviews-wrapper">
        <h1>What our customers say about us</h1>
    </div>
</template>
<style scoped>
@font-face {
    font-family: 'VAG Rounded';
    src: url(../assets/fonts/VAGRoundedRegular.ttf);
}

* {
    font-family: 'VAG Rounded';
}

.reviews-wrapper {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>