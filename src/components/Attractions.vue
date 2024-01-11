<script setup>
import { defineAsyncComponent, ref } from 'vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
const Dialog = defineAsyncComponent({
    loader: ()=> import('primevue/dialog')
})
const visible = ref(false)
const clcikedAttractionTitle = ref('')
const clickedAttractionFullDescription = ref({})
const clickedAttractionImg = ref('')
const clickedAttractionMapSrc = ref('')
function getClickedAttraction(item) {
    clcikedAttractionTitle.value = item.title
    clickedAttractionFullDescription.value = item.fullDescription
    clickedAttractionImg.value = item.img
    clickedAttractionMapSrc.value = item.mapSrc
    console.log(item)
    return item
}
const attractionList = [
    {
        title: "Museum of History of Georgian Jews ",
        img: "ქართულ-ებრაული-მუზეუმი.jpg",
        name: "Museum of History of Georgian Jews ",
        description: `The Museum is situated in the old side of Tbilisi.The building of the Museum, which beautifies Old
                        Tbilisi, erected in place of the former synagogue constructed in 1914 year.
                        
                        The Museum is a treasure-house of centuries-old history of the Jews life in Georgia and a unique
                        scientific center studying Georgian-Jewish relations.
                        `,
        fullDescription: {
            firstPart: "Museum of <strong>History of Jews of Georgia</strong> is a museum dedicated to the Jewish culture and history in Georgia. Museum was established in 1932, in a centrally located district of Tbilisi, the capital of Georgia. It is located in a 5-minute walk from the Liberty Square. Museum carries the name of David Baazov – famous early 20th-century Georgian-Jewish rabbi and a public figure.",
            secondPart: "Museum was closed in 1951, and re-opened in 1992. Since its establishment, museum operates in a dome-shaped synagogue building, on Anton Cathalicos Street, Tbilisi Historic District.",
            thirdPart: "Collection of the Museum of History of Jews of Georgia includes many manuscripts and archives, ethnographic, art and epigraphic rarities. Artifacts are gathered and exhibited around several important themes in the history of the Jewish communities of Georgia, such as the various immigration periods of the Jews in Georgia (since as early as the 8th century BC); various periods of Aliyah (return of the Jewish communities to the Land of Israel); way of life of Georgian Jews; ethnic, judicial, cultural and religious aspects of the Jews in Georgia; the role of Jews in the dissemination of Christianity in Georgia etc. Museum endorses the idea that through centuries the Georgian Jews have been living peacefully in Georgia, played important role in the history of the society, and that they managed to maintain their ancient way of life through centuries.",
            fourthPart: "<em>Address: #3 Anton Katalikosi St, Tbilisi, Georgia</em><br><em>Working hours: Every day, except Monday, 11:00 – 17:00</em><br><em>Ticket price: Adults – 5 GEL. Schoolchildren and students – 1 GEL</em>"
        },


        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.2380227256313!2d44.802914279345735!3d41.69379707809916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf03685bd87%3A0xcb2b210d6e986c9!2sMuseum%20of%20History%20of%20Georgian%20Jews!5e0!3m2!1sen!2sge!4v1702297842098!5m2!1sen!2sge"
    },
    {
        title: "Rezo Gabriadze Marionette Theatre",
        img: "რეზო-გაბრიაძის-თეატრი.jpg",
        description: `The theater was founded in 1981 by the Georgian director Rezo Gabriadze, and there is an inscription in gold on the building: “Extra Cepam Nihil Cogito Nos Lacrimare” (“Let our tears come only when cutting onions”).

The life of the theater begins with a story of eternal love - the first marionette show, called “Afred and Violetta”, can still be seen to this day. It is an artistic reimagining of Alexandre Dumas’ “La Dame aux Camelias” by Gabriadze.`,
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

        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.1497760905295!2d44.803990176792496!3d41.6957022768134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440ce51e44d209%3A0x2fb7924d31363498!2sGabriadze!5e0!3m2!1sen!2sge!4v1702297578214!5m2!1sen!2sge"
    },
    {
        title: "Abanotubani",
        img: "გოგირდის-აბანო.jpg",
        description: `Abanotubani (Georgian: აბანოთუბანი, literally "bath district") is the ancient district of Tbilisi,
                        Georgia, known for its sulphuric baths. 
                        
                        Located at the eastern bank of the Mtkvari River at the foot of Narikala fort across Metekhisubani,
                        Abanotubani is an important historic part of the city: it is where according to a legend the King of
                        Iberia, Vakhtang Gorgasali’s falcon fell, leading to a discovery of the hot springs and,
                        subsequently, to founding of a new capital. 
                    `,
        fullDescription: {
            placeWithAttendenceFee: {
                history: {
                    firstPart: "Abanotubani, literally meaning “bath district”, is an ancient part of Tbilisi, known for its famous brick houses and sulfur bathhouses.",
                    secondPart: "The origin of the bathhouse district dates back to when the city was founded and plays an important part in its history. According to the legend, when the falcon of King Vakhtang Gorgasali fell in one of the hot springs, the king decided to build the capital on top of the springs. As a result, Tbilisi earned its name (‘warm place’) from the very same hot springs that ran under the city, and which eventually became the foundation for the bathhouses.",
                    thirdPart: "Many of the bathhouses were inspired by traditional Persian-style baths, but the difference is that the water in Tbilisi is not manually heated. Instead, it comes from the ground and is naturally hot.",
                    fourthPart: "Many of the bathhouses were inspired by traditional Persian-style baths, but the difference is that the water in Tbilisi is not manually heated. Instead, it comes from the ground and is naturally hot.",
                    fifthPart: "The sulfur baths have long been very popular. Famous visitors in the past include the legendary Russian poet Alexander Pushkin who, upon his visit in 1829, complimented them, saying: “Not since I was born have I encountered the luxury of Tiflis’ baths.” And that is a really accurate way of summing them up.",
                    sixthPart: "Besides being incredibly relaxing, the bathhouses are also said to have countless health benefits. The sulfur in the water helps with dry skin, rashes, joint problems, acne and more.",
                },
                generalInformation: {
                    listItem1: "Prices typically are per hour and start from around 20 GEL (for public ones) and go up to 200 GEL (usually for the private/luxurious ones). Massages start at an extra 10 GEL per person. How much you end up paying depends completely on what you’re looking for. For a clean and a spacious room with some extra furniture, expect around 60-80 GEL.",
                    listItem2: "Most bathhouses offer two different types: public and private rooms, with the latter obviously more expensive.",
                    listItem3: "If you want to save money, you can bring your own towel, soap, shampoo and slippers.",
                    listItem4: "Inside the rooms you can be either naked or in your swimwear, whichever makes you more comfortable.",
                    listItem5: "Be sure to bring a bottle of cold water so you don’t become dehydrated since it’s really hot inside.",
                    listItem6: "Most bathhouses are open from 7 or 8am till until 12pm, while some private ones are open 24 hours.",
                    listItem7: "Most importantly, you should embrace the experience. It might seem awkward at first, but it makes for a very memorable experience with a healthy and a relaxing bath."
                }
            },
        },
        mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.461917990246!2d44.810145576792266!3d41.68896297723384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf79ef8ebfb%3A0xe332216273ed6402!2sAbanotubani!5e0!3m2!1sen!2sge!4v1702805761389!5m2!1sen!2sge" 
    },
    {
        title: "Opera and Ballet Theater of Tbilisi",
        img: "ოპერა.jpg",
        description: "The Georgian National Opera and Ballet Theater of Tbilisi, formerly known as the Tiflis Imperial Theater, is an opera house situated on Rustaveli Avenue in Tbilisi, Georgia. Founded in 1851, Tbilisi Opera is the main opera house of Georgia and one of the oldest such establishments in Eastern Europe.",
        fullDescription: {
            firstPart: "Opera and Ballet Theater of Tbilisi – In 1896 on the Golovin Prospect (now Rustaveli Avenue) the construction of the new Opera House, designed by the architect Victor Schröter, was finished. The new building was calculated to have a seating capacity of 1200 (the present building of the Opera Theatre). This so called Treasury Theatre was opened on November 3, 1896 with Glinka’s opera A Life for the Tzar.",
            secondPart: `These operas, from the very first performances have determined the national image of the Georgian Opera. Abesalom and Eteri by <a href="https://en.wikipedia.org/wiki/Zacharia_Paliashvili" target="_blank" rel="noopener">Zakaria Paliashvili</a> has traditionally been the opening performance of the season at the Tbilisi State Opera and Ballet Theatre.`,
            thirdPart: "Since 1937 the Opera theatre is named after the Georgian classicist and the greatest composer of all time, Zakaria Paliashvili.",
            fourthPart: "Since the 30’s of the 20th century Georgian operas were performed not only on the stage of the Tbilisi Opera, but also abroad (in Russia, Ukraine, Armenia, Azerbaijan, Poland, Germany, France, Bulgaria, Hungary, Czech Republic, and Slovakia). The Tbilisi opera and ballet companies had triumphant tours in a lot of countries, participated successfully in international festivals and forums. World famous opera singers, conductors, dancers have frequently been the welcome guests of the Tbilisi Theatre stage.",
            fifthPart: "At the beginning of the 70s the ballet company had a new artistic director – George Aleksidze, Fyodor Lopukhov’s student. Aleksidze brought new aesthetics to the theatre – neoclassical ballets became a part of the repertoire along with classical works. The company’s next artistic director through 1982-1985 was Mikhail Lavrovsky, the internationally known Bolshoi Theatre dancer and choreographer.",
            sixthPart: "The important episodes of the artistic biography of the famous Georgian conductor Djansugh Kakhidze are also connected to the Tbilisi Opera Theatre. He came there as a conductor in 1962; later he became a principal conductor (1965-68) and artistic director (1982-2002).",
            seventhPart: "After the fire in 1973 almost the whole interior of the building was destroyed – the very famous, stunning curtain by Sergo Kobuladze, costumes, stage properties, details, museum items, archive materials were burnt. In 1978, the theatre building was restored to its original form (architects: Leri Medzmariashvili, Murtaz Chachanidze). The authors of the reconstruction have succeeded in maintaining the Eastern, pseudo-Moorish style of the building. Six rehearsal halls were made (three of them – for ballet, two – for opera and one – for orchestra). In the foyer of the Theatre, three remarkable halls, the so-called Red Hall, Mirror/Blue Halls, hosted vocal and chamber concerts, exhibitions and meetings of various kinds.",
            eighthPart: "In 1986-2004 the general manager of the theatre was Zurab Lomidze, who was followed by the director David Sakvarelidze (2004-2012); the conductor Giorgi Zhordania (General Manager) and Giorgi Kiladze (director of the theatre) were the heads of the theatre after him.",
            ninthPart: "Since November 14, 2016, Badri Maysuradze (Tenor) has been the artistic director and the general manager of the theatre.",
            tenthPart: "Since 2004, an outstanding ballerina, Nina Ananiashvili has been the artistic director of the State Ballet of Georgia. The repertoire now includes ballets by Balanchine, Ashton, Bournonville, Kylián, as well as works of contemporary choreographers, well known choreographers and ballet masters like Mikhail Lavrovsky, Frank Andersen, Alexander Grant, Bart Cook, Denis Bonner, Margaret Barbieri, Trey McIntyre, Alexei Fadeyechev, Yuri Possokhov, Ben Stevenson, Nancy Euverink, Ken Ossola, Patrick Delcroix, Brigitte Martin work with the company; costumes and scenery are prepared by Alexandre Vassiliev, Vyacheslav Okunev, David Monavardisashvili; performances in Tbilisi are often conducted by Sergei Stadler, Alexander Sotnikov, Robert Cole; actors who perform alongside the State Ballet of Georgia include Ángel Corella, Andrei Uvarov, Sergei Filin, Igor Zelensky, Irma Nioradze, Tamara Rojo, David Makhateli, Maia Makhateli, Elena Glurjidze, etc.",
            eleventhPart: "The huge international project of repairing the theatre building started in 2010 (architect Leri Medzmariashvili). Apart from the international foundation Kartu, which was the major sponsor, some other foreign companies (Gerriets and Salzbrenner Media, Germany; Wagner, Austria; Svetlost, Serbia) also took part in the process.",
            twelthPart: "The foundation was strengthened, the roof was covered with copper sheets. The painting of the theatre interior, stage mechanism, the material and technical equipment of the theatre was renewed. The orchestra pit became larger, Djansug Kakhidze rehearsal hall was rebuilt, open verandas and a space for exhibitions were added.",
            thirteenthPart: "After 5 years of the renovation, the whole Georgia, as well as 700 members of the staff with their Artistic Director of the Theatre celebrated a grandiose re-opening of the theatre.",
            fourteenthPart: "The Theatre is a member of Opera Europa.",
            fifteenthPart: "Tbilisi Z. Paliashvili Opera and Ballet State Theatre is part of the European Route of Historic Theatres."
        },
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5958.237684481512!2d44.796084558691426!3d41.69637010562345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cdda1d2d4d7%3A0xe30fd49502a2dd79!2sOpera%20and%20Ballet%20Theater%20of%20Tbilisi!5e0!3m2!1sen!2sge!4v1702337974489!5m2!1sen!2sge"
    },
    {
        title: "The Great Synagogue",
        img: "დიდი-სინაგოგა.jpg",
        description: `The red-brick, two-story building of the Great Synagogue faces Jerusalem (south) according to Jewish tradition.
                    In 2009, the building was reconstructed. The restored synagogue consists of prayer and celebration halls, as well as the traditional women's gallery.
                    In the center of the prayer hall is the "Teba" where the praying rabbi stands during prayer, and on the opposite side of the entrance is the almost-150-year-old Aron-Hakodesh, the place where the Torah  is kept.
                    The Great Synagogue of Tbilisi is a notable tourist attraction with about 1000 visitors per day.`,
        fullDescription: {
            firstPart: 'The great Synagogue of Tbilisi is located on Kote Abkhazi Street in Tbilisi. It was built in 1910. In 1909, the newspaper "Droeba" informs us: "Georgian Jews find it very difficult to finish their chapel in Tbilisi, because a lot of money is needed for such a huge building. The building is beautiful and noteworthy. The building is finished from the outside. Only the internal area isn’t fully done. They also have to build a school and Georgian Jews expect help from their believers. This great building was built entirely with the contribution of Georgian Jews. European or Russian Jews don’t have any connection with Georgian Jews. The Jews who arrived here have two synagogues in Tbilisi, but Georgian Jews are still building their own synagogue.”',
            secondPart: "The building is oriented longitudinal axis towards Jerusalem. It is rectangular in plan and built of red brick. The two-storey building stands on difficult terrain. The ground floor of the synagogue is divided into four structural parts. The front space is a hall, with a chapel on the right and a three-story staircase on the left, which connects to the chapel hall of the first floor. The other three structural parts are united by a chapel hall with two arched constructions. Between the arches, in the center of the hall, stands Thebes, and on the opposite side of the entrance, there is the Aron-Hakodesh(all synagogues have a large cupboard facing Jerusalem called the Aron hakodesh, which is a symbol of the Ark of the Covenant). The location of Aaron-Hakodesh and Thebes is similar to the lower chapel. The arch structure has been changed on the first floor, with two pairs of columns erecting on the extension of their pillars. The interiors of both halls are painted. The themes of the painting are the variations of plant motifs and ornaments. The writings have an interesting artistic role in all this harmony. Texts are used in synthesis with wall painting. Both halls in Thebes and Aaron-Hakode are made of wood and decorated with difficult profiles and ornamental processing. The skillfully created hekhal blue curtain is noteworthy with the image of lions embroidered with gold thread."
        },
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5958.324935209351!2d44.79642805869139!3d41.69542827803673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404474bdbd4e82dd%3A0x799f3c2651d373f2!2sGreat%20Synagogue!5e0!3m2!1sen!2sge!4v1702339179067!5m2!1sen!2sge"
    },
    {
        title: "Bridge of Peace",
        img: "მშვიდობის-ხიდი.jpg",
        description: "The Bridge of Peace is a bow-shaped pedestrian bridge, a steel and glass construction illuminated with numerous LEDs, over the Kura River, linking the Rike Park with Old town in central Tbilisi.",
        fullDescription: {
            firstPart: "The Peace Bridge is located on the Mtkvari River in Tbilisi, between the Metekhi and Baratashvili Bridges. It connects Erekle II Street and Rike. The Peace Bridge has become one of the symbols of renewed Tbilisi. It was officially opened on May 6, 2010. The architect of the bridge is Michele de Luca (he is also the architect of the MIA building and the Presidential Palace), and the lighting designer is Philippe Martino (he owns the lighting design for the MIA building, the Presidential Palace and the TV tower). This glass bridge is especially beautiful at night when the lights are reflected in the water. Near the Peace Bridge is Rike Park, which is well-appointed, with amusement parks and perfect for walking and unwinding. From here you can also visit the Narikala by cable car and enjoy the wonderful views of the city from above. Narikala Fortress, Tbilisi Tower and the Presidential Palace are perfectly visible from the bridge. The Peace Bridge is one of the most popular places in Tbilisi. The modern design bridge brings eclecticism to the environment of old Tbilisi. ",
            secondPart: "As for the architecture of the bridge, it is a construction of steel frame and glass panels. The glass panels together form an awning with an area of ​​150 square meters, which closes the footpath. The whole structure is supported by 4 strong steel columns, and the path is hung on the frame with ropes. Its length is 156 meters. Up to 50,000 light bulbs provide special variable lighting at night. According to the official information, the total cost of the bridge (without the Rike project) was 12.5 million GEL, which was allocated by the city budget. Architecturally, the Peace Bridge is an example of modern architecture, which is a novelty for the territory of old Tbilisi."
        },
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11917.10391601968!2d44.808333!3d41.6929776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cfa8ef08685%3A0xd34052e2ec5319f9!2sBridge%20of%20Peace!5e0!3m2!1sen!2sge!4v1702398749032!5m2!1sen!2sge"
    }
]
</script>
<template>
    <Header />
    <main>
        <div class="attractions-hero">
            <h1 class="attraction-hero-title">Attractions</h1>
        </div>
        <div class="attractions-wrapper">
            <h2>Take a look at places near the hotel</h2>
            <div class="attractions-subwrapper">
                <div class="attraction" v-for="attraction in attractionList">
                    <img :src="attraction.img" alt="">
                    <h2>{{ attraction.title }}</h2>
                    <p>{{ attraction.description }}</p>
                    <div class="attractions-link" @click="visible = !visible, getClickedAttraction(attraction)">
                        <p id="attraction-link-title">Learn More</p>
                        <img id="attraction-arrow-link" src="/long-arrow-right.jpg" alt="">
                    </div>
                    <Dialog v-model:visible="visible" :modal="true" closable="true" dismissableMask="true">
                        <template #container>
                            <div class="clicked-attraction">
                                <img class="header-img" :src="clickedAttractionImg" alt="">
                                <h2 class="header-title">{{ clcikedAttractionTitle }}</h2>
                                <div class="clicked-attraction-description">
                                    <p v-html="clickedAttractionFullDescription.firstPart"></p>
                                    <p v-html="clickedAttractionFullDescription.secondPart"></p>
                                    <p v-html="clickedAttractionFullDescription.thirdPart"
                                        v-if="clickedAttractionFullDescription">
                                    </p>
                                    <p v-html="clickedAttractionFullDescription.fourthPart"
                                        v-if="clickedAttractionFullDescription.fourthPart"></p>
                                    <p v-html="clickedAttractionFullDescription.fifthPart"
                                        v-if="clickedAttractionFullDescription.fifthPart"></p>
                                    <p v-html="clickedAttractionFullDescription.sixthPart"
                                        v-if="clickedAttractionFullDescription.sixthPart"></p>
                                    <p v-html="clickedAttractionFullDescription.seventhPart"
                                        v-if="clickedAttractionFullDescription.seventhPart"></p>
                                    <p v-html="clickedAttractionFullDescription.eighthPart"
                                        v-if="clickedAttractionFullDescription.eighthPart"></p>
                                    <p v-html="clickedAttractionFullDescription.ninthPart"
                                        v-if="clickedAttractionFullDescription.ninthPart"></p>
                                    <p v-html="clickedAttractionFullDescription.tenthPart"
                                        v-if="clickedAttractionFullDescription.tenthPart"></p>
                                    <div class="place-with-history-wrapper" v-if="clickedAttractionFullDescription.placeWithAttendenceFee">
                                        <h2>History:</h2>
                                        <p v-html="clickedAttractionFullDescription.placeWithAttendenceFee.history.firstPart"></p>
                                        <p v-html="clickedAttractionFullDescription.placeWithAttendenceFee.history.secondPart"></p>
                                        <p v-html="clickedAttractionFullDescription.placeWithAttendenceFee.history.thirdPart"></p>
                                        <p v-html="clickedAttractionFullDescription.placeWithAttendenceFee.history.fourthPart"></p>
                                        <p v-html="clickedAttractionFullDescription.placeWithAttendenceFee.history.fifthPart"></p>
                                        <p v-html="clickedAttractionFullDescription.placeWithAttendenceFee.history.sixthPart"></p>
                                    </div>
                                    <div class="general-information" v-if="clickedAttractionFullDescription.placeWithAttendenceFee">
                                        <h2>General information and what to expect:</h2>
                                        <ol>
                                            <li>{{ clickedAttractionFullDescription.placeWithAttendenceFee.generalInformation.listItem1 }}</li>
                                            <li>{{ clickedAttractionFullDescription.placeWithAttendenceFee.generalInformation.listItem2 }}</li>
                                            <li>{{ clickedAttractionFullDescription.placeWithAttendenceFee.generalInformation.listItem3 }}</li>
                                            <li>{{ clickedAttractionFullDescription.placeWithAttendenceFee.generalInformation.listItem4 }}</li>
                                            <li>{{ clickedAttractionFullDescription.placeWithAttendenceFee.generalInformation.listItem5 }}</li>
                                            <li>{{ clickedAttractionFullDescription.placeWithAttendenceFee.generalInformation.listItem6 }}</li>
                                            <li>{{ clickedAttractionFullDescription.placeWithAttendenceFee.generalInformation.listItem7 }}</li>
                                        </ol>
                                    </div>
                                    <iframe class="map" :src="clickedAttractionMapSrc" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div class="close-icon" @click="visible = false">
                                    <img src="/xmark-solid.svg" alt="">
                                </div>
                            </div>
                        </template>
                    </Dialog>
                </div>

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

.attractions-hero {
    height: 100vh;
    background: url(თბილისი-ღამე.jpg) no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.attractions-hero::before {
    background-color: rgba(0, 0, 0, 0.400);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
}

.attraction-hero-title {
    z-index: 1;

}

.attractions-wrapper {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 100px;
}

.attractions-subwrapper {
    margin-top: 50px;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
}

.attraction {
    width: 450px;
    position: relative;
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.12);
    margin: 20px 15px;
    padding-bottom: 60px;
    border-top-style: none;
    border-radius: 5px;
}

.attraction img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
}

.attraction h2 {
    font-size: 21px;
    font-weight: 500;
    margin-top: 20px;
}

.attraction p {
    padding: 20px 50px 20px 30px;
    font-size: 17px;
    text-align: justify;

}

.attractions-link {
    position: absolute;
    bottom: 0;
    right: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.attractions-link:hover {
    border-bottom: 2px solid black;
}

#attraction-arrow-link {
    width: 50px;
    margin-left: 20px;
    height: auto;
}

#attraction-link-title {
    padding: 0;
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
    filter: brightness(0.60)
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

.close-icon:hover {
    background-color: black;
    transition: .3s;
}

.close-icon img {
    filter: invert(99%) sepia(0%) saturate(7496%) hue-rotate(263deg) brightness(105%) contrast(106%);

}
.general-information{
    padding: 20px 30px;
}
.general-information ol{
    padding-top: 10px;
}

.general-information ol li{
    padding-top: 10px;
}
.general-information h2{
    font-size: 18px;
    font-weight: 500;
    padding-left: 35px;
}
.map{
    margin-top: 50px;
}
.place-with-history-wrapper{
    padding: 0 20px;
   
}
.place-with-history-wrapper h2{
    font-size: 18px;
    font-weight: 500;
    padding-left: 35px;
}
.place-with-history-wrapper p{
    text-align: justify;
}

@media (max-width: 900px) and (min-width: 100px) {
    .clicked-attraction {
        width: 95vw;
    }

    .clicked-attraction-description p {
        padding: 0 5vw;
    }

    .header-title {
        font-size: 22px;
    }
}</style>
