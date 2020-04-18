<template>
    <div class="main-page">
        <div class="container">
            <page-header :img="logo" icon="settings" v-on:icon-click="settings"
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
                            open(
                                'https://www.reddit.com/r/Stadia/comments/fz7xgm/stadia_20_what_youve_all_been_waiting_for/'
                            )
                        "
                    >
                        {{ Language.get('popup.main-page.reddit') }}
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
export default {
    data() {
        return {
            logo: logo,
            Language: Language,
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
    },
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
}
</style>
