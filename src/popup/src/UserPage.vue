<template>
    <div class="user-page">
        <div class="container">
            <page-header :back-button="true">{{ Language.get('popup.user-page.title') }}</page-header>

            <div v-if="!loading" class="login">
                <div class="row">
                    <div class="col">
                        <btn v-on:click="authenticate">
                            <icon><img :src="'/dist/' + GoogleG"/></icon>
                            {{ Language.get( 'popup.user-page.login-button' ) }}
                        </btn>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        {{ Language.get( 'popup.user-page.accept-label' ) }} 
                        <a :href="StadiaPlusDB.url + '/privacy-policy'" target="_blank">
                            {{ Language.get('popup.user-page.privacy-policy') }}
                        </a>
                    </div>
                </div>
            </div>
            <div v-else class="loading">
                <div class="row">
                    <div class="col">
                        {{ Language.get('loading') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from './components/Icon.vue';
import PageHeader from './components/PageHeader.vue';
import Button from './components/Button.vue';
import GoogleG from './assets/Google G.svg';
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
            GoogleG,
        };
    },
    components: {
        Icon,
        PageHeader,
        btn: Button,
    },
    methods: {
        authenticate() {
            this.loading = true;
            StadiaPlusDB.authenticate().then(() => {
                StadiaPlusDB.getProfile().then((profile) => {
                    this.user = profile;
                    this.loading = false;
                    this.$router.go(-1);
                });
            });
        },
    }
};
</script>

<style lang="scss" scoped>
.row {
    margin-bottom: 0.5rem;
}

</style>
