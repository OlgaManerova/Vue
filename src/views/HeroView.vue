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
                        <a
                            href="./coffeepage.html"
                            class="preview__btn"
                            @click.prevent="smoothScroll"
                        >
                            More
                        </a>
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
        <section class="best" ref="best">
            <div class="container">
                <div class="title">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <Card
                                v-for="bestSeller in bestSellers"
                                :key="bestSeller.id"
                                classItem="best__item"
                                :name="bestSeller.text"
                                :price="bestSeller.price"
                                :image="bestSeller.src"
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

import { polyfill } from "seamless-scroll-polyfill";

export default {
    components: {
        Header,
        Card,
        Heading,
    },

    data() {
        return {
            title: [
                {
                    text: 'Everything You Love About Coffee',
                }
            ]
        }
    },

    computed: {
        bestSellers() {
            return this.$store.getters['getBestSellers'];
        }
    },

    methods: {
        smoothScroll() {
            this.$refs.best.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })

            // scrollIntoView(this.$refs.best, {
            //     behavior: "smooth", 
            //     block: "start", 
            // });

            //https://www.npmjs.com/package/seamless-scroll-polyfill
            //скролл для макбуков и айфонов
        }
    },
}
</script>
