<template>
    <router-link class="page-button" :to="destination">
        <icon v-if="previous" class="previous icon">navigate_previous</icon>

        <slot />

        <icon v-if="next" class="next icon">navigate_next</icon>
    </router-link>
</template>

<script>
import Icon from './Icon.vue';
export default {
    props: ['next', 'previous'],
    components: {
        Icon,
    },
    data() {
        return {
            destination: null,
        };
    },
    created() {
        this.destination = this.next
            ? this.next
            : this.previous
            ? this.previous
            : null;
    },
};
</script>

<style lang="scss" scoped>
.page-button {
    cursor: pointer;
    display: block;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    background: #F0F0F0;
    color: #505050;
    text-align: center;
    display: block;
    text-decoration: none;
    transition: filter 0.1s ease-out;

    .icon {
        vertical-align: text-top;
        font-size: 24px;
        margin-right: 0.25rem;
        margin-top: -4px;

        &.next {
            float: right;
        }

        &.previous {
            float: left;
        }
    }

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
}
</style>
