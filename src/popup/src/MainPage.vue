<template>
    <div class="main-page">
        <div class="container">
            <page-header
                :img="logo"
                icon="settings"
                v-on:icon-click="settings"
                >{{ Language.get('popup.main-page.title') }}</page-header
            >
            <p>
                {{ Language.get('popup.main-page.ready-text') }}
            </p>

            <div class="row">
                <div class="col">
                    <btn
                        v-on:click="open('https://stadia.google.com')"
                        :gradient="true"
                    >
                        <icon>launch</icon>
                        {{ Language.get('popup.main-page.launch-button') }}
                    </btn>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <btn
                        v-on:click="
                            open('https://github.com/Mafrans/StadiaPlus/wiki')
                        "
                    >
                        <icon>help_outline</icon>
                        {{ Language.get('popup.main-page.help-button') }}
                    </btn>
                </div>
            </div>

            <hr />

            <div class="row">
                <div class="col">
                    <btn v-on:click="open('https://discord.gg/2VDbEQ8')">
                        {{ Language.get('popup.main-page.discord') }}
                    </btn>
                </div>
                <div class="col">
                    <btn
                        v-on:click="
                            open('https://github.com/Mafrans/StadiaPlus')
                        "
                    >
                        {{ Language.get('popup.main-page.github') }}
                    </btn>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <btn v-on:click="testAuth">
                        Test Auth
                    </btn>
                </div>
                <div class="col">
                    <btn v-on:click="testLFG">
                        Test LFG
                    </btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from './components/Icon.vue';
import PageHeader from './components/PageHeader.vue';
import Button from './components/Button.vue';
import logo from './assets/logo.png';
import { Language } from '../../Language';
import axios from 'axios';
import { LocalStorage } from '../../Storage';
import { StadiaPlusDB } from '../../StadiaPlusDB';
export default {
    data() {
        return {
            logo: logo,
            Language: Language
        };
    },
    components: {
        Icon,
        PageHeader,
        btn: Button,
    },
    methods: {
        settings() {
            this.$router.push('settings');
        },
        open(url) {
            window.open(url, '_blank');
        },
        testAuth() {
            StadiaPlusDB.authenticate()
            .then(() => {
                StadiaPlusDB.getProfile().then(console.log);
            });
        },
        testLFG() {
            StadiaPlusDB.LFGConnector.post('test');
        },
    },
    mounted() {
        StadiaPlusDB.connect('http://localhost:3000').then(console.log).catch(console.error);
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
}
</style>
