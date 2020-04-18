<template>
    <div class="container">
        <page-header :back-button="true">Settings</page-header>

        <footer>
            <span>Stadia+ 2.1</span>
            <span>Developed by <a href="https://reddit.com/u/Mafrans">Mafrans</a></span>
        </footer>
    </div>
</template>

<script>
import Icon from './components/Icon.vue';
import PageHeader from './components/PageHeader.vue';
import Button from './components/Button.vue';
import logo from './assets/logo.png';
export default {
    data() {
        return {
            logo: logo
        }
    },
    components: {
        Icon,
        PageHeader,
        btn: Button
    },
    methods: {
        settings() {
            this.$router.push('settings');
        },
        open(url) {
            window.open(url,'_blank');
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
}

footer {
    display: flex;
    justify-content: space-between;
    opacity: 0.5;
    margin-top: 1rem;

    span, a {
        color: #000000;
        font-size: 12px;
    }
}
</style>