<template>
    <div class="profile">
        <div v-if="user != null">
            <div v-if="user.avatar != undefined" class="user">
                <img class="avatar" :src="user.avatar" alt="" srcset="" />
                <div>
                    <p class="name">{{ user.name }}</p>
                    <p class="tag">#{{ user.tag }}</p>
                </div>
                <icon id="more" style="cursor: pointer" class="icon">more_vert</icon>
                <dropdown root="#more">
                    <div class="sign-out" @click="signOut()">{{ Language.get('popup.main-page.profile.sign-out') }}</div>
                    <div class="delete-data" @click="goToDataWipe()">{{ Language.get('popup.main-page.profile.wipe-data') }}</div>
                </dropdown>
            </div>
            <btn v-if="user.avatar != undefined" v-on:click="openProfile()" style="margin-top: 1rem">
                <icon>person</icon> {{ Language.get('popup.main-page.profile.view-profile') }}
            </btn>
            <p v-else>
                {{ Language.get('popup.main-page.profile.not-available') }}
            </p>
            <btn style="color: #B9166A" v-on:click="signOut()"> <icon>exit_to_app</icon>{{ Language.get('popup.main-page.profile.sign-out') }}</btn>
        </div>
        <div v-else>
            <h3>{{ Language.get('popup.main-page.profile.heading') }}</h3>
            <p>{{ Language.get('popup.main-page.profile.text') }}</p>
            <a href="">
                {{ Language.get('popup.main-page.profile.more') }}<icon type="inline" style="margin-left: 4px">arrow_forward</icon>
            </a>
            <btn style="margin-top: 1.5rem" v-on:click="login()">
                <icon><img :src="GoogleG"/></icon> {{ Language.get('popup.main-page.profile.login-button') }}
            </btn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile {
    margin: 1rem 0;
    padding: 1rem 0.75rem;
    border: solid 2px #f0f0f0;
    border-radius: 0.5rem;
}

.user {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    .avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-right: 0.5rem;
    }

    .name {
        font-weight: 500;
        font-size: 20px;
        color: #424242;
        margin-bottom: 0.25rem;
    }

    .tag {
        font-size: 16px;
        color: #969696;
        margin: 0;
    }

    .icon {
        margin-left: auto;
    }
}

.delete-data,
.sign-out {
    cursor: pointer;
}

.delete-data {
    color: red;
    font-weight: 500;
}

.button {
    margin-top: 0.75rem;
    margin-bottom: 0;
}

h3,
p,
a {
    font-size: 14px;
    margin-bottom: 0.75rem;
}

h3 {
    font-size: 18px;
    font-weight: 500;
}

a {
    color: #fa4821;

    &:hover {
        color: #fa4821;
    }
}
</style>

<script>
import { StadiaPlusDB } from '../../../StadiaPlusDB';
import { SyncStorage, LocalStorage } from '../../../Storage';
import GoogleG from '../assets/Google G.svg';
import Button from './Button.vue';
import Icon from './Icon.vue';
import Dropdown from './Dropdown.vue';
import { Language } from '../../../Language.ts'
export default {
    data() {
        return {
            user: null,
            GoogleG,
            Language
        };
    },
    methods: {
        login() {
            this.$router.push('user');
        },
        openProfile() {
            window.open(`${StadiaPlusDB.url}/profile/${this.user.name}/${this.user.tag}`, '_blank');
        },
        signOut() {
            StadiaPlusDB.signout().then(() => {
                location.reload();
            });
        },
        copyProfileURL() {
            const listener = function(ev) {
                ev.preventDefault();
                ev.clipboardData.setData('text/plain', `${StadiaPlusDB.url}/profile/${this.user.name}/${this.user.tag}`);
            };
            document.addEventListener('copy', listener);
            document.execCommand('copy');
            document.removeEventListener('copy', listener);
        },
        goToDataWipe() {
            this.$router.push('./user/wipedata');
        },
    },
    components: {
        btn: Button,
        Icon,
        Dropdown,
    },
    created() {
        LocalStorage.AUTH_TOKEN.get((response) => {
            StadiaPlusDB.authToken = response[LocalStorage.AUTH_TOKEN.tag];

            StadiaPlusDB.getProfile()
                .then((profile) => {
                    this.user = profile;
                    this.loading = false;
                })
                .catch(() => {
                    StadiaPlusDB.authToken = null;
                    this.loading = false;
                });
        });
    },
};
</script>
