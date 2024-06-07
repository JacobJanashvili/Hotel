<script setup>
import store from '../store/store';
import { onBeforeMount } from 'vue';
onBeforeMount(() => {
    store.commit("setBookingConfirmation")
})
console.log(store.state.isBookingConfirmed)
</script>
<template></template>
<style scoped></style>