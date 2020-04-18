<template>
    <select ref="selectbox">
        <option v-for="(item, index) in items" :key="index" :value="item.value">
            {{ item.label }}
        </option>
    </select>
</template>

<script>
import { Select, SelectStyle } from '../../../ui/Select';
import { Language } from '../../../Language';
export default {
    props: ['placeholder', 'items', 'selectstyle', 'selected'],
    mounted() {
        const select = new Select(this.$refs.selectbox, {
            placeholder: this.placeholder,
            style:
                this.selectstyle !== undefined
                    ? this.selectstyle
                    : SelectStyle.SLIMSELECT,
            onChange: (info) => { this.$emit('change', info) },
            beforeChange: (info) => { this.$emit('before-change', info) },
        });

        if(this.selected !== undefined) {
            select.set(this.selected.tag);
        }
    },
};
</script>

<style></style>
