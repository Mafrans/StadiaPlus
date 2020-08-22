<template>
    <div class="profile">
        <div class="user">
            <img class="avatar" :src="user.avatar" alt="" srcset="">
            <div>
                <p class="name">{{ user.name }}</p>
                <p class="tag">#{{ user.tag }}</p>
            </div>
            <icon class="icon">more_vert</icon>
        </div>
        <btn v-on:click="openProfile()">
            <icon>person</icon> Stadia+ DB profile
        </btn>
        <btn style="color: #B9166A" v-on:click="signOut()">
            <icon>exit_to_app</icon> Sign out
        </btn>
    </div>
</template>

<style lang="scss" scoped>

.profile {
    margin: 1.5rem 0;
    padding: 0.75rem;
    border: solid 2px #F0F0F0;
    border-radius: .5rem;
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

.button {
    margin-top: 0.75rem;
    margin-bottom: 0;
}

</style>

<script>
import { StadiaPlusDB } from '../../../StadiaPlusDB';
import { SyncStorage, LocalStorage } from '../../../Storage';
import Button from './Button.vue';
import Icon from './Icon.vue';
export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
        openProfile() {
            window.open(`${StadiaPlusDB.url}/profile/${this.user.name}/${this.user.tag}`, "_blank");
        }
    },
    components: {
        btn: Button,
        Icon
    },
    created() {
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
                });
        });
    }
}
</script>