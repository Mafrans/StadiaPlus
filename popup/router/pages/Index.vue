<template>
    <page title="Stadia+">
        <h2>Hi there!</h2>
        <p>
            Thank you for your interest in Stadia+<br>
            Sadly this page isn't finished yet.<br>
            <br>
            Remember to check this page again later!
        </p>
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
</style>
