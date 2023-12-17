<script setup>
import MainContent from './components/MainContent.vue';
import store from './store/store';
import { onMounted } from 'vue';
import router from "./router";
import { provide } from "vue";
provide('router', router)

onMounted(() => {
    window.addEventListener('resize', store.commit('setPageWidth'))
})
</script>
<template>
    <router-view />
</template>
<style>
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
</style> 