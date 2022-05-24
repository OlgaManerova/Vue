<template>
    <li :class="classItem">
        <router-link :to="link">
            {{text}}
            <slot></slot>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: {
            link: {
                type: String,
                required: true,
            },
            text: {
                type: String,
            },
            classItem: {
                type: String,
            }
        }
    }
</script>