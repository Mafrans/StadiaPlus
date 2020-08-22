<template>
    <div class="button" :class="{ gradient }" v-on:click="click">
        <slot />
    </div>
</template>

<script>
export default {
    props: [
        'gradient'
    ],
    methods: {
        click() {
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    cursor: pointer;
    display: block;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    background: #F0F0F0;
    color: #505050;
    font-weight: 400;
    text-align: center;
    display: block;
    text-decoration: none;
    transition: filter 0.1s ease-out;

    &:active {
        filter: brightness(0.925);
        transition: filter 0s linear;
    }

    &[disabled] {
        opacity: 0.7;
        pointer-events: none;
        cursor: initial;
    }

    &.gradient {
        background: linear-gradient(90deg, #FA4821 0%, #AE0F56 100%);
        color: #ffffff;
    }

    .material-icons {
        vertical-align: text-top;
        font-size: 18px;
        margin-right: 0.25rem;
    }
}
</style>