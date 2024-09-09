<script setup>
import { defineAsyncComponent, ref, watch, computed } from "vue";
import DatePicker from "primevue/datepicker";
import Button from "primevue/button";
import store from "../store/store";
import FloatLabel from "primevue/floatlabel";
import RoomGuest from "../components/RoomGuest.vue";

import { useRouter } from "vue-router";
const router = useRouter();
const Header = defineAsyncComponent({
  loader: () => import("./Header.vue"),
});
const Footer = defineAsyncComponent({
  loader: () => import("./Footer.vue"),
});
const loading = ref(false);
const checkInDate = ref("");
const checkOutDate = ref("");
const checkInDateValid = ref(false);
const checkOutDateValid = ref(false);
const isGuestOpened = ref(false);
const valid = ref(false);
const rooms = ref([{ id: 1, adultCount: 1, childCount: 0 }]);
const submitButtonClicked = ref(false);
let currentDate = new Date();
currentDate.setHours(0, 0, 0, 0); // Set time to midnight

let tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 1);

const buttonStyle = computed(() => ({
  marginTop: isGuestOpened.value ? "200px" : "50px",
}));

watch(checkInDate, (newVal) => {
  if (newVal) {
    let newCheckInDate = new Date(newVal);
    let newCheckOutDate = new Date(newVal);
    newCheckOutDate.setDate(newCheckInDate.getDate() + 1);
    checkOutDate.value = newCheckOutDate;
  } else {
    checkOutDate.value = "";
  }
});
const formValidate = async () => {
  checkInDateValid.value = !!checkInDate.value;
  checkOutDateValid.value = !!checkOutDate.value;

  valid.value = checkInDateValid.value && checkOutDateValid.value;

  if (valid.value) {
    try {
      loading.value = true
      await Promise.all([
        store.dispatch("setBookingConfirmation"),
        store.dispatch("setBookingDetails", {
          checkInDate: checkInDate.value,
          checkOutDate: checkOutDate.value,
          rooms: rooms.value,
        }),
      ]);
      await router.push({ path: "/booking-confirmed" },() => {
        loading.value = false
      });
    } catch (error) {
      console.error("Error during form submission:", error);
      // Handle error (e.g., show error message to user)
    }
  }
  submitButtonClicked.value = true;
};
</script>
<template>
  <Header />
  <div class="booking-hero-wrapper">
    <div class="booking-hero-subwrapper">
      <h1>Book your fantastic stay with us</h1>
      <div class="booking-calendar-wrapper">
        <div class="booking-calendar p-float-label card">
          <FloatLabel>
            <DatePicker
              v-model="checkInDate"
              inputId="check-in"
              showIcon
              iconDisplay="input"
              showTime
              hourFormat="12"
              :pt="{
                calendar: {
                  style: {
                    'font-family': 'Monsterrat, sans-serif',
                  },
                },
                header: {
                  style: {
                    'font-family': 'Monsterrat, sans-serif',
                  },
                },
                timePicker: {
                  style: {
                    'font-family': 'Monsterrat, sans-serif',
                  },
                },
                buttonbar: {
                  style: {
                    'font-family': 'Monsterrat, sans-serif',
                  },
                },
              }"
              @date-select="
                (checkInDateValid = true),
                  (selectedNextDay = new Date(checkInDate)),
                  selectedNextDay.setDate(checkInDate.getDate + 1)
              "
              :min-date="currentDate"
              v-on:clear-click="checkInDateValid = false"
              show-button-bar
              :manualInput="false"
              :class="{
                'error-dropdown': submitButtonClicked && !checkInDateValid,
                'success-dropdown': checkInDateValid,
              }"
            />
            <label for="check-in">Check-in Date</label>
            <div v-if="submitButtonClicked && !checkInDateValid">
              <small class="error-text">select check-in time</small>
            </div>
          </FloatLabel>
        </div>
        <div class="booking-calendar p-float-label card">
          <FloatLabel>
            <DatePicker
              v-model="checkOutDate"
              inputId="check-out"
              showIcon
              iconDisplay="input"
              showTime
              hourFormat="12"
              v-on:clear-click="checkOutDateValid = false"
              :min-date="tomorrow"
              @date-select="checkOutDateValid = true"
              :pt="{
                calendar: {
                  style: {
                    'font-family': 'Monsterrat, sans-serif',
                  },
                },
                header: {
                  style: {
                    'font-family': 'Monsterrat, sans-serif',
                  },
                },
                timePicker: {
                  style: {
                    'font-family': 'Monsterrat, sans-serif',
                  },
                },
                buttonbar: {
                  style: {
                    'font-family': 'Monsterrat, sans-serif',
                  },
                },
              }"
              show-button-bar
              :manualInput="false"
              class="calendar-dropdown"
              :class="{
                'error-dropdown': submitButtonClicked && !checkOutDateValid,
                'success-dropdown': checkOutDateValid,
              }"
            />
            <label for="check-out">Check-out Date</label>
            <div v-if="submitButtonClicked && !checkOutDateValid">
              <small class="error-text">select check-out time</small>
            </div>
          </FloatLabel>
        </div>
        <RoomGuest
          v-model:isGuestOpened="isGuestOpened"
          v-model:modelValue="rooms"
        />
      </div>
      <Button
        :label="loading? '' : 'Submit'"
        :loading="loading"
        @click="
          formValidate();
          submitButtonClicked = true;
          console.log(
            `Button clicked, isGuestOpened:, ${isGuestOpened}, RoomCount: ${rooms.values.length}`
          );
        "
      />
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.booking-hero-wrapper {
  min-height: 100vh;
  background: url(/booking-background.jpg) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  width: 100%;
}

.booking-hero-wrapper::before {
  background-color: rgba(0, 0, 0, 0.6);
  content: "";
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
  justify-content: center;
}

.booking-calendar {
  height: 25px;
  margin: 0 5px;
}
.p-select {
  width: 200px;
}
.occupancy-wrapper {
  display: flex;
}

.p-button {
  margin-top: 30px;
  padding: 10px 25px;
  text-align: center;
  width: 100%;
}

.p-dropdown {
  width: 100px;
}

.error-dropdown {
  position: relative;
  border: 2px solid red;
}
.error-text {
  position: absolute;
}

.success-dropdown {
  border: 2px solid green;
}

@media (max-width: 900px) and (min-width: 100px) {
  .booking-calendar-wrapper {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .booking-hero-subwrapper h1 {
    font-size: 22px;
  }

  .booking-calendar {
    margin: 20px 10px;
  }

  .p-button {
    width: 90vw;
    margin-left: 10px;
  }
  .occupancy-wrapper {
    flex-direction: column;
  }
}
</style>
