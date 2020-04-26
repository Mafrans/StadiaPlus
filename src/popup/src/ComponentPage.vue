<template>
    <div class="settings-page">
        <div class="container">
            <page-header :back-button="true">{{
                Language.get('popup.component-page.title')
            }}</page-header>

            <div class="row">
                <div class="col">
                    <div v-if="components === undefined || components === null" class="muted">
                        Hey there! This page isn't available yet as the components haven't been loaded. Go to <a href="stadia.google.com">stadia.google.com</a> and log in to enable this feature.
                    </div>

                    <div v-else v-for="key in Object.keys(components)" :key="key" class="component">
                        {{ key }}

                        <div class="pretty p-switch p-fill">
                            <input type="checkbox" :checked="components[key].enabled">
                            <div class="state">
                                <label>&#x200B;</label>
                            </div>
                        </div>
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
import SelectBox from './components/SelectBox.vue';
import PageButton from './components/PageButton.vue';
import { Language } from '../../Language';
import logo from './assets/logo.png';
import { SelectStyle } from '../../ui/Select';
import { SyncStorage } from '../../Storage';
import { ComponentLoader } from '../../ComponentLoader';
import '../../../node_modules/pretty-checkbox/src/pretty-checkbox.scss';

export default {
    data() {
        return {
            Language: Language,
            logo: logo,
            components: null
        };
    },
    components: {
        Icon,
        PageHeader,
        btn: Button,
        SelectBox,
        PageButton
    },
    created() {
        SyncStorage.COMPONENTS.get((result) => {
            this.components = result.components;
            console.log(this.components)
        });
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
}

.pretty {
    top: -1px;

    .state::before {
        top: calc((0% - (100% - 1em)) - 16% + 1px);
    }
}

.icon {
    float: left;
    margin-right: 4px;
    margin-top: -2px;
}
</style>
