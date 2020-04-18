<template>
    <span class="material-icons" v-on:click="click"><slot /></span>
</template>

<script>
export default {
    methods: {
        click() {
            this.$emit('click');
        }
    }
}
</script>