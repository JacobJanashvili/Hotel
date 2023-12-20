<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';

</script>
<template>
    <Header />
    <main>
        <div class="about-us-hero">
            <h1>About us</h1>
        </div>
        <div class="about-us-text">
            <p>Boutique hotel located in the Old City of Tbilisi, within 5-minutes walking distance to the Freedom Square
                and all major tourist-haunted sites, attractions and places of entertainment.</p>
            <p>The 12-room hotel design was developed by the representatives of well-known Kavlashvili Architects’ Dynasty,
                whereas the interior & decorative design is the work of internationally acclaimed artist Koba
                Pirstkhalaishvili. The authors managed to merge the aura and features of Old Tbilisi with modern and
                futuristic concepts. The hotel compound consists of 3 individual 3-story buildings interconnected with open
                bridges and inner courtyard. All buildings share common underground dining area </p>
            <p>All clients can appreciate Kosher, healthy and homemade breakfast and free Wi-Fi internet throughout the
                entire property. Hotel offers high level of service and comfortable accommodation.</p>
            <p>For those who observe Shabbat and Kashrut, the hotel is also situated within 5-minutes walking distance to
                both Great and Ashkenazi Synagogues, Chabad Georgia Center and kosher restaurants. </p>
        </div>
        <div class="about-us-rooms-wrapper">
            <h2 class="about-us-rooms-title">Our Rooms</h2>
            <div class="about-us-room">
                <img class="about-us-room-img"
                    src="/tourfa-tbilisi-pic-10-min.jpg" alt="">
                <div class="text-div">
                    <h2>Standard</h2>
                    <div class="text">
                        <p>Standard rooms are 20 sqm equipped with bathroom, tea & coffee facilities, flat-screen TV and
                            Wi-Fi. They feature king size bedroom and a sofa convertible into extra bed. Standard rooms can
                            easily accommodate up to 3 people and are suitable for couples with child. </p>
                    </div>
                </div>
                <div class="about-us-rooms-link">
                    <p>View</p>
                    <img src="/long-arrow-right.jpg" alt="">
                </div>
            </div>
            <div class="about-us-room">
                <img class="about-us-room-img"
                    src="/tourfa-tbilisi-pic-11-min.jpg" alt="">
                <div class="text-div">
                    <h2>Family</h2>
                    <div class="text">
                        <p>Family rooms comprise main and child room, 22 and 6 sqm, respectively, equipped with bathroom,
                            tea & coffee facilities, flat-screen TV and Wi-Fi. They feature king size bedroom and a sofa
                            convertible into extra bed. Family rooms can easily accommodate up to 4 people and are suitable
                            for larger families, etc. </p>
                    </div>
                </div>
                <div class="about-us-rooms-link">
                    <p>View</p>
                    <img src="/long-arrow-right.jpg" alt="">
                </div>

            </div>
            <div class="about-us-room">
                <img class="about-us-room-img"
                    src="/tourfa-tbilisi-pic-13-min.jpg" alt="">
                <div class="text-div">
                    <h2>Deluxe</h2>
                    <div class="text">
                        <p>Deluxe is spacious 30 sqm room featuring adjoining individual courtyard; equipped with bathroom,
                            tea & coffee facilities, flat-screen TV and Wi-Fi. It features king size bedroom and two sofas
                            convertible into extra bed. Deluxe room can easily accommodate up to 4 people a </p>
                    </div>
                </div>
                <div class="about-us-rooms-link">
                    <p>View</p>
                    <img src="/long-arrow-right.jpg" alt="">
                </div>
            </div>

        </div>
        <div class="visit-us-wrapper">
            <h2 class="visit-us-title">Visit Us</h2>
            <div class="visit-us-location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.1791460441805!2d44.800357691928376!3d41.695068202765036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d86c6a6c8e3%3A0xd34ddb9bdf5d5a36!2sTourfa!5e0!3m2!1sen!2sge!4v1702038328902!5m2!1sen!2sge"
                    width="90%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </main>
    <Footer />
</template>
<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}

.about-us-hero {
    margin-bottom: 50px;
    background: url("IMG_8245-min-min.jpg") no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1;
}

.about-us-hero::before {
    background-color: rgba(0, 0, 0, 0.602);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}

.about-us-hero h1 {
    z-index: 1;

}

.about-us-text {
    margin: 0 auto;
    font-size: 18px;
    width: 800px;
    text-align: justify;
    font-weight: 400;
}

.about-us-text p {
    margin: 20px 0;
}

.about-us-rooms-wrapper {
    width: 80%;
    margin: 100px auto;
}

.about-us-rooms-title {
    text-align: center;
    font-weight: 500;
}

.about-us-rooms-link {
    position: absolute;
    bottom: 0;
    right: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.about-us-rooms-link img {
    margin-left: 10px;
}

.about-us-rooms-link:hover {
    border-bottom: 2px solid black;

}

.about-us-room {
    margin-top: 50px;
    display: flex;
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
    position: relative;
}

.about-us-room-img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
}

.text-div {
    width: 100%;
    text-align: center;
    height: 100%;
}

.text {
    text-align: justify;
    padding: 0 10% 10% 10%;
}

.text p {
    margin: 20px 0;


}

.text-div h2 {
    font-weight: 400;
    font-size: 21px;
    margin: 25px 0;
}

.visit-us-title {
    font-weight: 500;
    text-align: center;
}

.visit-us-location {
    text-align: center;
    margin: 50px auto;
}

@media (max-width: 900px) and (min-width: 100px) {
    .about-us-room {
        flex-direction: column;
    }

    .text-div h2 {
        font-size: 22px;
    }

    .text-div {
        padding-bottom: 30px;
    }
}</style>