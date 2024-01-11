<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
const kosherFoodContent = [
    {
        title: "Khinkali",
        img: "khinkali.jpg",
        firstPart: "These delicious Georgian dumplings known as khinkali are considered to be one of the national dishes of the country. The dumplings are filled with meat and spices, then traditionally twisted into a knot at the top. Regional differences influence the fillings and every part of Georgia has their distinctive variety.",
        secondPart: "For example, in the mountainous regions, the most traditional filling is lamb, however; the most frequent variety throughout entire Georgia is a mixture of pork and beef. The vegetarian versions made with traditional Imeretian cheese or mushrooms are also quite popular.",
        thirdPart: "The traditional recipe was developed over time, and now includes fresh herbs such as cilantro or parsley. The meat for khinkali is never precooked – therefore, all of the juices are tucked inside the dumplings. Eating khinkali is also a part of traditional Georgian folklore: the top, where the dough is twisted into a knot, should never be eaten because it serves as a handle to hold the dumpling, and it is usually left on the plate as an indication of how many dumplings have been eaten.",
        fourthPart: "These flavorful dumplings are served plain or paired with freshly ground black pepper."
    },
    {
        title: "Kharcho",
        img: "ხარჩო.jpg",
        firstPart: "Kharcho is a hearty Georgian soup featuring beef or chicken, walnuts, and rice. It is traditionally seasoned with a Georgian spice blend called khmeli suneli (a combination of dried blue fenugreek, marigold petals, basil, parsley, fennel, coriander, bay leaves, and red pepper) and tkemali plum sauce.",
        secondPart: "The soup is so popular that almost every family has their own variation and recipe. It is recommended to serve kharcho hot and garnish it with freshly chopped coriander."
    },
    {
        title: "Israeli Couscous",
        img: "IsraeliCouscous.jpg",
        firstPart: "Contrary to popular belief, couscous is neither a grain nor a seed; it’s a form of pasta made from a dry mixture of semolina and water that’s rolled in very tiny irregular pieces. When couscous was made daily by hand, a bowl of semolina was mixed and tossed while water was gradually added and rubbed into the mixture. Traditionally handmade couscous is steamed in a pot called a couscoussier and takes three individual steamings to cook. This type of couscous is Moroccan couscous, named for where it originated. It is the tiniest form of couscous and is what most people think of as couscous. In the U.S., Moroccan-style couscous is manufactured, pre-steamed, dried and packaged in handy four-portion-sized boxes available everywhere. All we have to do is pour the right amount of boiling water over it, cover it, come back 5 minutes later and it’s ready to eat. Cooks who lived 300 years ago would be envious.",
        secondPart: "Couscous is a starch, and as such, is often the main portion of most meals in North African cultures where meat is scarce. Like rice, couscous is a blank canvas that can take on any flavors you want to add. Mixing it up and creating something new is what being inspired by cooking and ingredients is all about. The 5-minute cook time for couscous gives you extra minutes to concentrate on what amazing flavor combos you’ll be adding.",
        thirdPart: "Israeli couscous is made from the same semolina flour that Moroccan couscous is, but the balls of dough are larger and more consistently round. Israeli couscous is technically a pasta, so it’s cooked in excess amounts of salted water just like pasta and it takes eight to ten minutes to cook. Israeli couscous was invented in Israel in the 1950’s when grains were scarce and the government needed to feed the masses of immigrants arriving daily."
    }
]
</script>
<template>
    <Header />
    <main>
        <div class="kosher-hero-wrapper">
            <h1>Our Kosher menu</h1>
        </div>
        <div class="kosher-menu-wrapper">
            <h1 class="kosher-menu-wrapper-title">Take a look at our delicious food</h1>
            <div class="kosher-menu" v-for="item in kosherFoodContent">
                <img class="kosher-menu-img" :src="item.img" alt="">
                <div class="text-div">
                    <h2>{{ item.title }}</h2>
                    <div class="text">
                        <p>{{ item.firstPart }}</p>
                        <p>{{ item.secondPart }}</p>
                        <p v-if="item.thirdPart">{{ item.thirdPart }}</p>
                        <p v-if="item.fourthPart">{{ item.fourthPart }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="kosher-menu-download-wrapper">
            <div class="kosher-menu-download-subwrapper">
                <a href="Kitchen-Menu-Tourfa.docx" target="_blank" rel="noopener noreferrer" class="p-button">Download our
                    menu</a>
            </div>
        </div>
    </main>
    <Footer />
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}

.kosher-menu {
    margin-top: 50px;
    display: flex;
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
    position: relative;
    border-radius: 5px;
}

.kosher-hero-wrapper {
    background: url(/kosher-hero.jpg) no-repeat center center/cover;
    height: 100vh;
    color: white;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.kosher-hero-wrapper::before {
    background-color: rgba(0, 0, 0, 0.452);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}

.kosher-hero-wrapper h1 {
    z-index: 1;
}

.kosher-menu-wrapper {
    width: 80%;
    margin: 100px auto;
}

.kosher-menu-wrapper-title {
    text-align: center;
}

.kosher-menu-img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
}

.kosher-menu-download-wrapper {
    background: url(/dining.jpg) no-repeat center center/cover;
    width: 80vw;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 0 auto;
    position: relative;
    z-index: 0;
    margin-bottom: 100px;

}

.kosher-menu-download-wrapper::before {
    background-color: rgba(0, 0, 0, 0.452);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}

.kosher-menu-download-subwrapper {
    z-index: 1;
}

.kosher-menu-download-subwrapper a {
    text-decoration: none;
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
    font-size: 28px;
    margin: 25px 0;
}

@media (max-width: 900px) and (min-width: 100px) {
    .kosher-menu {
        flex-direction: column;
    }

    .kosher-menu-wrapper-title {
        font-size: 25px;
    }

    .kosher-menu-download-wrapper {
        width: 100vw;
        border-radius: 0;
    }

    .text-div h2 {
        font-size: 22px;
    }

    .text-div {
        padding-bottom: 30px;
    }
}</style>