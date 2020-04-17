<template>
    <div class="heading">
        <div class="row">
            <div class="col">
                <h1><slot/></h1>
            </div>
            <div class="col">
                <div class="icon" v-on:click="iconClick">
                    <icon>{{ icon }}</icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    },
    props: [
        'icon'
    ],
    methods: {
        iconClick() {
            this.$emit('icon-click');
        }
    }
}
</script>

<style lang="scss" scoped>
.heading {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
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
    float: right;

    &>* {
        font-size: 30px;
    }
}
</style>