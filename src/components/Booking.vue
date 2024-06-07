<script setup>
import { defineAsyncComponent, ref } from 'vue';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import store from '../store/store';

import { useRouter } from 'vue-router'
const router = useRouter()
const Header = defineAsyncComponent({
    loader: () => import('./Header.vue')
})
const Footer = defineAsyncComponent({
    loader: () => import('./Footer.vue')
})
const checkInDate = ref("")
const checkOutDate = ref("")
const checkInDateValid = ref(false)
const checkOutDateValid = ref(false)
const adultCount = ref()
const adultCountOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const adultCountValid = ref(false)
const childCount = ref()
const childCountOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const valid = ref(false)
const submitButtonClicked = ref(false)
const currentDate = new Date()
const tomorrow = new Date(currentDate)
const selectedNextDay = ref("")
tomorrow.setDate(currentDate.getDate() + 1)
const formValidate = () => {
    if (valid.value === true) {
        router.replace({ path: '/booking-confirmed' })
    }
    if (checkInDate.value) {
        checkInDateValid.value = true
    }
    if (checkOutDate.value) {
        checkOutDateValid.value = true
    }
    if (adultCount.value) {
        adultCountValid.value = true
    }
    if (checkInDateValid.value === true && checkOutDateValid.value === true && adultCountValid.value === true) {
        valid.value = true
    }
    store.commit('setBookingConfirmation')

}
</script>
<template>
    <Header />
    <div class="booking-hero-wrapper">
        <div class="booking-hero-subwrapper">
            <h1>Book your fantastic stay with us</h1>
            <div class="booking-calendar-wrapper">
                <div class="booking-calendar p-float-label card">
                    <Calendar v-model="checkInDate" inputId="check-in" @date-select="checkInDateValid = true, selectedNextDay = new Date(checkInDate), selectedNextDay.setDate(checkInDate.getDate + 1)"
                        :min-date="currentDate" v-on:clear-click="checkInDateValid = false" show-button-bar
                        :manualInput="false" class="calendar-dropdown"
                        :class="{ 'error-dropdown': submitButtonClicked && !checkInDateValid, 'success-dropdown': checkInDateValid }" />
                    <label for="check-in">Check-in Date</label>
                    <div v-if="submitButtonClicked && !checkInDateValid">
                        <small class="p-error">select check-in time</small>
                    </div>
                </div>
                <div class="booking-calendar p-float-label card">
                    <Calendar v-model="checkOutDate" inputId="check-out" v-on:clear-click="checkOutDateValid = false"
                        :min-date="tomorrow" @date-select="checkOutDateValid = true" show-button-bar :manualInput="false"
                        class="calendar-dropdown"
                        :class="{ 'error-dropdown': submitButtonClicked && !checkOutDateValid, 'success-dropdown': checkOutDateValid }" />
                    <label for="check-out">Check-out Date</label>
                    <div v-if="submitButtonClicked && !checkOutDateValid">
                        <small class="p-error">select check-out time</small>
                    </div>
                </div>
                <div class="occupancy-wrapper">
                    <div class="booking-calendar p-float-label card">
                        <Dropdown v-model="adultCount" :options="adultCountOptions" @change="adultCountValid = true"
                            input-id="adults" class="occupancy-dropdown"
                            :class="{ 'error-dropdown': submitButtonClicked && !adultCountValid, 'success-dropdown': adultCountValid }" />
                        <label for="adults">Adults</label>
                        <div v-if="submitButtonClicked && !adultCountValid">
                            <small class="p-error">select an amount</small>
                        </div>
                    </div>
                    <div class="booking-calendar p-float-label card">
                        <Dropdown v-model="childCount" :options="childCountOptions" input-id="children"
                            class="occupancy-dropdown" />
                        <label for="children">Child</label>
                    </div>
                </div>

            </div>
            <Button label="Submit" @click="formValidate(); submitButtonClicked = true" />

        </div>
    </div>
    <Footer />
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}

.booking-hero-wrapper {
    height: 100vh;
    background: url(/booking-background.jpg) no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
}

.booking-hero-wrapper::before {
    background-color: rgba(0, 0, 0, 0.600);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}

.booking-hero-subwrapper {
    z-index: 1;
    color: white;
}

.booking-hero-subwrapper h1 {
    text-align: center;
}

.booking-calendar-wrapper {

    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.booking-calendar {
    height: 25px;
    margin: 0 5px;
}

.occupancy-wrapper {
    display: flex;
}

.p-button {
    margin-top: 30px;
    padding: 10px 25px;
    text-align: center;
    width: 100%;
    margin: 50px auto;
}

.p-dropdown {
    width: 100px;
}

.error-dropdown {
    border: 2px solid red;
}

.success-dropdown {
    border: 2px solid green;
}

@media (max-width: 900px) and (min-width: 100px) {
    .booking-calendar-wrapper {
        flex-direction: column;
        width: 100%;
    }

    .booking-hero-subwrapper h1 {
        font-size: 22px;
    }

    .calendar-dropdown {
        width: 90vw;
    }

    .booking-calendar {
        margin: 20px 10px;
    }

    .p-button {
        width: 90vw;
        margin-left: 10px;
    }
}</style>