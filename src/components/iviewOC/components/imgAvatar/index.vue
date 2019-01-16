<style></style>

<template>
    <img class="layout-img-avatar-box" :src="getImg()" />
</template>

<script>
    export default {
        props: {
            src: String,
        },
        data() {
            return {};
        },
        computed: {
            avatars() {
                return this.$store.state.avatar;
            },
        },
        methods: {
            getImg() {
                if (this.src) {
                    if (this.src.includes('/s')) {
                        return this.src;
                    }
                    return this.avatars[this.src];
                }
                return '';
            },
        },
    };
</script>
