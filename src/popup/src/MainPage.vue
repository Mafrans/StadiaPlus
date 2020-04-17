<template>
    <div class="container">
        <page-header icon="settings" v-on:icon-click="settings">Stadia+</page-header>
        <p>
            The extension is all ready to go. Just fire up Stadia and start
            playing! 🎮
        </p>

        <div class="row">
            <div class="col">
                <a target="_blank" href="https://stadia.google.com" class="btn gradient">
                    <icon>launch</icon>
                    Launch Stadia
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a target="_blank" href="https://github.com/Mafrans/StadiaPlus/wiki" class="btn">
                    <icon>help_outline</icon>
                    Help & FAQ
                </a>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col">
                <a target="_blank" href="https://stadia.google.com" class="btn">
                    Discord
                </a>
            </div>
            <div class="col">
                <a target="_blank" href="https://stadia.google.com" class="btn">
                    Reddit
                </a>
            </div>
        </div>

        <footer>
            <span>Stadia+ 2.1</span>
            <span>Developed by <a href="https://reddit.com/u/Mafrans">Mafrans</a></span>
        </footer>
    </div>
</template>

<script>
import Icon from './components/Icon.vue';
import PageHeader from './components/PageHeader.vue';
export default {
    components: {
        Icon,
        PageHeader
    },
    methods: {
        settings() {
            this.$router.push('settings');
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
}

.btn {
    display: block;
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    background: #F0F0F0;
    color: #505050;
    text-align: center;
    display: block;
    text-decoration: none;

    &[disabled] {
        opacity: 0.7;
        pointer-events: none;
        cursor: initial;
    }

    &.gradient {
        background: linear-gradient(90deg, #FA4821 0%, #AE0F56 100%);
        color: #ffffff;
    }

    .material-icons {
        vertical-align: text-top;
        font-size: 18px;
        margin-right: 0.25rem;
    }
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