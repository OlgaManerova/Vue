<template>
    <div class="wrapper">
        <router-view></router-view>

        <Footer></Footer>
    </div>
</template>

<script>
import HeroView from '@/views/HeroView';
import Footer from '@/components/Footer';

export default {
    components: {
        HeroView,
        Footer,
    }
}
</script>


<style>

</style>
