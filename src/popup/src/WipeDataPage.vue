<template>
    <div class="wipe-data-page">
        <div class="container">
            <page-header :back-button="true">{{ Language.get('popup.wipe-data-page.title') }}</page-header>

            <h3>{{ Language.get('popup.wipe-data-page.heading') }}</h3>
            <p v-html="Language.get('popup.wipe-data-page.text')"></p>
            <btn class="warning-button" @click="wipedata()">{{ Language.get('popup.wipe-data-page.confirm') }}</btn>
            <btn @click="back()">{{ Language.get('popup.wipe-data-page.cancel') }}</btn>
        </div>
    </div>
</template>

<script>
import Icon from './components/Icon.vue';
import PageHeader from './components/PageHeader.vue';
import Button from './components/Button.vue';
import { Language } from '../../Language';
import { SyncStorage, LocalStorage } from '../../Storage';
import { StadiaPlusDB } from '../../StadiaPlusDB';
import Logger from '../../Logger';
export default {
    data() {
        return {
            Language: Language,
            StadiaPlusDB: StadiaPlusDB,
            user: null,
            loading: false,
        };
    },
    components: {
        Icon,
        PageHeader,
        btn: Button,
    },
    methods: {
        wipedata() {
            StadiaPlusDB.wipedata()
                .then(() => {
                    window.close();
                })
        },
        back() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss" scoped>
.row {
    margin-bottom: 0.5rem;
}

.warning-button {
    border: 2px solid red;
    color: red;
    font-weight: 500;
    background: none;
}

</style>
