<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="child-view" />
        </transition>
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
            transitionName: 'slide-left',
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
    watch: {
        '$route'(to, from) {
            const toDepth = to.path.split('/').filter(e => e !== "").length;
            const fromDepth = from.path.split('/').filter(e => e !== "").length;
            this.transitionName =
                toDepth < fromDepth ? 'slide-right' : 'slide-left';
        },
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

h1,
h2,
h3,
h4,
h5,
p {
    margin-bottom: 1.5rem;
}

hr {
    margin: 1rem 0;
    border: none;
    border-bottom: 2px solid #f0f0f0;
}

.row {
    display: flex;
    margin: 0 -0.5rem;
}

.col {
    margin: 0 0.5rem;
    width: 100%;
}

.child-view {
    position: absolute;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
    -webkit-transform: translate(100vw, 0);
    transform: translate(100vw, 0);
}
.slide-left-leave-active,
.slide-right-enter {
    -webkit-transform: translate(-100vw, 0);
    transform: translate(-100vw, 0);
}
</style>
