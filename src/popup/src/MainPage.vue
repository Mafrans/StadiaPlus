<template>
    <div class="main-page">
        <div class="container">
            <page-header :img="logo" >{{ Language.get('popup.main-page.title') }}</page-header >
            <p>
                {{ Language.get('popup.main-page.ready-text') }}
            </p>

            <div class="row">
                <div class="col">
                    <btn
                        v-on:click="open('https://stadia.google.com')"
                        :gradient="true"
                    >
                        <icon>play_arrow</icon>
                        {{ Language.get('popup.main-page.launch-button') }}
                    </btn>
                </div>
            </div>

            <profile />

            <div class="row">
                <div class="col">
                    <btn v-on:click="settings()">
                        <icon>settings</icon>
                        {{ Language.get('popup.main-page.settings-button') }}
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
import Profile from './components/Profile.vue';
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
        Profile,
    },
    methods: {
        settings() {
            this.$router.push('settings');
        },
        userPage() {
            this.$router.push('user');
        },
        open(url) {
            window.open(url, '_blank');
        },
        getUser() {
            StadiaPlusDB.getProfile().then(console.log);
        },
        testLFG() {
            StadiaPlusDB.LFGConnector.post('test');
        },
    },
    mounted() {
        StadiaPlusDB.connect('http://localhost:3000').catch(console.error);
    }
};
</script>

<style lang="scss" scoped>
</style>
