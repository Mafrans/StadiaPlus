<template>
    <select ref="selectbox">
        <option v-for="(item, index) in items" :key="index" :value="item.value">
            {{ item.label }}
        </option>
    </select>
</template>

<script>
import { Select, SelectStyle } from '../../../ui/Select';
export default {
    props: ['placeholder', 'items', 'selectstyle'],
    mounted() {
        const select = new Select(
            this.$refs.selectbox,
            this.placeholder,
            this.selectstyle !== undefined ? this.selectstyle : SelectStyle.SLIMSELECT
        );
    },
};
</script>

<style></style>
