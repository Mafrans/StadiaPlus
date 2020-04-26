<template>
    <div class="settings-page">
        <div class="container">
            <page-header :back-button="true" icon="code" v-on:icon-click="developer">{{
                Language.get('popup.settings-page.title')
            }}</page-header>

            <div class="row">
                <div class="col">
                    <icon class="icon"
                        >language</icon
                    >
                    <h3 :style="{ marginBottom: '0.5rem' }">
                        {{ Language.get('popup.settings-page.language') }}
                    </h3>
                    <select-box
                        :items="languages"
                        :selected="currentLanguage"
                        :selectstyle="SelectStyle.SLIMSELECT_LARGE"
                        v-on:change="changeLanguage"
                    />
                </div>
            </div>

            <div :style="{ marginTop: '1.25rem' }" class="row">
                <div class="col">
                    <icon class="icon"
                        >extension</icon
                    >
                    <h3 :style="{ marginBottom: '0.5rem' }">
                        {{ Language.get('popup.settings-page.components') }}
                    </h3>
                    <page-button next="settings/components">{{ Language.get('popup.settings-page.edit-components') }}</page-button>
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
import PageButton from './components/PageButton.vue';
import { Language } from '../../Language';
import logo from './assets/logo.png';
import { SelectStyle } from '../../ui/Select';
import { SyncStorage } from '../../Storage';
export default {
    data() {
        return {
            Language: Language,
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
        PageButton
    },
    methods: {
        developer() {
            this.$router.push('settings/developer');
        },
        open(url) {
            window.open(url, '_blank');
        },
        changeLanguage(info) {
            let language = info.value;
            if (language === 'automatic') {
                language = Language.automatic();
            }

            SyncStorage.LANGUAGE.set(language);
            Language.current = Language.languages.find((lang) => lang.tag === info.value);
            this.$forceUpdate();
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
}

.icon {
    float: left;
    margin-right: 4px;
    margin-top: -2px;
}
</style>
