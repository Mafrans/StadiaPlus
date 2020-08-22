<template>
    <span class="material-icons" :class="{['type-' + type]: type != undefined}" v-on:click="click"><slot /></span>
</template>

<style lang="scss" scoped>

.type- {
    &inline {
        font-size: 1em;
        vertical-align: text-top;
    }
}

</style>

<script>
export default {
    methods: {
        click() {
            this.$emit('click');
        }
    },

    props: [
        'type'
    ]
}
</script>