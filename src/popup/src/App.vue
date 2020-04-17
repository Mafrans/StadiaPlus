<template>
    <div id="app">
        <main-page />
        <select-box :items="items" :placeholder="items[0].value" :selectstyle="selectStyle" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MainPage from './MainPage.vue';
import SelectBox from './components/SelectBox.vue';
import { SelectStyle } from '../../ui/Select';
import '../public/normalize.css';
import '../public/skeleton.css';

export default {
    name: 'App',
    data() {
        return {
            selectStyle: SelectStyle.SLIMSELECT_LARGE,
            items: [
                {
                    value: 't1',
                    label: 'Test 1',
                },
                {
                    value: 't2',
                    label: 'Test 2',
                },
                {
                    value: 't3',
                    label: 'Test 3',
                },
                {
                    value: 't4',
                    label: 'Test 4',
                },
            ],
        };
    },
    components: {
        HelloWorld,
        SelectBox,
        MainPage,
    },
};
</script>

<style>
#app {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    width: 340px;
    height: 425px;
}
</style>
