<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <Header></Header>
                    </div>
                </div>

                <Heading
                    classItem="title-big"
                    :text="title[0].text"
                />
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div class="line"></div>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <Card
                                classItem="shop__item"
                                :name="goods[0].text"
                                :price="goods[0].price"
                                :image="goods[0].src"
                            />
                            <Card
                                classItem="shop__item"
                                :name="goods[1].text"
                                :price="goods[1].price"
                                :image="goods[1].src"
                            />
                            <Card
                                classItem="shop__item"
                                :name="goods[2].text"
                                :price="goods[2].price"
                                :image="goods[2].src"
                            />
                            <Card
                                classItem="shop__item"
                                :name="goods[3].text"
                                :price="goods[3].price"
                                :image="goods[3].src"
                            />
                            <Card
                                classItem="shop__item"
                                :name="goods[4].text"
                                :price="goods[4].price"
                                :image="goods[4].src"
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
                goods: [
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
                    {
                        id: 3,
                        src: 'coffee-1.jpg',
                        text: 'Карточка 4',
                        price: 400,
                    },
                    {
                        id: 4,
                        src: 'coffee-2.jpg',
                        text: 'Карточка 5',
                        price: 500,
                    },
                    {
                        id: 5,
                        src: 'coffee-3.jpg',
                        text: 'Карточка 6',
                        price: 600,
                    },
                ],

                title: [
                    {
                        text: 'For your pleasure',
                    }
                ]
            }
        }
    }
</script>