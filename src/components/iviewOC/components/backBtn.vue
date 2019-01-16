<style>
    .example {
        color: red;
    }
</style>

<template>
    <Button
        @click="goBack"
    >
        <slot>返回</slot>
    </Button>
</template>

<script>
    export default {
        props: ['canBack'],
        data() {
            return {};
        },
        methods: {
            goBack() {
                const that = this;
                if (!this.canBack) {
                    this.$Modal.confirm({
                        title: '返回',
                        content: '当前页面数据未保存，确认返回？',
                        onOk() {
                            that.$router.back();
                        },
                    });
                } else {
                    that.$router.back();
                }
            },
        },
    };
</script>
