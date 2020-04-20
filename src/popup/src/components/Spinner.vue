<template>
    <div class="loader">
        <div v-for="i in 4" :key="i" :style="{'animation-delay': i * 0.125 + 's'}"></div>
    </div>
</template>

<script>
export default {
    props: [
        'color'
    ]
};
</script>

<style lang="scss" scoped>
.loader div {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px black solid;
    clip-path: inset(50% 50% 0% 0%);
    transform: rotate(0deg);
    box-sizing: border-box;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
