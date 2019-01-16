<style lang="less">

</style>

<template>
    <svg
        class="iconFont"
        aria-hidden="true"
        :style="`font-size: ${size}px`"
    >
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: true,
            },
            size: {
                type: Number,
                default: 14,
            },
        },
    };
</script>
