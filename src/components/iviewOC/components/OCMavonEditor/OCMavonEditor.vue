<style lang="scss">
    @import "index.scss";
</style>

<template>
    <div
        v-if="showModal"
        class="layout-mavon-editor-outer"
    >
        <div class="layout-title-outer">
            <div class="layout-title">
                <p>{{title}}</p>
                <div
                    @click="back"
                >
                    <Tooltip content="返回" placement="left">
                        <Icon
                            type="ios-arrow-back"
                        ></Icon>
                    </Tooltip>
                </div>
            </div>
        </div>
        <div class="layout-content">
            <mavon-editor
                @fullScreen="fullScreen"
                v-model="editorContent"
            ></mavon-editor>
        </div>
        <div class="layout-button-box">
            <Button @click="save" type="primary">保存</Button>
            <Button @click="back">返回</Button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            content: String,
            show: Boolean,
        },
        data() {
            return {
                editorContent: '',
            };
        },
        watch: {
            show(val) {
                if (val) {
                    this.editorContent = this.content;
                }
            }
        },
        computed: {
            showModal() {
                return this.show;
            },
        },
        methods: {
            save() {
                this.$emit('save', this.editorContent);
            },
            back() {
                const that = this;
                if (this.content === this.editorContent) {
                    this.$emit('back');
                } else {
                    this.$Modal.confirm({
                        title: '注意',
                        content: '你当前页面还有数据未保存，返回将丢失未保存的数据，确认返回？',
                        onOk() {
                            that.$emit('back');
                        },
                    })
                }
            },
            fullScreen(value) {
                window.mavonFullScreen(value);
            },
        },
    };
</script>
