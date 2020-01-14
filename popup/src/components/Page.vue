<template>
    <div class="page">
        <h1><i v-if="icon" class="material-icons">{{icon}}</i>{{title}}</h1>
        <hr>

        <slot />
    </div>
</template>

<script>
export default {
    name: "Page",
    props: [
        "title",
        "icon"
    ]
}
</script>

<style scoped>
    .page {
        padding: 0.5rem;
    }

    .material-icons {
        font-size: 36px;
        vertical-align: text-bottom;
    }

    hr {
        margin: 0.5rem 0;
    }
</style>