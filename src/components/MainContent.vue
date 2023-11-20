<script setup>
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { onMounted } from 'vue';
import { register } from 'swiper/element/bundle';
register()
const api_key = "AIzaSyB3H6rDOuQixdWki7N2pmcH1MS9ieMsF3Y"
// const getReviews = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ48imxoYNREARNlpd35vbTdM&reviews_sort&key=${api_key}`

</script>
<template>
    <div class="reviews-wrapper">
        <h1>What our customers say about us</h1>
        <swiper>
            <swiper-container :infinite="true" :centered-slides="true" :pagination="{
                clickable: true
            }" loop="true" :autoplay="{
    delay: 3500
}" :fade="{ crossfade: true }">
                <swiper-slide>
                    <img src="../assets/images/google-review-user-photos/google-review-N1.png" alt="">
                    <h3 class="review-user">ohad regev</h3>
                    <p class="review-text">A very nice hotel. The rooms are clean and luxurious. The breakfast is excellent,
                        the owner of the
                        hotel is very nice and asked if we needed anything and if everything was fine. Very good and
                        recommended
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/google-review-user-photos/google-review-N2.png" alt="">
                    <h3 class="review-user">asaf shlomo</h3>
                    <p class="review-text">Great hotel with great service, very accomodating and the staff can speak
                        English. Great location in the middle of tibilisi. Overall a great experience. Great for Jews who
                        want to eat kosher food while in Georgia.
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/google-review-user-photos/google-review-N3.png" alt="">
                    <h3 class="review-user">Rinzy Ousmand</h3>
                    <p class="review-text">
                        Amazing
                    </p>
                </swiper-slide>
            </swiper-container>
        </swiper>
    </div>
    <div class="rooms-wrapper">
        <div class="rooms-subwrapper">
            <h1>Relax in our luxurious rooms</h1>
            <div class="room-div-wrapper">
                <div class="room">
                    <img class="room-img" src="../assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-4.JPEG" alt="">
                    <div class="price-wrapper">
                        <h3 class="room-title">Double Deluxe Room</h3>
                        <div class="price-subwrapper">
                            <p class="price-intro">From</p>
                            <div class="price">
                                <span class="price-tag">$99</span>
                                <span>/night</span>
                            </div>
                        </div>
                        <div class="room-link">
                            <p>View</p>
                            <img src="../assets/icons/long-arrow-right.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="room">
                    <img class="room-img" src="../assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-5.JPEG" alt="">
                    <div class="price-wrapper">
                        <h3 class="room-title">Double Deluxe Room</h3>
                        <div class="price-subwrapper">
                            <p class="price-intro">From</p>
                            <div class="price">
                                <span class="price-tag">$99</span>
                                <span>/night</span>
                            </div>
                        </div>
                        <div class="room-link">
                            <p>View</p>
                            <img src="../assets/icons/long-arrow-right.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="room">
                    <img class="room-img" src="../assets/images/სასტუმროს-ფოტოები/ოთახები/tourfa-tbilisi-pic-6.JPEG" alt="">
                    <div class="price-wrapper">
                        <h3 class="room-title">Double Deluxe Room</h3>
                        <div class="price-subwrapper">
                            <p class="price-intro">From</p>
                            <div class="price">
                                <span class="price-tag">$99</span>
                                <span>/night</span>
                            </div>
                        </div>
                        <div class="room-link">
                            <p>View</p>
                            <img src="../assets/icons/long-arrow-right.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="places-wrapper">
        <h1 class="places-wrapper-title">Places 5 minutes from our hotel</h1>
        <div class="place">
            <img class="place-img" src="../assets/images/ადგილები/ქართულ-ებრაული-მუზეუმი.jpg" alt="">
            <div class="text-div">
                <h2>Museum of History of Georgian Jews </h2>
                <div class="text">
                    <p>The Museum is situated in the old side of Tbilisi.The building of the Museum, which beautifies Old
                        Tbilisi, erected in place of the former synagogue constructed in 1914 year.</p>
                    <p>The Museum is a treasure-house of centuries-old history of the Jews life in Georgia and a unique
                        scientific center studying Georgian-Jewish relations.
                        . </p>
                </div>
            </div>
            <div class="attractions-link">
                <p>Learn More</p>
                <img src="../assets/icons/long-arrow-right.png" alt="">
            </div>
        </div>
        <div class="place">
            <img class="place-img" src="../assets/images/ადგილები/რეზო-გაბრიაძის-თეატრი.jpg" alt="">
            <div class="text-div">
                <h2>Rezo Gabriadze Marionette Theatre</h2>
                <div class="text">
                    <p>Though modest in size, The Gabriadze Theatre is among the world’s preeminent cultural institutions.
                        Presenting mature puppet performances full of depth and meaning, it has gained the respect and
                        recognition of international audiences and critics alike. </p>
                    <p>Based in its home theatre in Tbilisi, Georgia, the company is under the direction of a noted artist,
                        writer, and director Rezo Gabriadze (whose awards include Commander of the Order of Arts and Letters
                        of the French Republic – France’s highest recognition for cultural achievements.) The Gabriadze
                        Theatre has toured extensively, its recent venues including: Lincoln Center Festival in New York;
                        The Edinburgh Festival; Bogota Theatre Festival; San Sebastian Festival, Spain; Toronto World Stage
                        Festival; The Barbican Centre, London; Theatre de la Ville, Paris; The Kennedy Center Festival,
                        Washington, D.C.; the Theatre Art Studio in Moscow. </p>
                    <p>The Gabriadze Theatre stands in the heart of Tbilisi’s historic Old Town. The beautiful building of
                        the unique marionette theatre was designed by Gabriadze himself. Among the shows in its current
                        repertoire are: “The Autumn of My Spring”, “Stalingrad”, “Ramona”, “Diamond of Marshal de Fant’e”.
                    </p>
                </div>
            </div>
            <div class="attractions-link">
                <p>Learn More</p>
                <img src="../assets/icons/long-arrow-right.png" alt="">
            </div>
        </div>
        <div class="place">
            <img class="place-img" src="../assets/images/ადგილები/გოგირდის-აბანო.jpg" alt="">
            <div class="text-div">
                <h2>Abanotubani</h2>
                <div class="text">
                    <p>Abanotubani (Georgian: აბანოთუბანი, literally "bath district") is the ancient district of Tbilisi,
                        Georgia, known for its sulphuric baths. </p>
                    <p>Located at the eastern bank of the Mtkvari River at the foot of Narikala fort across Metekhisubani,
                        Abanotubani is an important historic part of the city: it is where according to a legend the King of
                        Iberia, Vakhtang Gorgasali’s falcon fell, leading to a discovery of the hot springs and,
                        subsequently, to founding of a new capital. </p>
                </div>
            </div>
            <div class="attractions-link">
                <p>Learn More</p>
                <img src="../assets/icons/long-arrow-right.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
@font-face {
    font-family: 'VAG Rounded';
    src: url(../assets/fonts/VAGRoundedRegular.ttf);
}

* {
    font-family: 'VAG Rounded';
}

.swiper-slide {
    width: 100px;
    height: 100px;
}

.reviews-wrapper {

    margin: 100px auto;
    text-align: center;
    width: 50%;
}

.review-text {
    margin: 10px auto 35px auto;
    width: 700px;
    font-size: 14px;
}

swiper-container {
    margin-top: 25px;

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
    box-shadow: 0px 0px 50px -3px rgba(0, 0, 0, 0.1);
    position: relative;
    margin: 50px 25px;
}

.room-img {
    width: 100%;
    object-fit: cover;

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

.price {
    display: inline-block;
}

.price-tag {
    font-size: 30px;
    color: #1E90FF;
}

.room-link {
    display: flex;
    align-items: center;
    position: absolute;
    margin-right: 20px;
    right: 0;
    bottom: 0;
    cursor: pointer;
    color: #1E90FF;
}

.link-icon {
    width: 10px;
}

.room-link img {
    margin-left: 10px;
    filter: invert(52%) sepia(43%) saturate(6048%) hue-rotate(193deg) brightness(102%) contrast(101%);
}

.room-link p {
    font-weight: 400;
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
    box-shadow: 0px 0px 50px -3px rgba(0, 0, 0, 0.1);
    position: relative;
}

.place-img {
    width: 80%;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
}

.text-div {
    width: 100%;
    text-align: center;
    height: 500px;
}

.text-div h2 {
    font-weight: 400;
    font-size: 32px;
    margin: 20px 0;
}

.text {
    text-align: justify;
    padding: 0 80px 0 80px;
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

.attractions-link img {
    margin-left: 10px;


}
</style>