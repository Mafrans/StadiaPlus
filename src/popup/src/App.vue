<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="router-view" />
        </transition>

        <footer>
            <span>Stadia+ 2.4</span>
            <span>
                <a href="https://github.com/Mafrans/StadiaPlus/wiki" target="_blank">{{ Language.get('popup.main-page.help-and-faq') }}</a>
                 • 
                <a href="https://discord.gg/2VDbEQ8" target="_blank">{{ Language.get('popup.main-page.discord') }}</a>
                 • 
                <a href="https://github.com/Mafrans/StadiaPlus" target="_blank">{{ Language.get('popup.main-page.github') }}</a>
            </span>
        </footer>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MainPage from './MainPage.vue';
import SelectBox from './components/SelectBox.vue';
import { SelectStyle } from '../../ui/Select';
import { Language } from '../../Language';

export default {
    name: 'App',
    data() {
        return {
            transitionName: 'slide-left',
            Language
        };
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split('/').filter((e) => e !== '').length;
            const fromDepth = from.path.split('/').filter((e) => e !== '')
                .length;
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

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

#app {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    width: 380px;
    height: 570px;
    color: #585858;
}

h1,
h2,
h3,
h4,
h5,
p {
    margin-bottom: 1.5rem;
}

h3 {
    font-weight: 500;
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

.container {
    padding: 1rem;
}

.col {
    margin: 0 0.5rem;
    width: 100%;
}

.router-view {
    position: absolute;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    width: 100%;
    height: 100%;
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

footer {
    position: absolute;
    width: calc(100% - 2rem); // full page width minus the padding on both sides
    padding: 1rem;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    opacity: 0.5;
    margin-top: 1rem;

    span,
    a {
        color: #000000;
        font-size: 12px;
    }
}
</style>
