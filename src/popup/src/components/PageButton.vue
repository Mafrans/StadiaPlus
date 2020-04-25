<template>
    <router-link :to="destination">
        <div class="page-button">
            <icon v-if="previous" class="previous icon">navigate_previous</icon>

            <slot />

            <icon v-if="next" class="next icon">navigate_next</icon>
        </div>
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
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        color: #000000;
        padding: 2px;
        font-size: 24px;
        border-radius: 50%;
    }
}
</style>
