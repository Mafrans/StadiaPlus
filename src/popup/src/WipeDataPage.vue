<template>
    <div class="wipe-data-page">
        <div class="container">
            <page-header :back-button="true">{{ Language.get('popup.user-page.title') }}</page-header>

            <h3>Really wipe your data?</h3>
            <p>
                Wiping your user data from Stadia+ DB means your profile will no longer be available, and your data will be completely gone from the Stadia+ DB database. 
                <br><br> 
                This does not effect your Stadia profile, and all your game data will still be available in Stadia.
            </p>
            <btn class="warning-button" @click="wipedata()">Yes, wipe my data</btn>
            <btn @click="back()">No, I changed my mind</btn>
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
                    this.$router.push('/')
                        .then(() => location.reload());
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
