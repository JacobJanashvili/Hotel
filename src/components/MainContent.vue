<script setup>
import "@splidejs/splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineAsyncComponent, ref, onMounted,onUnmounted } from "vue";
import Button from "primevue/button";

const Header = defineAsyncComponent({
  loader: () => import("./Header.vue"),
});
const HeroContent = defineAsyncComponent({
  loader: () => import("./HeroContent.vue"),
});
const Footer = defineAsyncComponent({
  loader: () => import("./Footer.vue"),
});
const Dialog = defineAsyncComponent({
  loader: () => import("primevue/dialog"),
});
const Attractions = [
  {
    title: "Museum of History of Georgian Jews",
    img: "ქართულ-ებრაული-მუზეუმი.jpg",
    description: {
      firstPart:
        "The Museum is situated in the old side of Tbilisi.The building of the Museum, which beautifies Old Tbilisi, erected in place of the former synagogue constructed in 1914 year.",
      secondPart:
        "The Museum is a treasure-house of centuries-old history of the Jews life in Georgia and a unique scientific center studying Georgian-Jewish relations.",
    },
    fullDescription: {
      firstPart:
        "Museum of <strong>History of Jews of Georgia</strong> is a museum dedicated to the Jewish culture and history in Georgia. Museum was established in 1932, in a centrally located district of Tbilisi, the capital of Georgia. It is located in a 5-minute walk from the Liberty Square. Museum carries the name of David Baazov – famous early 20th-century Georgian-Jewish rabbi and a public figure.",
      secondPart:
        "Museum was closed in 1951, and re-opened in 1992. Since its establishment, museum operates in a dome-shaped synagogue building, on Anton Cathalicos Street, Tbilisi Historic District.",
      thirdPart:
        "Collection of the Museum of History of Jews of Georgia includes many manuscripts and archives, ethnographic, art and epigraphic rarities. Artifacts are gathered and exhibited around several important themes in the history of the Jewish communities of Georgia, such as the various immigration periods of the Jews in Georgia (since as early as the 8th century BC); various periods of Aliyah (return of the Jewish communities to the Land of Israel); way of life of Georgian Jews; ethnic, judicial, cultural and religious aspects of the Jews in Georgia; the role of Jews in the dissemination of Christianity in Georgia etc. Museum endorses the idea that through centuries the Georgian Jews have been living peacefully in Georgia, played important role in the history of the society, and that they managed to maintain their ancient way of life through centuries.",
      fourthPart:
        "<em>Address: #3 Anton Katalikosi St, Tbilisi, Georgia</em><br><em>Working hours: Every day, except Monday, 11:00 – 17:00</em><br><em>Ticket price: Adults – 5 GEL. Schoolchildren and students – 1 GEL</em>",
    },
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.2380227256313!2d44.802914279345735!3d41.69379707809916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf03685bd87%3A0xcb2b210d6e986c9!2sMuseum%20of%20History%20of%20Georgian%20Jews!5e0!3m2!1sen!2sge!4v1702297842098!5m2!1sen!2sge",
  },
  {
    title: "Rezo Gabriadze Marionette Theatre",
    img: "რეზო-გაბრიაძის-თეატრი.jpg",
    description: {
      firstPart:
        "Though modest in size, The Gabriadze Theatre is among the world’s preeminent cultural institutions. Presenting mature puppet performances full of depth and meaning, it has gained the respect and recognition of international audiences and critics alike.",
      secondPart:
        "Based in its home theatre in Tbilisi, Georgia, the company is under the direction of a noted artist, writer and director Rezo Gabriadze (whose awards include Commander of the Order of Arts and Letters of the French Republic – France’s highest recognition for cultural achievements.) The Gabriadze Theatre has toured extensively, its recent venues including: Lincoln Center Festival in New York; The Edinburgh Festival; Bogota Theatre Festival; San Sebastian Festival, Spain; Toronto World Stage Festival; The Barbican Centre, London; Theatre de la Ville, Paris; The Kennedy Center Festival, Washington, D.C.; the Theatre Art Studio in Moscow.",
      thirdPart:
        "The Gabriadze Theatre stands in the heart of Tbilisi’s historic Old Town. The beautiful building of the unique marionette theatre was designed by Gabriadze himself. Among the shows in its current repertoire are: “The Autumn of My Spring”, “Stalingrad”, “Ramona”, “Diamond of Marshal de Fant’e”.",
    },
    fullDescription: {
      firstPart: `Though modest in size, The Gabriadze Theatre is among the world’s preeminent cultural institutions.
                        Presenting mature puppet performances full of depth and meaning, it has gained the respect and
                         recognition of international audiences and critics alike.`,
      secondPart: `Based in its home theatre in Tbilisi, Georgia, the company is under the direction of a noted artist,
                         writer, and director Rezo Gabriadze (whose awards include Commander of the Order of Arts and Letters
                         of the French Republic – France’s highest recognition for cultural achievements.) The Gabriadze
                         Theatre has toured extensively, its recent venues including: Lincoln Center Festival in New York;
                         The Edinburgh Festival; Bogota Theatre Festival; San Sebastian Festival, Spain; Toronto World Stage
                         Festival; The Barbican Centre, London; Theatre de la Ville, Paris; The Kennedy Center Festival,
                         Washington, D.C.; the Theatre Art Studio in Moscow.`,
      thirdPart: `The Gabriadze Theatre stands in the heart of Tbilisi’s historic Old Town. The beautiful building of
                         the unique marionette theatre was designed by Gabriadze himself. Among the shows in its current
                         repertoire are: “The Autumn of My Spring”, “Stalingrad”, “Ramona”, “Diamond of Marshal de Fant’e”.`,
    },

    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.1497760905295!2d44.803990176792496!3d41.6957022768134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ce51e44d209%3A0x2fb7924d31363498!2sGabriadze!5e0!3m2!1sen!2sge!4v1702297578214!5m2!1sen!2sge",
  },
  {
    title: "Abanotubani",
    img: "გოგირდის-აბანო.jpg",
    description: {
      firstPart:
        'Abanotubani (Georgian: აბანოთუბანი, literally "bath district") is the ancient district of Tbilisi, Georgia, known for its sulphuric baths.',
      secondPart:
        "Located at the eastern bank of the Mtkvari River at the foot of Narikala fort across Metekhisubani, Abanotubani is an important historic part of the city: it is where according to a legend the King of Iberia, Vakhtang Gorgasali’s falcon fell, leading to a discovery of the hot springs and, subsequently, to founding of a new capital.",
    },
    fullDescription: {
      placeWithAttendenceFee: {
        history: {
          firstPart:
            "Abanotubani, literally meaning “bath district”, is an ancient part of Tbilisi, known for its famous brick houses and sulfur bathhouses.",
          secondPart:
            "The origin of the bathhouse district dates back to when the city was founded and plays an important part in its history. According to the legend, when the falcon of King Vakhtang Gorgasali fell in one of the hot springs, the king decided to build the capital on top of the springs. As a result, Tbilisi earned its name (‘warm place’) from the very same hot springs that ran under the city, and which eventually became the foundation for the bathhouses.",
          thirdPart:
            "Many of the bathhouses were inspired by traditional Persian-style baths, but the difference is that the water in Tbilisi is not manually heated. Instead, it comes from the ground and is naturally hot.",
          fourthPart:
            "Many of the bathhouses were inspired by traditional Persian-style baths, but the difference is that the water in Tbilisi is not manually heated. Instead, it comes from the ground and is naturally hot.",
          fifthPart:
            "The sulfur baths have long been very popular. Famous visitors in the past include the legendary Russian poet Alexander Pushkin who, upon his visit in 1829, complimented them, saying: “Not since I was born have I encountered the luxury of Tiflis’ baths.” And that is a really accurate way of summing them up.",
          sixthPart:
            "Besides being incredibly relaxing, the bathhouses are also said to have countless health benefits. The sulfur in the water helps with dry skin, rashes, joint problems, acne and more.",
        },
        generalInformation: {
          listItem1:
            "Prices typically are per hour and start from around 20 GEL (for public ones) and go up to 200 GEL (usually for the private/luxurious ones). Massages start at an extra 10 GEL per person. How much you end up paying depends completely on what you’re looking for. For a clean and a spacious room with some extra furniture, expect around 60-80 GEL.",
          listItem2:
            "Most bathhouses offer two different types: public and private rooms, with the latter obviously more expensive.",
          listItem3:
            "If you want to save money, you can bring your own towel, soap, shampoo and slippers.",
          listItem4:
            "Inside the rooms you can be either naked or in your swimwear, whichever makes you more comfortable.",
          listItem5:
            "Be sure to bring a bottle of cold water so you don’t become dehydrated since it’s really hot inside.",
          listItem6:
            "Most bathhouses are open from 7 or 8am till until 12pm, while some private ones are open 24 hours.",
          listItem7:
            "Most importantly, you should embrace the experience. It might seem awkward at first, but it makes for a very memorable experience with a healthy and a relaxing bath.",
        },
      },
    },
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.461917990246!2d44.810145576792266!3d41.68896297723384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf79ef8ebfb%3A0xe332216273ed6402!2sAbanotubani!5e0!3m2!1sen!2sge!4v1702805761389!5m2!1sen!2sge",
  },
];
const attractionOpened = ref(false);
const clickedAttractionTitle = ref("");
const clickedAttractionImg = ref("");
const clickedAttractionFullDescription = ref([]);
const clickedAttractionMapSrc = ref("");
const clickedRoomTitle = ref("");
const clickedRoomImg = ref("");
const clickedRoomDescription = ref("");
const clickedRoomSlides = ref([]);
const clickedRoomOccupancy = ref(Number);
const clickedRoomDimension = ref("");
const isRoomOpen = ref(false);
const screenWidth = ref(window.screen.width);
function onRoomClick(item) {
  clickedRoomTitle.value = item.title;
  clickedRoomDescription.value = item.longDescription;
  clickedRoomImg.value = item.img;
  clickedRoomSlides.value = item.roomPreviewSlides;
  clickedRoomOccupancy.value = item.occupancy;
  clickedRoomDimension.value = item.dimension;
  console.log(item);
  return item;
}

function whenAttractionIsOpen(item) {
  clickedAttractionTitle.value = item.title;
  clickedAttractionImg.value = item.img;
  clickedAttractionFullDescription.value = item.fullDescription;
  clickedAttractionMapSrc.value = item.mapSrc;
}
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

const carouselData = [
  {
    img: "google-review-N1.png",
    title: "ohad regev",
    review: ` A very nice hotel. The rooms are clean and luxurious. The breakfast is excellent,
        the owner of the
        hotel is very nice and asked if we needed anything and if everything was fine. Very good and
        recommended`,
  },
  {
    img: "google-review-N2.png",
    title: "asaf shlomo",
    review: ` Great hotel with great service, very accomodating and the staff can speak
         English. Great location in the middle of tibilisi. Overall a great experience. Great for Jews who
        want to eat kosher food while in Georgia.`,
  },
  {
    img: "google-review-N3.png",
    title: "Rinzy Ousmand",
    review: `The location is excellent, the rooms are fine, we were there Saturday 8.23 ​​it was nice, close to the Chabad house, the staff is also nice, the manager of the place was very kind.`,
  },
];
onMounted(() =>{
  window.addEventListener("resize", updateScreenWidth);
})
const roomCarouselData = [
  {
    img: "tourfa-tbilisi-pic-4-min.jpg",
    title: "Double with extra-bed",
    longDescription:
      "Offering free toiletries, this double room includes a private bathroom with a shower, a hairdryer and slippers. The air-conditioned double room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a tea and coffee maker as well as an inner courtyard view. The unit has 2 beds.",
    roomPreviewSlides: [
      "Double-Room.jpg",
      "Double-Room-2.jpg",
      "Double-Room-couch.jpg",
      "Double-Room-bathroom.jpg",
      "Double-Room-bathroom-2.jpg",
      "Double-Room-shower.jpg",
      "Double-Room-shower-2.jpg",
    ],
    minPrice: "GEL150",
    occupancy: 4,
    dimension: "25 m²",
  },
  {
    img: "tourfa-tbilisi-pic-5-min.jpg",
    title: "Twin with extra-bed",
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
    img: "tourfa-tbilisi-pic-6-min.jpg",
    title: "Family Room",
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
    dimension: "32 m²",
  },
];
const roomsPopUpList = [
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
    title: "Deluxe Double Room with extra bed",
    img: "Double-Room.jpg",
    shortDescription:
      "Deluxe is spacious 30 sqm room featuring adjoining individual courtyard; equipped with bathroom, tea & coffee facilities, flat-screen TV and Wi-Fi. It features king size bedroom and two sofas convertible into extra bed. Deluxe room can easily accommodate up to 4 people a ",
    longDescription:
      "Offering free toiletries, this double room includes a private bathroom with a shower, a hairdryer and slippers. The air-conditioned double room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a tea and coffee maker as well as an inner courtyard view. The unit has 2 beds.",
    roomPreviewSlides: [
      "Double-Room.jpg",
      "Double-Room-2.jpg",
      "Double-Room-couch.jpg",
      "Double-Room-bathroom.jpg",
      "Double-Room-bathroom-2.jpg",
      "Double-Room-shower.jpg",
      "Double-Room-shower-2.jpg",
    ],
    minPrice: "GEL150",
    occupancy: 4,
    dimension: "25 m²",
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
    dimension: "32 m²",
  },
];
const options = {
  perPage: 1,
  pagination: "true",
  arrows: "true",
  type: "loop",
};
const roomOptions = {
  perPage: 1,
  pagination: "true",
};
</script>
<template>
  <Header />
  <HeroContent />
  <div class="reviews-wrapper">
    <h1>What our customers say about us</h1>
    <Splide :options="options">
      <SplideSlide v-for="slide in carouselData">
        <img class="review-img" :src="slide.img" alt="" />
        <h3 class="review-user">{{ slide.title }}</h3>
        <p class="review-text">{{ slide.review }}</p>
      </SplideSlide>
    </Splide>
  </div>
  <div class="rooms-wrapper">
    <div class="rooms-subwrapper">
      <h1>Take a peak at our luxurious rooms</h1>
      <div class="room-div-wrapper" v-if="screenWidth > 912">
        <div class="room" v-for="item in roomCarouselData">
          <img class="room-img" :src="item.img" alt="" />
          <div class="price-wrapper">
            <h3 class="room-title">{{ item.title }}</h3>
            <div class="price-subwrapper">
              <p class="price-intro">From</p>
              <div class="price">
                <span class="price-tag">$99</span>
                <span>/night</span>
              </div>
            </div>
            <div
              class="room-link"
              @click="(isRoomOpen = !isRoomOpen), onRoomClick(item)"
            >
              <p>View</p>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32.00 32.00"
                xml:space="preserve"
                width="50px"
                height="50px"
                fill="#059669"
                stroke="#059669"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.64"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <line
                    style="
                      fill: none;
                      stroke: #059669;
                      stroke-width: 0.992;
                      stroke-miterlimit: 10;
                    "
                    x1="26"
                    y1="16"
                    x2="4"
                    y2="16"
                  ></line>
                  <polyline
                    style="
                      fill: none;
                      stroke: #059669;
                      stroke-width: 0.992;
                      stroke-miterlimit: 10;
                    "
                    points="20.485,10 26.485,16 20.485,22 "
                  ></polyline>
                </g>
              </svg>
            </div>
          </div>
          <Dialog
            v-model:visible="isRoomOpen"
            :modal="true"
            dismissableMask="true"
            :pt="{
              root: { style: 'border: 0' },
            }"
          >
            <template #container>
              <div class="room-opened-container">
                <div class="room-wrapper">
                  <Splide :options="roomOptions" class="splide--dynamic">
                    <SplideSlide v-for="slide in clickedRoomSlides">
                      <img class="room-opened-slide-img" :src="slide" alt="" />
                    </SplideSlide>
                  </Splide>
                  <h2 class="room-title opened-room-title">
                    {{ clickedRoomTitle }}
                  </h2>
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
                      <p>{{ clickedRoomDimension }}</p>
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
                <img
                  @click="isRoomOpen = !isRoomOpen"
                  v-if="screenWidth > 912"
                  class="close-icon"
                  src="/xmark-solid.svg"
                  alt=""
                />
                <div v-if="screenWidth < 912" class="mobile-close-menu">
                  <img
                    @click="isRoomOpen = !isRoomOpen"
                    class="close-icon"
                    src="/xmark-solid.svg"
                    alt=""
                  />
                </div>
              </div>
            </template>
          </Dialog>
        </div>
      </div>
      <Splide v-if="screenWidth < 912" :options="roomOptions">
        <SplideSlide v-for="slide in roomCarouselData">
          <div class="room">
            <img class="room-img" :src="slide.img" alt="" />
            <div class="price-wrapper">
              <h3 class="room-title non-dialogue-title">{{ slide.title }}</h3>
              <div class="price-subwrapper">
                <p class="price-intro">From</p>
                <div class="price">
                  <span class="price-tag">$99</span>
                  <span>/night</span>
                </div>
              </div>
              <div
                class="room-link"
                @click="(isRoomOpen = !isRoomOpen), onRoomClick(slide)"
              >
                <p>View</p>
                <svg
                  version=" 1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 32.00 32.00"
                  xml:space="preserve"
                  width="50px"
                  height="50px"
                  fill="#1E90FF"
                  stroke="#1E90FF"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.64"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <line
                      style="
                        fill: none;
                        stroke: #059669;
                        stroke-width: 0.992;
                        stroke-miterlimit: 10;
                      "
                      x1="26"
                      y1="16"
                      x2="4"
                      y2="16"
                    ></line>
                    <polyline
                      style="
                        fill: none;
                        stroke: #059669;
                        stroke-width: 0.992;
                        stroke-miterlimit: 10;
                      "
                      points="20.485,10 26.485,16 20.485,22 "
                    ></polyline>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <Dialog
            v-if="isRoomOpen"
            v-model:visible="isRoomOpen"
            :modal="true"
            dismissableMask="true"
          >
            <template #container>
              <div class="room-opened-container">
                <div class="room-wrapper">
                  <Splide :options="roomOptions" class="splide--dynamic">
                    <SplideSlide v-for="slide in clickedRoomSlides">
                      <img
                        class="room-opened-slide-img"
                        :src="slide"
                        alt=""
                      />
                    </SplideSlide>
                  </Splide>
                  <h2 class="room-title">{{ clickedRoomTitle }}</h2>
                  <div class="room-icons">
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
                      <p>{{ clickedRoomDimension }}</p>
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
                <img
                  @click="isRoomOpen = !isRoomOpen"
                  v-if="screenWidth > 912"
                  class="close-icon"
                  src="/xmark-solid.svg"
                  alt=""
                />
                <div v-if="screenWidth < 912" class="mobile-close-menu">
                  <img
                    @click="isRoomOpen = !isRoomOpen"
                    class="close-icon"
                    src="/xmark-solid.svg"
                    alt=""
                  />
                </div>
              </div>
            </template>
          </Dialog>
        </SplideSlide>
      </Splide>
    </div>
  </div>
  <div class="places-wrapper">
    <h1 class="places-wrapper-title">Places 5 minutes from our hotel</h1>
    <div class="place" v-for="place in Attractions">
      <img class="place-img" :src="place.img" :alt="place.title" />
      <div class="text-div">
        <h2>{{ place.title }}</h2>
        <div class="text">
          <p>{{ place.description.firstPart }}</p>
          <p>{{ place.description.secondPart }}</p>
          <p v-if="place.description.thirdPart">
            {{ place.description.thirdPart }}
          </p>
        </div>
      </div>
      <div
        class="attractions-link"
        @click="
          (attractionOpened = !attractionOpened), whenAttractionIsOpen(place)
        "
      >
        <p>Learn More</p>
        <img src="/long-arrow-right.jpg" alt="" />
      </div>
      <Dialog
        v-model:visible="attractionOpened"
        :modal="true"
        closable="true"
        dismissableMask="true"
        :pt="{
          root: { style: 'border: none' },
        }"
      >
        <template #container>
          <div class="clicked-attraction">
            <img class="header-img" :src="clickedAttractionImg" alt="" />
            <h2 class="header-title">{{ clickedAttractionTitle }}</h2>
            <div class="clicked-attraction-description">
              <p v-html="clickedAttractionFullDescription.firstPart"></p>
              <p v-html="clickedAttractionFullDescription.secondPart"></p>
              <p
                v-html="clickedAttractionFullDescription.thirdPart"
                v-if="clickedAttractionFullDescription"
              ></p>
              <p
                v-html="clickedAttractionFullDescription.fourthPart"
                v-if="clickedAttractionFullDescription.fourthPart"
              ></p>
              <p
                v-html="clickedAttractionFullDescription.fifthPart"
                v-if="clickedAttractionFullDescription.fifthPart"
              ></p>
              <p
                v-html="clickedAttractionFullDescription.sixthPart"
                v-if="clickedAttractionFullDescription.sixthPart"
              ></p>
              <p
                v-html="clickedAttractionFullDescription.seventhPart"
                v-if="clickedAttractionFullDescription.seventhPart"
              ></p>
              <p
                v-html="clickedAttractionFullDescription.eighthPart"
                v-if="clickedAttractionFullDescription.eighthPart"
              ></p>
              <p
                v-html="clickedAttractionFullDescription.ninthPart"
                v-if="clickedAttractionFullDescription.ninthPart"
              ></p>
              <p
                v-html="clickedAttractionFullDescription.tenthPart"
                v-if="clickedAttractionFullDescription.tenthPart"
              ></p>
              <div
                class="place-with-history-wrapper"
                v-if="clickedAttractionFullDescription.placeWithAttendenceFee"
              >
                <h2>History:</h2>
                <p
                  v-html="
                    clickedAttractionFullDescription.placeWithAttendenceFee
                      .history.firstPart
                  "
                ></p>
                <p
                  v-html="
                    clickedAttractionFullDescription.placeWithAttendenceFee
                      .history.secondPart
                  "
                ></p>
                <p
                  v-html="
                    clickedAttractionFullDescription.placeWithAttendenceFee
                      .history.thirdPart
                  "
                ></p>
                <p
                  v-html="
                    clickedAttractionFullDescription.placeWithAttendenceFee
                      .history.fourthPart
                  "
                ></p>
                <p
                  v-html="
                    clickedAttractionFullDescription.placeWithAttendenceFee
                      .history.fifthPart
                  "
                ></p>
                <p
                  v-html="
                    clickedAttractionFullDescription.placeWithAttendenceFee
                      .history.sixthPart
                  "
                ></p>
              </div>
              <div
                class="general-information"
                v-if="clickedAttractionFullDescription.placeWithAttendenceFee"
              >
                <h2>General information and what to expect:</h2>
                <ol>
                  <li>
                    {{
                      clickedAttractionFullDescription.placeWithAttendenceFee
                        .generalInformation.listItem1
                    }}
                  </li>
                  <li>
                    {{
                      clickedAttractionFullDescription.placeWithAttendenceFee
                        .generalInformation.listItem2
                    }}
                  </li>
                  <li>
                    {{
                      clickedAttractionFullDescription.placeWithAttendenceFee
                        .generalInformation.listItem3
                    }}
                  </li>
                  <li>
                    {{
                      clickedAttractionFullDescription.placeWithAttendenceFee
                        .generalInformation.listItem4
                    }}
                  </li>
                  <li>
                    {{
                      clickedAttractionFullDescription.placeWithAttendenceFee
                        .generalInformation.listItem5
                    }}
                  </li>
                  <li>
                    {{
                      clickedAttractionFullDescription.placeWithAttendenceFee
                        .generalInformation.listItem6
                    }}
                  </li>
                  <li>
                    {{
                      clickedAttractionFullDescription.placeWithAttendenceFee
                        .generalInformation.listItem7
                    }}
                  </li>
                </ol>
              </div>
              <iframe
                class="map"
                :src="clickedAttractionMapSrc"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              class="attraction-close-icon"
              @click="attractionOpened = !attractionOpened"
            >
              <img src="/xmark-solid.svg" alt="" />
            </div>
            <div v-if="screenWidth < 912" class="mobile-close-menu">
              <img
                @click="attractionOpened = !attractionOpened"
                class="close-icon"
                src="/xmark-solid.svg"
                alt=""
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
  <Footer />
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Serif+Georgian:wght@400;500;600;700&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

.attraction-close-icon {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border-radius: 0 0 0 5px;
}

.attraction-close-icon:hover {
  background-color: black;
  transition: 0.3s;
}

.attraction-close-icon img {
  filter: invert(99%) sepia(0%) saturate(7496%) hue-rotate(263deg)
    brightness(105%) contrast(106%);
}

.mobile-close-menu {
  position: absolute;
  top: 0;
  height: 40px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
}
.room-title.non-dialogue-title {
  text-align: left;
}

.reviews-wrapper {
  margin: 100px auto;
  text-align: center;
}

.review-img {
  width: 80px;
  margin-top: 30px;
}

.review-user {
  margin-top: 10px;
}

.review-text {
  margin: 20px auto 35px auto;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 30vw;
}

.rooms-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  height: 500px;
}

.rooms-subwrapper h1 {
  text-align: center;
}

.room {
  width: 300px;
  height: 400px;
  margin-top: 30px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.06);
  position: relative;
  margin: 50px 25px;
  border-radius: 0 0 5px 5px;
}

.room-img {
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.room-div-wrapper {
  display: flex;
  align-items: center;
}

.room h3 {
  font-weight: 400;
}

.price-wrapper {
  padding: 20px 0 5px 25px;
}

.price-subwrapper {
  margin-top: 20px;
}

.icon {
  display: flex;
  align-items: center;
  margin: 5px 5px;
}

.icon p {
  margin-left: 5px;
}

.price {
  display: inline-block;
}

.price-tag {
  font-size: 30px;
  color: #059669;
}

.room-link {
  display: flex;
  align-items: center;
  position: absolute;
  margin-right: 20px;
  right: 0;
  bottom: 0;
  cursor: pointer;
  color: #059669;
}

.room-link:hover {
  border-bottom: 2px solid #059669;
}

.link-icon {
  width: 10px;
}

.room-link svg {
  margin-left: 10px;
}

.room-link p {
  font-weight: 400;
}

.room-opened-container {
  width: 50vw;
  background-color: white;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 5vh;
}

.room-opened-container::before {
  content: "";
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
  height: 40px;
}

.room-opened-slide-img {
  margin-top: 20px;
  height: 500px;
  width: 100%;
  object-position: center center;
  object-fit: contain;
}

.room-icons {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15px auto;
  flex-wrap: wrap;
}

.room-opened-detail {
  text-align: center;
}

.room-opened-detail p {
  padding: 10px 10%;
  text-align: justify;
}

#room-booking-btn {
  margin-top: 10px;
  margin-bottom: 5%;
}

.opened-room-title {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
}

.splide--dynamic {
  text-align: center;
}

.places-wrapper {
  width: 80%;
  margin: 100px auto;
}

.places-wrapper-title {
  text-align: center;
}

.place {
  margin-top: 50px;
  display: flex;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
  position: relative;
  border-radius: 5px;
}

.place-img {
  width: 50%;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
  aspect-ratio: 4/3;
}

.text-div {
  width: 100%;
  text-align: center;
  height: 100%;
}

.text-div h2 {
  font-weight: 400;
  font-size: 28px;
  margin: 25px 0;
}

.text {
  text-align: justify;
  padding: 0 10% 10% 10%;
}

.text p {
  margin: 20px 0;
}

.attractions-link {
  position: absolute;
  bottom: 0;
  right: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.attractions-link:hover {
  border-bottom: 2px solid black;
}

.attractions-link img {
  margin-left: 10px;
}

.clicked-attraction {
  width: 50rem;
  background-color: white;
  border-radius: 0 0 6px 6px;
  position: relative;
  overflow-y: scroll;
}

.header-img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  filter: brightness(0.6);
  border-radius: 0 0 6px 6px;
}

.header-title {
  text-align: center;
  font-weight: 500;
  margin-top: 15px;
}

.clicked-attraction-description {
  margin-top: 50px;
}

.clicked-attraction-description p {
  margin: 10px 0;
  padding: 0 2vw;
  text-align: justify;
}

.clicked-attraction-description p :deep(a) {
  color: black;
  font-weight: bold;
}

.close-icon {
  position: absolute;
  right: 10px;
  top: 4px;
  cursor: pointer;
  padding: 0.5rem;
}

.close-icon:hover {
  color: #374151;
  background-color: #f3f4f6;
  border-color: transparent;
  border-radius: 50%;
}

.general-information {
  padding: 20px 30px;
}

.general-information ol {
  padding-top: 10px;
}

.general-information ol li {
  padding-top: 10px;
}

.general-information h2 {
  font-size: 18px;
  font-weight: 500;
  padding-left: 35px;
}

.map {
  margin-top: 50px;
}

.place-with-history-wrapper {
  padding: 0 20px;
}

.place-with-history-wrapper h2 {
  font-size: 18px;
  font-weight: 500;
  padding-left: 35px;
}

.place-with-history-wrapper p {
  text-align: justify;
}

@media (max-width: 912px) and (min-width: 100px) {
  .reviews-wrapper h1 {
    font-size: 18px;
  }

  .review-text {
    font-size: 15px;
    width: 60vw;
    text-align: justify;
  }

  .review-user {
    font-size: 15px;
  }

  .room {
    margin: 50px auto;
  }

  .rooms-subwrapper h1 {
    font-size: 17px;
  }

  .room-title {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  .rooms-wrapper {
    height: inherit;
    overflow-x: hidden;
  }

  .room-opened-container {
    width: 90vw;
    overflow-y: scroll;
  }

  .room-opened-slide-img {
    width: 100vw;
    object-fit: cover;
    margin-top: 0;
  }

  .icon {
    font-size: 13px;
  }

  .places-wrapper-title {
    font-size: 17px;
  }

  .place {
    flex-direction: column;
  }
  .place-img {
    width: 100%;
  }

  .text-div h2 {
    font-size: 22px;
  }

  .text-div {
    padding-bottom: 30px;
  }
  .text {
    font-size: 14px;
  }
  .clicked-attraction {
    width: 95vw;
  }

  .clicked-attraction-description p {
    padding: 0 5vw;
  }

  .header-title {
    font-size: 22px;
  }
}
</style>
