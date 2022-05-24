<template>
    <h1 :class="classItem">{{text}}</h1>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true,
            },
            classItem: {
                type: String,
            }
        }
    }
</script>