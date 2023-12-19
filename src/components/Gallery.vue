<script setup>
import Header from './Header.vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Footer from './Footer.vue';

const displayAllPhotos = [
    "tourfa-tbilisi-pic-2-min.jpg",
    "DSC074411637458731343.jpg",
    "IMG_8247-min.jpg",
    "tourfa-tbilisi-pic-3-min.jpg",
    "tourfa-tbilisi-pic-4-min.jpg",
    "tourfa-tbilisi-pic-5-min.jpg",
    "tourfa-tbilisi-pic-6-min.jpg",
    "tourfa-tbilisi-pic-10-min.jpg",
    "tourfa-tbilisi-pic-11-min.jpg",
    "tourfa-tbilisi-pic-13-min.jpg",
    "tourfa-tbilisi-pic-15-min.jpg",
    "tourfa-tbilisi-pic-16-min.jpg",
    "tourfa-tbilisi-pic-17-min.jpg",
    "tourfa-tbilisi-pic-18-min.jpg",
    "tourfa-tbilisi-pic-21-min.jpg",
    "tourfa-tbilisi-pic-22-min.jpg",
    "tourfa-tbilisi-pic-23-min.jpg",
    "tourfa-tbilisi-pic-24-min.jpg",
    "tourfa-tbilisi-pic-26-min.jpg",
    "tourfa-tbilisi-pic-27-min.jpg",
    "tourfa-tbilisi-pic-28-min.jpg",
    "tourfa-tbilisi-pic-29-min.jpg",
    "tourfa-tbilisi-pic-30-min.jpg",
    "tourfa-tbilisi-pic-7-min.jpg",
    "tourfa-tbilisi-pic-2-min.jpg",
    "tourfa-tbilisi-pic-19-min.jpg",
    "tourfa-tbilisi-pic-14-min.jpg"
]
const displayRestaurant = [
    "tourfa-tbilisi-pic-19-min.jpg",
    "tourfa-tbilisi-pic-14-min.jpg",
    "tourfa-tbilisi-pic-7-min.jpg",
]
const displayRooms = [
    "tourfa-tbilisi-pic-3-min.jpg",
    "tourfa-tbilisi-pic-4-min.jpg",
    "tourfa-tbilisi-pic-5-min.jpg",
    "tourfa-tbilisi-pic-6-min.jpg",
    "tourfa-tbilisi-pic-10-min.jpg",
    "tourfa-tbilisi-pic-11-min.jpg",
    "tourfa-tbilisi-pic-13-min.jpg",
    "tourfa-tbilisi-pic-15-min.jpg",
    "tourfa-tbilisi-pic-16-min.jpg",
    "tourfa-tbilisi-pic-17-min.jpg",
    "tourfa-tbilisi-pic-18-min.jpg",
    "tourfa-tbilisi-pic-21-min.jpg",
    "tourfa-tbilisi-pic-22-min.jpg",
    "tourfa-tbilisi-pic-23-min.jpg",
    "tourfa-tbilisi-pic-24-min.jpg",
    "tourfa-tbilisi-pic-26-min.jpg",
    "tourfa-tbilisi-pic-27-min.jpg",
    "tourfa-tbilisi-pic-28-min.jpg",
    "tourfa-tbilisi-pic-29-min.jpg",
    "tourfa-tbilisi-pic-30-min.jpg",
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
    background: url("IMG_8253-min.jpg") no-repeat center center/cover;
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
    height: 250px;
    object-fit: cover;
    margin: 10px 8px;
    cursor: pointer;
}
</style>