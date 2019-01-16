<style lang="less">

</style>

<template>
    <p
        style="margin-top: 30px; text-align: center; color: #a4a4a4;"
    >
        <slot name="content">{{content}}</slot>
    </p>
</template>

<script>
    export default {
        props: {
            content: {
                type: String,
                default: '暂无数据',
            },
        },
    };
</script>
