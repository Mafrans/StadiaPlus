<template>
    <page :style="{'color': colors.primary}" :background="colors.secondary" title="Stadia+">
        <h2>Hi there!</h2>
        <p>
            Thank you for your interest in Stadia+
        </p>
        <p>
            Sadly this page isn't finished yet.
        </p>
        <p>
            Remember to check this page again later!
        </p>
        <btn :color="colors.secondary">Test Button</btn>
    </page>
</template>

<script>
import Page from "../../src/components/Page";
import Button from "../../src/components/Button";

export default {
    components: {
        Page,
        "btn": Button,
    },
    data () {
        return {
            colors: require("../../src/assets/color"),
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    width: 250px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, p {
    margin-bottom: 10px;
}
</style>
