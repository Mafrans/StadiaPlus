<template>
    <div class="developer-page">
        <div class="container">
            <page-header :back-button="true">{{
                Language.get('popup.developer-page.title')
            }}</page-header>

            <div class="row">
                <div class="col">
                    <h3>{{ Language.get('popup.developer-page.storage') }}</h3>
                    <btn
                        v-on:click="
                            clearStorage()
                        "
                    >
                        <icon>clear_all</icon>
                        {{ Language.get('popup.developer-page.clear-cache-button') }}
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
import { Language } from '../../Language';
import { SyncStorage, LocalStorage } from '../../Storage';
export default {
    data() {
        return {
            Language: Language,
        };
    },
    components: {
        Icon,
        PageHeader,
        btn: Button,
    },
    methods: {
        clearStorage() {
            LocalStorage.clear();
            SyncStorage.clear();
        }
    },
};
</script>

<style lang="scss" scoped>
h3 {
    margin-bottom: 0.5rem;
}
</style>
