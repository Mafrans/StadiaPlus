<template>
    <div class="heading">
        <icon v-if="backButton" class="back-button" v-on:click="back">arrow_back</icon>
        <img v-else :src="img" alt="Header image">

        <h1><slot/></h1>
        
        <icon class="icon" v-on:click="iconClick">{{ icon }}</icon>
    </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    },
    props: [
        'icon',
        'img',
        'back-button'
    ],
    methods: {
        iconClick() {
            this.$emit('icon-click');
        },
        back() {
            console.log('go back!')
            this.$router.go(-1);
        },
    }
}
</script>

<style lang="scss" scoped>
.heading {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
}

.back-button {
    padding: 4px;
    margin-right: 4px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background: rgba(0, 0, 0, 0.06);
    }
}

h1 {
    margin-bottom: 0;
    color: #585858;
    font-weight: 500;
    font-size: 24px;
}

.icon {
    cursor: pointer;
    color: #585858;
    margin-left: auto;
    font-size: 30px;
    vertical-align: text-top;
}

img {
    height: 29px;
    margin-right: 0.5rem;
}
</style>