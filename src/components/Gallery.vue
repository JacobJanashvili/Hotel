<script setup>
import Header from './header.vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Footer from './Footer.vue';

const displayAllPhotos = [
    "src/assets/images/სასტუმროს-ახალი-ფოტოები/IMG_8247-min.png",
    "src/assets/images/სასტუმროს-ახალი-ფოტოები/IMG_8248-min.png",
    "src/assets/images/სასტუმროს-ახალი-ფოტოები/IMG_8247-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-3-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-4-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-5-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-6-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-10-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-11-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-13-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-15-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-16-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-17-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-18-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-21-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-22-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-23-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-24-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-26-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-27-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-28-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-29-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-30-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/tourfa-tbilisi-pic-7-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/tourfa-tbilisi-pic-2-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/tourfa-tbilisi-pic-19-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/tourfa-tbilisi-pic-14-min.png"
]
const displayRestaurant = [
    "src/assets/images/სასტუმროს-ფოტოები/tourfa-tbilisi-pic-19-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/tourfa-tbilisi-pic-14-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/tourfa-tbilisi-pic-7-min.png",
]
const displayRooms = [
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-3-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-4-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-5-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-6-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-10-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-11-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-13-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-15-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-16-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-17-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-18-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-21-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-22-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-23-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-24-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-26-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-27-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-28-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-29-min.png",
    "src/assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-30-min.png",
]

</script>
<template>
    <Header />
    <main>
        <div class="gallery-hero">
            <h1>Our Gallery</h1>
        </div>
        <div class="gallery">
            <TabView>
                <TabPanel header="All Photos">
                    <div class="image-gallery" v-viewer>
                        <img v-for="img in displayAllPhotos" :src="img">
                    </div>
                </TabPanel>
                <TabPanel header="Restaurant">
                    <div class="image-gallery" v-viewer>
                        <img v-for="img in displayRestaurant" :src="img">
                    </div>
                </TabPanel>
                <TabPanel header="Rooms">
                    <div class="image-gallery" v-viewer>
                        <img v-for="img in displayRooms" :src="img">
                    </div>
                </TabPanel>
            </TabView>
        </div>

    </main>
    <Footer />
</template>
<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}

.gallery-hero {
    margin-bottom: 50px;
    background: url("../assets/images/სასტუმროს-ახალი-ფოტოები/IMG_8253-min.png") no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1;
}

.gallery-hero::before {
    background-color: rgba(0, 0, 0, 0.602);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}

.gallery-hero h1 {
    z-index: 1;
}

.p-tabview {
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.image-gallery {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
}

.image-gallery img {
    width: 350px;
    margin: 10px 8px;
    cursor: pointer;
}
</style>