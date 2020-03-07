<template>
    <div class="page" :style="{'background': background}">
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
        "icon",
        "background"
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
        border: none;
        border-bottom: 1px solid rgba(255,255,255,0.25);
        margin: 0.5rem 0;
    }
</style>