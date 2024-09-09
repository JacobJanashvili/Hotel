<script setup>
import {
  defineAsyncComponent,
  ref,
  watch,
  computed,
  onMounted,
  onUnmounted,
} from "vue";
import DatePicker from "primevue/datepicker";
import FloatLabel from "primevue/floatlabel";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import RoomGuest from "./RoomGuest.vue";
import Fluid from "primevue/fluid";
import Button from "primevue/button";
import Carousel from "primevue/carousel";
import InputText from "primevue/inputtext";
import { useForm } from "vee-validate";
import valid from "card-validator";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";

import store from "../store/store";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  store.commit("setBookingConfirmation");
});
const Header = defineAsyncComponent({
  loader: () => import("./Header.vue"),
});
const Footer = defineAsyncComponent({
  loader: () => import("./Footer.vue"),
});
const schema = yup.object({
  email: yup.string().required().email(),
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(6),
  creditCard: yup
    .string()
    .required()
    .test(
      "test-number",
      "Credit card number is invalid",
      (value) => valid.number(value).isValid
    )
    .required(),
  creditCardExpiration: yup
    .string()
    .required()
    .test(
      "test-month",
      "Expiration Month is invalid",
      (value) => valid.expirationDate(value).isValid
    ),
  cvv: yup
    .string()
    .required()
    .test("test-cvv", "Cvv is incorrect", (value) => valid.cvv(value).isValid),
});
const { defineField, handleSubmit, resetForm, errors, meta } = useForm({
  validationSchema: schema,
});

const checkInDate = ref("");
const checkOutDate = ref("");
const checkInDateValid = ref(false);
const checkOutDateValid = ref(false);
const rooms = ref([]);
const bookedRoomsReceived = ref([{ id: 1, adultCount: 1, childCount: 0 }]);
const isGuestOpened = ref(false);
const chosenRoom = ref();
const [firstName] = defineField("firstName");
const [lastName] = defineField("lastName");
const [email] = defineField("email");
const [creditCard] = defineField("creditCard");
const [creditCardExpiration] = defineField("creditCardExpiration");
const [cvv] = defineField("cvv");
const formSubmitted = ref(false);
const totalGuests = computed(() => {
  return bookedRoomsReceived.value.reduce(
    (sum, room) => sum + room.adultCount + room.childCount,
    0
  );
});
const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};
const roomsToDisplay = computed(() => {
  return rooms.value.filter((room) => {
    if (totalGuests.value <= 4) {
      return (
        room.minOccupancy <= totalGuests.value &&
        totalGuests.value <= (room.maxOccupancy || 4)
      );
    } else {
      return (room.maxOccupancy || 4) >= 4;
    }
  });
});
onMounted(() => {
  const bookingDetails = store.getters.getBookingDetails;
  checkInDate.value = bookingDetails.checkInDate;
  checkOutDate.value = bookingDetails.checkOutDate;
  bookedRoomsReceived.value = bookingDetails.rooms;
  rooms.value = store.getters.getRoomsList;
  console.log(JSON.parse(JSON.stringify(bookingDetails)));
  window.addEventListener("resize", updateScreenWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
function setChosenRoom(room) {
  chosenRoom.value = room;
  console.log(chosenRoom.value);
}
let currentDate = new Date();
let tomorrow = new Date(currentDate);

const selectedNextDay = ref("");
tomorrow.setDate(currentDate.getDate() + 1);
watch(checkInDate, (newVal) => {
  checkOutDate.value = "";
  currentDate = new Date(newVal);
  tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);
  checkOutDate.value = tomorrow;
});
const onSubmit = handleSubmit((values) => {
  formSubmitted.value = true;
});
</script>
<template>
  <Header />
  <div class="booking-confirmed-hero-wrapper">
    <div class="subwrapper" :style="{flexDirection : screenWidth <= 414 ? 'column' : 'row-reverse'}">
      <h1 class="wrapper-title">
        {{ !chosenRoom ? "Book your stay At Tourfa" : "Complete your booking" }}
      </h1>
      <div
        v-if="chosenRoom"
        class="edit-booking"
        :style="{marginTop: screenWidth <= 414 ? '15px' : ''}"
        @click="(chosenRoom = ''), resetForm()"
      >
        <FontAwesomeIcon :icon="faArrowLeft" />
        <p>Edit Booking</p>
      </div>
    </div>

    <div class="booking-date" v-if="!chosenRoom">
      <div class="booking-calendar-wrapper">
        <div class="booking-calendar p-float-label card">
          <FloatLabel>
            <DatePicker
              v-model="checkInDate"
              inputId="check-in"
              showIcon
              modelValue="checkInDate.value"
              iconDisplay="input"
              inputStyle="border-radius:3px; width:300px; padding: .8rem"
              @date-select="
                (checkInDateValid = true),
                  (selectedNextDay = new Date(checkInDate)),
                  selectedNextDay.setDate(checkInDate.getDate + 1)
              "
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
              :min-date="currentDate"
              v-on:clear-click="checkInDateValid = false"
              show-button-bar
              :manualInput="false"
            />
            <label for="check-in">Check-in Date</label>
          </FloatLabel>
        </div>
        <div class="booking-calendar p-float-label card">
          <FloatLabel>
            <DatePicker
              v-model="checkOutDate"
              inputId="check-out"
              showIcon
              iconDisplay="input"
              inputStyle="border-radius:3px; width:300px; padding: .8rem;"
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
            />
            <label for="check-out">Check-out Date</label>
          </FloatLabel>
        </div>
        <RoomGuest
          v-model:modelValue="bookedRoomsReceived"
          v-model:isGuestOpened="isGuestOpened"
        />
      </div>
    </div>
  </div>

  <div class="room-list-wrapper">
    <TransitionGroup name="room-list" tag="div">
      <div v-if="!chosenRoom">
        <div class="room" v-for="room in roomsToDisplay">
          <!-- <img :src="room.img" alt="" /> -->
          <Carousel
            :value="room.roomPreviewSlides"
            :numVisible="1"
            :numScroll="1"
            :containerClass="
              screenWidth > 912 ? 'room-carousel' : 'room-carousel-small'
            "
          >
            <template #item="{ data }">
              <img class="room-img" :src="data" alt="Room Preview" />
            </template>
          </Carousel>
          <div class="text-div">
            <h2>{{ room.title }}</h2>
            <p>{{ room.longDescription }}</p>
            <div class="room-icons">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744zM768 576v128h128V576zm-29.696-207.552l45.248 45.248l-497.856 497.856l-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
                  />
                </svg>
                <p>Non smoking</p>
              </div>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 19v-7.375L3 12.4q-.35.25-.75.2t-.65-.4q-.25-.35-.187-.75t.387-.65l8.975-6.875q.275-.2.588-.3t.637-.1q.325 0 .638.1t.587.3l9 6.875q.325.25.375.65t-.2.75q-.25.325-.65.375t-.725-.2L20 11.625V19q0 .825-.587 1.413T18 21H6q-.825 0-1.412-.587T4 19m2 0h12v-8.9l-6-4.575L6 10.1zm2-4q.425 0 .713-.288T9 14q0-.425-.288-.712T8 13q-.425 0-.712.288T7 14q0 .425.288.713T8 15m4 0q.425 0 .713-.288T13 14q0-.425-.288-.712T12 13q-.425 0-.712.288T11 14q0 .425.288.713T12 15m4 0q.425 0 .713-.288T17 14q0-.425-.288-.712T16 13q-.425 0-.712.288T15 14q0 .425.288.713T16 15M6 19h12z"
                  />
                </svg>
                <p>{{ room.dimension }}</p>
              </div>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.4 16L14 14.6l2.6-2.6L14 9.4L15.4 8l2.6 2.6L20.6 8L22 9.4L19.4 12l2.6 2.6l-1.4 1.4l-2.6-2.6zM3 15V9h4l5-5v16l-5-5zm7-6.15L7.85 11H5v2h2.85L10 15.15zM7.5 12"
                  />
                </svg>
                <p>Soundproof</p>
              </div>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.93 11.34a42.07 42.07 0 0 0-11.86 0a.5.5 0 0 1-.57-.49V2.49A.49.49 0 0 1 1.07 2a42.83 42.83 0 0 0 11.86 0a.49.49 0 0 1 .57.48v8.36a.5.5 0 0 1-.57.5ZM7 10.92v2.5m-2.5 0h5"
                  />
                </svg>
                <p>Flat-screen TV</p>
              </div>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M227.65 149.14a12 12 0 0 1-8.79 14.51l-20.67 5.08l5.4 20.16a12 12 0 0 1-23.18 6.22l-7.29-27.2L140 148.78V187l20.48 20.48a12 12 0 0 1-17 17L128 209l-15.51 15.52a12 12 0 0 1-17-17L116 187v-38.22l-33.12 19.13l-7.29 27.2a12 12 0 0 1-23.18-6.22l5.4-20.16l-20.67-5.08a12 12 0 1 1 5.72-23.3l27.89 6.85L104 128l-33.25-19.2l-27.89 6.85A11.8 11.8 0 0 1 40 116a12 12 0 0 1-2.85-23.65l20.67-5.08l-5.4-20.16a12 12 0 0 1 23.18-6.22l7.29 27.2L116 107.21V69L95.52 48.48a12 12 0 0 1 17-17L128 47l15.51-15.52a12 12 0 1 1 17 17L140 69v38.24l33.12-19.12l7.29-27.2a12 12 0 0 1 23.18 6.22l-5.4 20.16l20.67 5.08A12 12 0 0 1 216 116a11.8 11.8 0 0 1-2.87-.35l-27.89-6.85L152 128l33.25 19.2l27.89-6.85a12 12 0 0 1 14.51 8.79"
                  />
                </svg>
                <p>Air conditioning</p>
              </div>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
                  />
                </svg>
                <p>{{ room.occupancy }}</p>
              </div>
            </div>
            <div class="pricing-wrapper">
              <div class="price">
                <span class="price-tag"
                  >GEL{{
                    totalGuests == 1 && room.priceForOne
                      ? room.priceForOne
                      : totalGuests == 2
                      ? room.priceForTwo
                      : totalGuests == 3
                      ? room.priceForThree
                      : totalGuests >= 4 && room.priceForFour
                      ? room.priceForFour
                      : totalGuests >= 4 && room.priceForOne
                      ? room.priceForOne
                      : priceForTwo
                  }}</span
                >

                <span>/night</span>
              </div>
              <Button
                label="BOOK NOW"
                :pt="{
                  root: {
                    class: ['room-booking-btn'],
                  },
                }"
                @click="setChosenRoom(room)"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="finalise-booking-wrapper">
          <div class="guest-information" :style="[{width: screenWidth <= 912 ? '400px' : '100%'},{width: screenWidth <= 414 ? 'auto' : '400px'}]">
            <h1>Guest Information</h1>

            <form @submit.prevent="onSubmit()">
              <Fluid>
                <div class="guest-input-wrapper">
                  <div class="guest_input">
                    <FloatLabel>
                      <InputText
                        id="firstname"
                        v-model="firstName"
                        size="large"
                        :invalid="!!errors.firstName"
                      />
                      <label for="firstname">First Name</label>
                    </FloatLabel>
                    <p class="p-error">{{ errors.firstName }}</p>
                  </div>
                  <div class="guest_input">
                    <FloatLabel>
                      <InputText
                        id="lastname"
                        v-model="lastName"
                        size="large"
                        :invalid="!!errors.lastName"
                      />
                      <label for="lastname">Last Name</label>
                    </FloatLabel>
                    <p class="p-error">{{ errors.lastName }}</p>
                  </div>
                  <div class="guest_input">
                    <FloatLabel>
                      <InputText
                        id="email"
                        v-model="email"
                        size="large"
                        :invalid="!!errors.email"
                      />
                      <label for="email">Email</label>
                    </FloatLabel>
                    <p class="p-error">{{ errors.email }}</p>
                  </div>
                </div>
              </Fluid>
              <div class="guest-input-wrapper">
                <Fluid>
                  <div class="guest_input">
                    <FloatLabel>
                      <InputText
                        id="cardnumber"
                        v-model="creditCard"
                        v-cardformat:formatCardNumber
                        :invalid="!!errors.creditCard"
                      />
                      <label for="cardnumber">Card Number</label>
                    </FloatLabel>
                    <p class="p-error">{{ errors.creditCard }}</p>
                  </div>
                  <div class="card_expiration_month_and_year_wrapper" :style="{flexDirection : screenWidth > 912 ? 'row' : 'column'}">
                    <div class="guest_input">
                      <FloatLabel>
                        <InputText
                          id="cardExpirationDate"
                          v-model="creditCardExpiration"
                          :invalid="errors.creditCardExpiration"
                          v-cardformat:formatCardExpiry
                        />
                        <label for="cardExpirationDate">Expiration date</label>
                      </FloatLabel>
                      <p class="p-error">{{ errors.creditCardExpiration }}</p>
                    </div>
                    <div class="guest_input">
                      <FloatLabel
                        :pt="{ root: { style: { display: 'inline' } } }"
                      >
                        <InputText
                          id="cvv"
                          v-model="cvv"
                          :invalid="errors.cvv"
                          v-cardformat:formatCardCVC
                          :pt="{
                            root: {
                              style: {
                                width: '150px',
                              },
                            },
                          }"
                        />
                        <label for="cvv">Cvv</label>
                      </FloatLabel>
                      <p class="p-error">{{ errors.cvv }}</p>
                    </div>
                  </div>
                </Fluid>
              </div>
              <Button label="Submit" type="submit" />
            </form>
          </div>
          <div class="finalise-booking-room" :style="[{width: screenWidth <= 912 ? '400px' : '100%'}, {width: screenWidth <= 414 ? 'auto' : '400px'}]">
            <img :src="chosenRoom.img" alt="" />
            <p class="finalise-booking-room-details-title">
              {{ chosenRoom.title }}
            </p>
            <div class="finalise-booking-room-details">
              <p class="finalise-booking-date">
                {{
                  checkInDate.toLocaleDateString(undefined, {
                    weekday: "short",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
                -
                {{
                  checkOutDate.toLocaleDateString(undefined, {
                    weekday: "short",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }}
              </p>
              <p class="finalise-booking-guest-count">
                {{ bookedRoomsReceived.length }} Rooms, {{ totalGuests }}
                {{ totalGuests > 1 ? "Guests" : "Guest" }}
              </p>
              <div class="price price-for-completing-booking">
                <span class="price-tag"
                  >GEL{{
                    totalGuests == 1 && chosenRoom.priceForOne
                      ? chosenRoom.priceForOne
                      : totalGuests == 2
                      ? chosenRoom.priceForTwo
                      : totalGuests == 3
                      ? chosenRoom.priceForThree
                      : totalGuests == 4 && chosenRoom.priceForFour
                      ? chosenRoom.priceForFour
                      : totalGuests >= 4 && chosenRoom.priceForOne
                      ? chosenRoom.priceForOne
                      : chosenRoom.priceForTwo
                  }}</span
                >
                <span>/night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>

  <Footer />
</template>
<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}

:deep(.p-datepicker) {
  font-family: "Montserrat", sans-serif;
}
.room-list-enter-active,
.room-list-leave-active {
  transition: all 0.5s ease;
}

.room-list-enter-from,
.room-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.room-list-move {
  transition: transform 0.5s ease;
}

.booking-confirmed-hero-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  align-items: center;
}
.wrapper-title {
  text-transform: uppercase;
}
.edit-booking {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.subwrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}
.edit-booking {
  cursor: pointer;
  user-select: none;
}
.edit-booking p {
  margin-left: 5px;
  font-weight: 600;
}
.booking-date {
  margin-top: 30px;
  height: 80px;
  background-color: #eff0f3;
}
.booking-calendar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.booking-calendar {
  height: 25px;
  margin: 15px 10px;
}
.occupancy-wrapper {
  display: flex;
}
.price {
  display: inline-block;
}

.price-tag {
  font-size: 30px;
  color: #059669;
}

.p-select {
  width: 200px;
  height: 45px;
}
.p-button {
  width: 180px;
}
.p-select {
  height: 38px;
}
.finalise-booking-date {
  padding: 0 10px;
}
.p-error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
}
.room-list-wrapper {
  margin-top: 40px;
}

.room-booking-btn {
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.room {
  width: 80%;
  display: flex;
  height: 400px;
  margin: 50px auto;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
}

:deep(.p-carousel, .p-carousel-item) {
  width: 100%;
  text-align: center;
}
.room img {
  width: 100%;
  object-fit: contain;
  aspect-ratio: 16/9;
  margin-top: 20px;
}
.text-div {
  width: 100%;
  text-align: justify;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.text-div h2 {
  font-weight: 400;
  font-size: 28px;
  margin: 25px 0;
  text-align: center;
}
.room-carousel img {
  padding: 20px;
}
:deep(.room-carousel) {
  overflow-y: hidden;
  user-select: none;
}
.room-carousel-small img {
  height: 300px;
  object-position: left;
  -o-object-position: left;
  object-fit: cover;
  -o-object-fit: cover;
}
.room-icons {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15px auto;
  flex-wrap: wrap;
}
.icon {
  display: flex;
  align-items: center;
  margin: 5px 5px;
}

.icon p {
  margin-left: 5px;
}
.pricing-wrapper {
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: column;
}

.price-for-completing-booking {
  margin-left: 5px;
  margin-top: 15px;
  position: absolute;
  bottom: 6%;
  transform: translate(-50%,50%);
}

.price-tag {
  font-size: 30px;
  color: #059669;
}
.finalise-booking-wrapper {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
}
.finalise-booking-room {
  width: 50%;
  height: 510px;
  position: relative;
}

.finalise-booking-room img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}
.card_expiration_month_and_year_wrapper {
  display: flex;
}
.guest-information {
  padding: 30px;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  text-align: center;
  margin: 0 50px;
}
.guest-information h1 {
  align-self: baseline;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
}
.guest-input-wrapper {
  margin: 20px 0;
}
.guest_input {
  margin: 20px 10px;
}
.finalise-booking-room {
  text-align: center;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
.finalise-booking-room-details-title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 5%;
}
.finalise-booking-room-details {
  margin-top: 5%;
}
.finalise-booking-guest-count {
  margin-left: 25px;
  margin-top: 10px;
}
@media (max-width: 1024px) and (min-width: 100px) {
  .wrapper-title {
    font-size: 1rem;
  }
  .subwrapper {
    margin-top: 100px;
  }
  .booking-date {
    height: auto;
  }
  .pricing-wrapper {
    flex-direction: column;
  }
  .room {
    flex-direction: column;
    height: auto;
  }
  .booking-calendar-wrapper {
    flex-direction: column;
    width: 100vw;
  }
  .occupancy-wrapper {
    flex-direction: column;
  }
  .booking-calendar {
    margin: 23px 0;
  }
  .p-button {
    margin-bottom: 15px;
  }
  .text-div h2 {
    font-size: 17px;
    font-weight: bold;
  }
  .finalise-booking-wrapper {
    flex-direction: column-reverse;
    width: 80%;
    align-items: center;
  }
  .finalise-booking-room {
    width: 100%;
  }
  .guest-information {
    margin: 50px 0;
    width: 100%;
  }
  .guest_input {
    margin: 20px 4px;
  }
  .card_expiration_month_and_year_wrapper {
    flex-direction: column;
  }
}
</style>
