<template>
    <main>
        <div class="preview">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Header></Header>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <Heading
                            classItem="title-big"
                            :text="title[0].text"
                        />
                        <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
                        <div class="preview__subtitle">We makes every day full of energy and taste</div>
                        <div class="preview__subtitle">Want to try our beans?</div>
                        <a href="./coffeepage.html" class="preview__btn">More</a>
                    </div>
                </div>
            </div>
        </div>

        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="title">About Us</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br><br>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="best">
            <div class="container">
                <div class="title">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <Card
                                classItem="best__item"
                                :name="bestSellers[0].text"
                                :price="bestSellers[0].price"
                                :image="bestSellers[0].src"
                            />
                            <Card
                                classItem="best__item"
                                :name="bestSellers[1].text"
                                :price="bestSellers[1].price"
                                :image="bestSellers[1].src"
                            />
                            <Card
                                classItem="best__item"
                                :name="bestSellers[2].text"
                                :price="bestSellers[2].price"
                                :image="bestSellers[2].src"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import Header from '@/components/Header';
    import Card from '@/components/Card';
    import Heading from '@/components/Heading';

    export default {
        components: {
            Header,
            Card,
            Heading,
        },

        data() {
            return {
                bestSellers: [
                    {
                        id: 0,
                        src: 'coffee-1.jpg',
                        text: 'Карточка 1',
                        price: 100,
                    },
                    {
                        id: 1,
                        src: 'coffee-2.jpg',
                        text: 'Карточка 2',
                        price: 200,
                    },
                    {
                        id: 2,
                        src: 'coffee-3.jpg',
                        text: 'Карточка 3',
                        price: 300,
                    },
                ],

                title: [
                    {
                        text: 'Everything You Love About Coffee',
                    }
                ]
            }
        }
    }
</script>
