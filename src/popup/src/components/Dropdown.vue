<template>
    <div class="dropdown" :id="id">
        <slot></slot>
    </div>
</template>

<script>
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export default {
    data() {
        return {
            id: '',
        }
    },
    props: [
        'root'
    ],
    beforeMount() {
        for (let i = 0; i < 8; i++) {
            this.id += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
    },
    mounted() {
        const rootElement = document.querySelector(this.root);
        const element = document.getElementById(this.id);

        element.style.top = (rootElement.offsetTop + 24) + 'px';
        element.style.left = (rootElement.offsetLeft - element.offsetWidth + 32) + 'px';

        rootElement.addEventListener('click', () => {
            if(!element.classList.contains('open')) {
                element.classList.add('open');
            }
            event.stopPropagation();
        })

        window.addEventListener('click', () => {
            if(element.classList.contains('open')) {
                element.classList.remove('open');
            }
        })
    }
}
</script>

<style lang="scss" scoped>

.dropdown {
    position: fixed;
    width: fit-content;
    clip-path: inset(0 0 100% 0);
    transition: clip-path 0.1s ease-out;
    background-color: white;
    border-radius: 4px;
    border: solid 2px #e1e1e1;

    &.open {
        clip-path: inset(0 0 0 0);
    }

    * {
        padding: 0.5rem;
    }
}

</style>