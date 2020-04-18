<template>
    <div class="settings-page">
        <div class="container">
            <page-header :back-button="true">Settings</page-header>

            <div class="row">
                <div class="col">
                    <icon :style="{ float: 'left', marginRight: '4px' }"
                        >language</icon
                    >
                    <h3 :style="{ marginBottom: '0.5rem' }">Language</h3>
                    <select-box
                        :items="languages"
                        :selected="currentLanguage"
                        :selectstyle="SelectStyle.SLIMSELECT_LARGE"
                        v-on:change="changeLanguage"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from './components/Icon.vue';
import PageHeader from './components/PageHeader.vue';
import Button from './components/Button.vue';
import SelectBox from './components/SelectBox.vue';
import { Language } from '../../Language';
import logo from './assets/logo.png';
import { SelectStyle } from '../../ui/Select';
import { SyncStorage } from '../../Storage';
export default {
    data() {
        return {
            logo: logo,
            languages: Language.languages.map((lang) => {
                return { value: lang.tag, label: lang.name };
            }),
            currentLanguage: Language.current,
            SelectStyle: SelectStyle,
        };
    },
    components: {
        Icon,
        PageHeader,
        btn: Button,
        SelectBox,
    },
    methods: {
        settings() {
            this.$router.push('settings');
        },
        open(url) {
            window.open(url, '_blank');
        },
        changeLanguage(info) {
            SyncStorage.LANGUAGE.set(info.value);
        }
    },
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
}
</style>
