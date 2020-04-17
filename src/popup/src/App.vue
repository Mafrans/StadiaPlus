<template>
    <div id="app">
        <main-page />
        <!-- <select-box :items="items" :placeholder="items[0].value" :selectstyle="selectStyle" /> -->
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MainPage from './MainPage.vue';
import SelectBox from './components/SelectBox.vue';
import { SelectStyle } from '../../ui/Select';

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
* {
    margin: 0;
    padding: 0;
}

#app {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    width: 340px;
    height: 425px;
}

h1, h2, h3, h4, h5, p {
    margin-bottom: 1.5rem;
}

hr {
    margin: 1rem 0;
    border: none;
    border-bottom: 2px solid #F0F0F0;
}

.row {
    display: flex;
    margin: 0 -0.5rem;
}

.col {
    margin: 0 0.5rem;
    width: 100%;
}
</style>
