<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import store from "../store/store";
import '@splidejs/vue-splide/css/skyblue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import Button from "primevue/button";
const pageWidth = computed(() => store.state.pageWidth);
const options = {
  perPage: 1,
  pagination: "true",
  arrows: "true",
  rewind: "true",
};

const clickedRoomTitle = ref("");
const clickedRoomImg = ref("");
const clickedRoomDescription = ref("");
const clickedRoomSlides = ref([]);
const clickedRoomOccupancy = ref(Number);
const clickedRoomDimension = ref("");
const Header = defineAsyncComponent({
  loader: () => import("./Header.vue"),
});
const Footer = defineAsyncComponent({
  loader: () => import("./Footer.vue"),
});
const Dialog = defineAsyncComponent({
  loader: () => import("primevue/dialog"),
});

const isRoomOpen = ref(false);
function onRoomClick(item) {
  clickedRoomTitle.value = item.title;
  clickedRoomDescription.value = item.longDescription;
  clickedRoomImg.value = item.img;
  clickedRoomSlides.value = item.roomPreviewSlides;
  clickedRoomOccupancy.value = item.occupancy;
  clickedRoomDimension.value = item.dimension;
  return item;
}
const roomsList = [
  {
    title: "Twin Room with Extra Bed",
    img: "tourfa-tbilisi-pic-10-min.jpg",
    shortDescription:
      "Room size: 30 sqm, situated on ground floor with backdoor courtyard and terraceKing size bed and two sofasAdjustable Air-conditioning High speed internet access and Wi-Fi",
    longDescription:
      "Offering free toiletries, this twin/double room includes a private bathroom with a shower, a hairdryer and slippers. The spacious air-conditioned twin/double room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a tea and coffee maker as well as an inner courtyard view.",
    roomPreviewSlides: [
      "tourfa-tbilisi-pic-10-min.jpg",
      "Twin-room-tv.jpg",
      "Twin-room-shower.jpg",
      "Twin-room-shower-2.jpg",
    ],
    minPrice: "GEL157",
    occupancy: 3,
    dimension: "35 m²",
  },
  {
    title: "Family Suite",
    img: "Family-Suite-room.jpg",
    longDescription:
      "Featuring a private entrance, this air-conditioned suite is consisted of of 1 living room, 2 separate bedrooms and 1 bathroom with a shower and a hairdryer. The suite offers a flat-screen TV with cable channels, soundproof walls, a tea and coffee maker, a seating area as well as an inner courtyard view. The unit offers 3 beds.",
    roomPreviewSlides: [
      "Family-Suite-room.jpg",
      "Family-Suite-room-2.jpg",
      "Family-Suite-room-3.jpg",
      "Family-Suite-bathroom.jpg",
      "Family-Suite-bathroom-2.jpg",
    ],
    minPrice: "GEL173",
    occupancy: 4,
    dimension: "37 m²",
  },
  {
    title: "Family Room",
    img: "Family-Room.jpg",
    shortDescription:
      "Family rooms comprise main and child room, 22 and 6 sqm, respectively, equipped with bathroom, tea & coffee facilities, flat-screen TV and Wi-Fi. They feature king size bedroom and a sofa convertible into extra bed. Family rooms can easily accommodate up to 4 people and are suitable for larger families, etc.",
    longDescription:
      "This air-conditioned family room includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with an inner courtyard view. The unit offers 3 beds.",
    roomPreviewSlides: [
      "Family-Room.jpg",
      "Family-Rooms-peripherals.jpg",
      "Family-Room-couch.jpg",
      "Family-Room-bathroom.jpg",
      "Family-Room-bathroom-2.jpg",
      "Family-Room-balcony.jpg",
    ],
    minPrice: "GEL154",
    occupancy: 4,
    dimension: "32 m²"
  },
  {
    title: "Deluxe Double Room with extra bed",
    img: "Double-Deluxe-Preview.jpg",
    shortDescription:
      "Deluxe is spacious 30 sqm room featuring adjoining individual courtyard; equipped with bathroom, tea & coffee facilities, flat-screen TV and Wi-Fi. It features king size bedroom and two sofas convertible into extra bed. Deluxe room can easily accommodate up to 4 people a ",
    longDescription:
      "Offering free toiletries, this double room includes a private bathroom with a shower, a hairdryer and slippers. The air-conditioned double room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a tea and coffee maker as well as an inner courtyard view. The unit has 2 beds.",
    roomPreviewSlides: [
      "Double-Deluxe-Preview.jpg",
      "Double-Deluxe-Preview-2.jpg",
      "Double-Room-couch.jpg",
      "Double-Room-bathroom.jpg",
      "Double-Room-bathroom-2.jpg",
      "Double-Room-shower.jpg",
      "Double-Room-shower-2.jpg",
    ],
    minPrice: "GEL150",
    occupancy: 4,
    dimension: "25 m²"
  },
  {
    title: "Comfort Quadruple Room",
    img: "Comfort-Quadruple.jpg",
    longDescription:
      "Offering free toiletries, this quadruple room includes a private bathroom with a shower, a hairdryer and slippers. The air-conditioned quadruple room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a tea and coffee maker as well as an inner courtyard view. The unit offers 3 beds.",
    roomPreviewSlides: [
      "Comfort-Quadruple.jpg",
      "Comfort-Quadruple-2.jpg",
      "Comfort-Quadruple-3.jpg",
      "Comfort-Quadruple-bathroom.jpg",
      "Comfort-Quadruple-courtyard.jpg",
      "Comfort-Quadruple-courtyard-2.jpg",
    ],
    minPrice: "GEL154",
    occupancy: 4,
    dimension: "32 m²"
  },
];
</script>
<template>
  <Header />
  <div class="rooms-hero-wrapper">
    <h1>Our Rooms</h1>
  </div>
  <div class="rooms-menu-wrapper">
    <h2 class="rooms-wrapper-title">Relax in our luxurious rooms</h2>
    <div class="rooms-subwrapper">
      <div class="room" v-for="room in roomsList">
        <img :src="room.img" alt="" />
        <h2 class="room-title">{{ room.title }}</h2>
        <p v-if="room.shortDescription" class="room-short-text">
          {{ room.shortDescription }}
        </p>
        <p v-if="!room.shortDescription" class="room-short-text">
          {{ room.longDescription }}
        </p>
        <Button label="Read More" @click="(isRoomOpen = !isRoomOpen), onRoomClick(room)" link />
        <div class="pricing-wrapper">
          <div class="pricing-title">From:</div>
          <div class="price">
            <span class="price-tag">{{ room.minPrice }}</span>
            <span>/night</span>
          </div>
        </div>
        <router-link to="/booking">
          <Button label="BOOK NOW" id="room-booking-btn" />
        </router-link>
      </div>
      <Dialog v-model:visible="isRoomOpen" :modal="true" dismissableMask="true">
        <template #container>
          <div class="room-opened-container">
            <div class="room-wrapper">
              <Splide :options="options" class="splide--dynamic">
                <SplideSlide v-for="slide in clickedRoomSlides">
                  <img class="room-opened-slide-img" :src="slide" alt="" />
                </SplideSlide>
              </Splide>
              <h2 class="room-title">{{ clickedRoomTitle }}</h2>
              <div class="room-icons">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                      d="M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744zM768 576v128h128V576zm-29.696-207.552l45.248 45.248l-497.856 497.856l-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z" />
                  </svg>
                  <p>Non smoking</p>
                </div>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M4 19v-7.375L3 12.4q-.35.25-.75.2t-.65-.4q-.25-.35-.187-.75t.387-.65l8.975-6.875q.275-.2.588-.3t.637-.1q.325 0 .638.1t.587.3l9 6.875q.325.25.375.65t-.2.75q-.25.325-.65.375t-.725-.2L20 11.625V19q0 .825-.587 1.413T18 21H6q-.825 0-1.412-.587T4 19m2 0h12v-8.9l-6-4.575L6 10.1zm2-4q.425 0 .713-.288T9 14q0-.425-.288-.712T8 13q-.425 0-.712.288T7 14q0 .425.288.713T8 15m4 0q.425 0 .713-.288T13 14q0-.425-.288-.712T12 13q-.425 0-.712.288T11 14q0 .425.288.713T12 15m4 0q.425 0 .713-.288T17 14q0-.425-.288-.712T16 13q-.425 0-.712.288T15 14q0 .425.288.713T16 15M6 19h12z" />
                  </svg>
                  <p>{{ clickedRoomDimension }}</p>
                </div>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M15.4 16L14 14.6l2.6-2.6L14 9.4L15.4 8l2.6 2.6L20.6 8L22 9.4L19.4 12l2.6 2.6l-1.4 1.4l-2.6-2.6zM3 15V9h4l5-5v16l-5-5zm7-6.15L7.85 11H5v2h2.85L10 15.15zM7.5 12" />
                  </svg>
                  <p>Soundproof</p>
                </div>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      d="M12.93 11.34a42.07 42.07 0 0 0-11.86 0a.5.5 0 0 1-.57-.49V2.49A.49.49 0 0 1 1.07 2a42.83 42.83 0 0 0 11.86 0a.49.49 0 0 1 .57.48v8.36a.5.5 0 0 1-.57.5ZM7 10.92v2.5m-2.5 0h5" />
                  </svg>
                  <p>Flat-screen TV</p>
                </div>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                    <path fill="currentColor"
                      d="M227.65 149.14a12 12 0 0 1-8.79 14.51l-20.67 5.08l5.4 20.16a12 12 0 0 1-23.18 6.22l-7.29-27.2L140 148.78V187l20.48 20.48a12 12 0 0 1-17 17L128 209l-15.51 15.52a12 12 0 0 1-17-17L116 187v-38.22l-33.12 19.13l-7.29 27.2a12 12 0 0 1-23.18-6.22l5.4-20.16l-20.67-5.08a12 12 0 1 1 5.72-23.3l27.89 6.85L104 128l-33.25-19.2l-27.89 6.85A11.8 11.8 0 0 1 40 116a12 12 0 0 1-2.85-23.65l20.67-5.08l-5.4-20.16a12 12 0 0 1 23.18-6.22l7.29 27.2L116 107.21V69L95.52 48.48a12 12 0 0 1 17-17L128 47l15.51-15.52a12 12 0 1 1 17 17L140 69v38.24l33.12-19.12l7.29-27.2a12 12 0 0 1 23.18 6.22l-5.4 20.16l20.67 5.08A12 12 0 0 1 216 116a11.8 11.8 0 0 1-2.87-.35l-27.89-6.85L152 128l33.25 19.2l27.89-6.85a12 12 0 0 1 14.51 8.79" />
                  </svg>
                  <p>Air conditioning</p>
                </div>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
                  </svg>
                  <p>{{ clickedRoomOccupancy }}</p>
                </div>
              </div>
            </div>
            <div class="room-opened-detail">
              <p>{{ clickedRoomDescription }}</p>
              <router-link to="/booking">
                <Button label="BOOK NOW" id="room-booking-btn" />
              </router-link>
            </div>
            <img @click="isRoomOpen = !isRoomOpen" v-if="pageWidth > 900" class="close-icon" src="/xmark-solid.svg"
              alt="" />
            <div v-if="pageWidth < 900" class="mobile-close-menu">
              <img @click="isRoomOpen = !isRoomOpen" class="close-icon" src="/xmark-solid.svg" alt="" />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>

  <Footer />
</template>
<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}

.close-icon {
  position: absolute;
  right: 10px;
  top: 4px;
  cursor: pointer;
  padding: .5rem;
}

.close-icon:hover {
  color: #374151;
  background-color: #f3f4f6;
  border-color: transparent;
  border-radius: 50%;
}

.icon {
  display: flex;
  align-items: center;
  margin: 5px 5px;
}

.icon p {
  margin-left: 5px;
}

.mobile-close-menu {
  position: absolute;
  top: 0;
  height: 40px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
}

.pricing-wrapper {
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.price {
  margin-left: 5px;
}

.price-tag {
  font-size: 30px;
  color: #1e90ff;
}

.p-button {
  display: block;
  margin: 0 auto;

}

.rooms-hero-wrapper {
  background: url("/rooms-hero-background.jpg") no-repeat center center/cover;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#room-menu-opener {
  margin-top: 50px;
}

.rooms-hero-wrapper::before {
  background-color: rgba(0, 0, 0, 0.452);
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}

.rooms-hero-wrapper h1 {
  z-index: 1;
}

.rooms-menu-wrapper {
  width: 80%;
  margin: 100px auto;
}

.rooms-wrapper-title {
  text-align: center;
}

.rooms-subwrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}

.room {
  width: 400px;
  margin: 20px 20px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.06);
  border-radius: 0 0 5px 5px;
  position: relative;
}

a {
  text-decoration: none;
}



.room-title {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
}

.room-short-text {
  margin-top: 10px;
  text-align: justify;
  padding: 0 50px;
  padding-bottom: 10px;
  font-size: 15px;
}

.room-opened-container {
  width: 50vw;
  background-color: white;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.room-opened-container::before {
  content: "";
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
  height: 40px;
}

.room-opened-slide-img {
  margin-top: 20px;
  height: 50vh;
  object-fit: cover;
}

.room-icons {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15px auto;
  flex-wrap: wrap;
}

.room-opened-detail p {
  padding: 10px 10%;
  text-align: justify;
}

#room-booking-btn {
  margin-bottom: 5%;
  margin-top: 3%;
}

.room img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.splide--dynamic {
  text-align: center;
}

@media (max-width: 912px) and (min-width: 100px) {
  .room-opened-container {
    width: 90vw;
    overflow-y: scroll;
  }

  .room-opened-slide-img {
    width: 100vw;
    margin-top: 0;
  }

  .icon {
    font-size: 13px;
  }
}
</style>
