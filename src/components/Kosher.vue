<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Button from 'primevue/button';
const kosherFoodContent = [
  {
    title: "Khinkali",
    img: "khinkali.jpg",
    firstPart:
      "These dumplings, which can be filled with meat or cheese, are one of the most popular dishes in the country of Georgia or ",
    secondPart:
      "Sakartvelo. They were also one of our favorites when we were lucky enough to visit the country a few years ago. Traditionally, the",
    thirdPart:
      "dumplings are eaten by hand, holding the top knot of the pleat. The knot is then left on the plate, so the restaurant can count them",
    fourthPart:
      "and know for how many dumplings to charge you. This recipe uses ground beef, but you may substitute ground pork or lamb, or with crumbly farm cheese.",
  },
  {
    title: "Kharcho",
    img: "ხარჩო.jpg",
    firstPart:
      "Kharcho is a hearty Georgian soup featuring beef or chicken, walnuts, and rice. It is traditionally seasoned with a Georgian spice blend called khmeli suneli (a combination of dried blue fenugreek, marigold petals, basil, parsley, fennel, coriander, bay leaves, and red pepper) and tkemali plum sauce.",
    secondPart:
      "The soup is so popular that almost every family has their own variation and recipe. It is recommended to serve kharcho hot and garnish it with freshly chopped coriander.",
  },
  {
    title: "Israeli Couscous",
    img: "IsraeliCouscous.jpg",
    firstPart:
      "Contrary to popular belief, couscous is neither a grain nor a seed; it’s a form of pasta made from a dry mixture of semolina and water that’s rolled in very tiny irregular pieces. When couscous was made daily by hand, a bowl of semolina was mixed and tossed while water was gradually added and rubbed into the mixture. Traditionally handmade couscous is steamed in a pot called a couscoussier and takes three individual steamings to cook. This type of couscous is Moroccan couscous, named for where it originated. It is the tiniest form of couscous and is what most people think of as couscous. In the U.S., Moroccan-style couscous is manufactured, pre-steamed, dried and packaged in handy four-portion-sized boxes available everywhere. All we have to do is pour the right amount of boiling water over it, cover it, come back 5 minutes later and it’s ready to eat. Cooks who lived 300 years ago would be envious.",
    secondPart:
      "Couscous is a starch, and as such, is often the main portion of most meals in North African cultures where meat is scarce. Like rice, couscous is a blank canvas that can take on any flavors you want to add. Mixing it up and creating something new is what being inspired by cooking and ingredients is all about. The 5-minute cook time for couscous gives you extra minutes to concentrate on what amazing flavor combos you’ll be adding.",
    thirdPart:
      "Israeli couscous is made from the same semolina flour that Moroccan couscous is, but the balls of dough are larger and more consistently round. Israeli couscous is technically a pasta, so it’s cooked in excess amounts of salted water just like pasta and it takes eight to ten minutes to cook. Israeli couscous was invented in Israel in the 1950’s when grains were scarce and the government needed to feed the masses of immigrants arriving daily.",
  },
];
</script>
<template>
  <Header />
  <main>
    <div class="kosher-hero-wrapper">
      <h1>Our Kosher menu</h1>
    </div>
    <div class="kosher-menu-wrapper">
      <h1 class="kosher-menu-wrapper-title">
        Take a look at our delicious food
      </h1>
      <div class="kosher-menu" v-for="item in kosherFoodContent">
        <img class="kosher-menu-img" :src="item.img" alt="" />
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
        <Button
          as="a"
          label="Download our
                    menu"
          href="Kitchen-Menu-Tourfa.docx"
          target="_blank"
          rel="noopener"
        />
        <!-- <a href="Kitchen-Menu-Tourfa.docx" target="_blank" rel="noopener noreferrer">Download our
                    menu</a> -->
      </div>
    </div>
  </main>
  <Footer />
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

* {
  font-family: "Montserrat", sans-serif;
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
  height: 90vh;
  color: white;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.kosher-hero-wrapper::before {
  background-color: rgba(0, 0, 0, 0.452);
  content: "";
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
}

.kosher-menu-img {
  width: 100%;
  object-fit: cover;
  
  border-radius: 5px 0 0 5px;
  aspect-ratio: 4/3;
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
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}

.kosher-menu-download-subwrapper {
  z-index: 1;
  cursor: pointer;
  
}

.kosher-menu-download-subwrapper .p-button {
  text-decoration: none;
  border-radius: 5px;
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

@media (max-width: 912px) and (min-width: 100px) {
  .kosher-menu {
    flex-direction: column;
  }
  .kosher-menu-img {
    width: 100%;
  }
  .kosher-menu-wrapper-title {
    font-size: 18px;
    text-align: center;
  }

  .kosher-menu-download-wrapper {
    width: 100vw;
    border-radius: 0;
  }
  .kosher-hero-wrapper h1 {
    font-size: 22px;
  }
  .kosher-menu .text {
    font-size: 14px;
  }
  .text-div h2 {
    font-size: 22px;
  }

  .text-div {
    padding-bottom: 30px;
  }
}
</style>
