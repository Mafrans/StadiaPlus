<template>
    <div 
        class="btn" 
        :style="{'background': format(color.hsl)}"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: "btn",
    props: [
        "color",
    ],
    data() {
        return {
            hover: false,
            hoverColor: null,
        }
    },
    methods: {
        format(hsl) {
            return `hsl(${hsl.h}%, ${hsl.s}%, ${hsl.l}%)`;
        }
    },
    mounted() {
        this.hoverColor = {
            h: this.color.h,
            s: this.color.s,
            l: this.color.l + 20,
        }
    },
}
</script>

<style>
    .btn {
        padding: .3rem 1.5rem;
        font-family: 'Google Sans',sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        border-radius: 0.25rem;
        text-align: center;

        background-color: #bbbbbb;
        transition: background-color 0.2s ease-in-out;
    }

    .btn:hover {
        background-color: #aaaaaa;
        cursor: pointer;
    }

    .btn:active {
        transition: background-color 0.0s linear;
        background-color: #dddddd;
    }
</style>