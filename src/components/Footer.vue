<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <Link
                            classItem="footer__item"
                            :link="links.footer.link"
                            :text="links.footer.text"
                        >
                            <img :src="require(`@/assets/logo/${links.footer.icon}`)" :alt="links.footer.icon">
                        </Link>

                        <Link
                            v-for="link in links.other"
                            :key="link.id"
                            classItem="footer__item"
                            :link="link.link"
                            :text="link.text"
                        />
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>

<script>
import Link from '@/components/Link';

    export default {
        components: {
            Link,
        },

        computed: {
            links() {
                return this.$store.getters['getFooterLinks'];
            }
        }

        // data() {
        //     return {
        //         links: {
        //             footer: {
        //                 id: 0,
        //                 link: '/',
        //                 icon: 'Logo_black.svg',
        //             },
        //             other: [
        //             {
        //                 id: 1,
        //                 text: 'Our coffee',
        //                 link: '/our-coffee',
        //             },
        //             {
        //                 id: 2,
        //                 text: 'For your pleasure',
        //                 link: '/goodspage',
        //             },
        //             {
        //                 id: 3,
        //                 text: 'Contact us',
        //                 link: '/contacts',
        //             },
        //         ]
        //         }
        //     }
        // }
    }
</script>