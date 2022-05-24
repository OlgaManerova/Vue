<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <Link
                classItem="header__item"
                :link="links.header.link"
                :text="links.header.text"
            >
                <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
            </Link>

            <Link
                v-for="link in links.other"
                :key="link.id"
                classItem="header__item"
                :link="link.link"
                :text="link.text"
            />
        </ul>
    </header>
</template>

<script>
import Link from '@/components/Link';

    export default {
        components: {
            Link,
        },

        data() {
            return {
                links: {
                    header: {
                        id: 0,
                        link: '/',
                        icon: 'Logo.svg',
                    },
                    other: [
                    {
                        id: 1,
                        text: 'Our coffee',
                        link: '/our-coffee',
                    },
                    {
                        id: 2,
                        text: 'For your pleasure',
                        link: '/goodspage',
                    },
                    {
                        id: 3,
                        text: 'Contact us',
                        link: '/contacts',
                    },
                ]
                }
            }
        }
    }
</script>