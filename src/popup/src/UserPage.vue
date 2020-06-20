<template>
    <div class="user-page">
        <div class="container">
            <page-header :back-button="true">{{
                Language.get('popup.user-page.title')
            }}</page-header>

            <div v-if="user != null" class="profile">
                <div class="row">
                    <div class="col">
                        <img :src="user.picture" alt="The profile image" />
                        <h1>
                            {{
                                Language.get('popup.user-page.motd', {
                                    name: user.given_name,
                                })
                            }}
                        </h1>
                    </div>
                </div>
            </div>
            <div v-else-if="!loading" class="login">
                <div class="row">
                    <div class="col">
                        <btn v-on:click="authenticate">
                            {{
                                Language.get(
                                    'popup.user-page.login-with-google'
                                )
                            }}
                        </btn>
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
import { Language } from '../../Language';
import { SyncStorage, LocalStorage } from '../../Storage';
import { StadiaPlusDB } from '../../StadiaPlusDB';
import Logger from '../../Logger';
export default {
    data() {
        return {
            Language: Language,
            user: null,
            loading: true,
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
                    (this.user = profile), (this.loading = false);
                });
            });
        },
    },
    created() {
        const _this = this;

        LocalStorage.AUTH_TOKEN.get((response) => {
            StadiaPlusDB.authToken = response[LocalStorage.AUTH_TOKEN.tag];

            StadiaPlusDB.getProfile()
                .then((profile) => {
                    this.user = profile;
                    this.loading = false;
                    console.log({ profile });
                })
                .catch(() => {
                    StadiaPlusDB.authToken = null;
                    this.loading = false;
                    Logger.error('Authentication failed, was it cancelled?');
                });
        });
    },
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
}

h3 {
    margin-bottom: 0.5rem;
}

.profile img {
    margin-bottom: 0.25rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #eaeaea;
}
</style>
