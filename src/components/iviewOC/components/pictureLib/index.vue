<style lang="scss">
    @import "index.scss";
</style>

<template>
    <div class="layout-picture-lib-outer">
        <div
            v-if="savedAvatar"
            class="layout-avatar-box"
        >
            <img
                :src="getImgUrl(savedAvatar)"
            />
            <div class="layout-btn-outer">
                <div class="layout-btn-box">
                    <div style="flex: 1;"></div>
                    <Tooltip transfer content="选择" placement="top">
                        <Icon
                            style="cursor: pointer;"
                            @click="showLib"
                            type="md-images"
                        ></Icon>
                    </Tooltip>
                    <Icon
                        style="cursor: pointer;"
                        @click.stop="showImage"
                        type="ios-eye"
                    ></Icon>
                    <Icon
                        style="cursor: pointer;"
                        @click.stop="deleteAvatar(true)"
                        type="ios-trash"
                    ></Icon>
                    <div style="flex: 1;"></div>
                </div>
            </div>
        </div>
        <div
            v-else
            class="layout-avatar-upload-btn"
            @click="showLib"
        >
            <Icon type="ios-camera" size="20"></Icon>
        </div>
        <Modal
            class="layout-picture-lib-modal-outer"
            v-model="visible"
            width="600"
            title="选择图片"
            @on-ok="ok"
            @on-cancel="cancel">
            <div class="layout-lib-outer">
                <div class="layout-lib-box">
                    <Upload
                        action=""
                        ref="upload"
                        :show-upload-list="false"
                        :before-upload="beforeUpload"
                        :on-error="handleError"
                        :on-format-error="handleFormatError"
                        :on-exceeded-size="handleMaxSize"
                        :format="['jpg','jpeg','png']"
                        :max-size="2048"
                        type="drag"
                        style="width: 96px;"
                    >
                        <div
                            v-if="avatar"
                            :class="{
                                'layout-avatar-box': true,
                                'layout-choosed-box': chooseIndex === -1,
                            }"
                        >
                            <img
                                :src="getImgUrl(avatar)"
                            />
                            <div class="layout-btn-outer">
                                <div class="layout-btn-box">
                                    <div style="flex: 1;"></div>
                                    <Tooltip transfer content="选中" placement="top">
                                        <Icon
                                            style="cursor: pointer;"
                                            @click.stop="chooseImg(-1, avatar)"
                                            type="md-image"
                                        ></Icon>
                                    </Tooltip>
                                    <Icon
                                        style="cursor: pointer;"
                                        @click.stop="showImage"
                                        type="ios-eye"
                                    ></Icon>
                                    <Icon
                                        style="cursor: pointer;"
                                        @click.stop="deleteAvatar(false)"
                                        type="ios-trash"
                                    ></Icon>
                                    <div style="flex: 1;"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else
                            class="layout-avatar-upload-btn"
                        >
                            <Icon type="ios-camera" size="20"></Icon>
                        </div>
                    </Upload>
                    <template v-if="type === 'avatar'">
                        <div
                            v-for="(item, key, index) in avatars"
                            :key="key"
                            :class="{
                            'layout-lib-avatar-item': true,
                            'layout-choosed-box': chooseIndex === index,
                        }"
                            @click="chooseImg(index, key)"
                        >
                            <img :src="item" />
                        </div>
                    </template>
                </div>
            </div>
        </Modal>
        <Modal
            class="layout-picture-lib-modal-outer"
            v-model="showCropper"
            title="裁剪图片"
            :width="582"
            @on-ok="uploadFile"
        >
            <div class="layout-cropper-outer">
                <div>
                    <div @mousemove="getImageCropperView">
                        <vue-cropper
                            style="width: 400px; height: 400px;"
                            ref="cropper"
                            :img="cropperInitSrc"
                            :outputSize="0.8"
                            :outputType="'png'"
                            :autoCrop="true"
                            :autoCropWidth="256"
                            :autoCropHeight="256"
                            :fixed="true"
                            :fixedNumber="[1, 1]"
                            :full="true"
                            :infoTrue="true"
                            :maxImgSize="512"
                        ></vue-cropper>
                    </div>
                    <div style="margin-top: 15px;">
                        <Button
                            @click="leftRotate"
                        >左旋转</Button>
                        <Button
                            style="margin-left: 15px;"
                            @click="rightRotate"
                        >右旋转</Button>
                    </div>
                </div>
                <div
                    v-if="viewImg"
                    class="layout-cropper-view-box"
                >
                    <img :src="viewImg" />
                    <img :src="viewImg" />
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import { VueCropper } from 'vue-cropper';
    import axios from '../../../../assets/util/request';

    let oldViewImg = '';

    export default {
        props: {
            defaultAvatar: String,
            projectForm: Object,
            type: String,
        },
        components: { VueCropper },
        data() {
            return {
                visible: false,
                token: localStorage.getItem('OCToken') ? localStorage.getItem('OCToken') : '',
                defaultList: [],
                cropperInitSrc: '',
                showCropper: false,
                viewImg: '',
                viewImgBlob: '',
                file: null,
                loading: false,
                avatar: '',
                savedAvatar: '',
                chooseIndex: -1,
            };
        },
        computed: {
            avatars() {
                return this.$store.state.avatar;
            },
        },
        created() {
            if (this.type === 'avatar') {
                const keys = Object.keys(this.avatars);
                const index = keys.includes(this.defaultAvatar);
                this.chooseIndex = index;
            }
            this.savedAvatar = this.defaultAvatar;
            this.avatar = this.defaultAvatar;
        },
        methods: {
            chooseImg(index) {
                this.chooseIndex = index;
            },
            getImgUrl(url) {
                return url.includes('/s') ? url : this.avatars[url];
            },
            showLib() {
                this.visible = true;
                const index = Object.keys(this.avatars).indexOf(this.savedAvatar);
                this.chooseIndex = (index || index === 0) ? index : -1;
            },
            beforeUpload(file) {
                this.file = file;
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    this.cropperInitSrc = e.target.result;
                    this.showCropper = true;
                    setTimeout(() => {
                        this.getImageCropperView();
                    }, 300);
                };
                fileReader.readAsDataURL(file);
                return false;
            },
            handleError(err) {
                window.notice(err.message);
            },
            handleFormatError() {
                window.notice('请选择"jpg","jpeg","png"三种格式的图片！', 'warning');
            },
            handleMaxSize() {
                window.notice('图片大小不可超过2M', 'warning');
            },
            showImage() {
                const that = this;
                this.$Modal.info({
                    title: '查看封面',
                    okText: '关闭',
                    width: 680,
                    render(h) {
                        return h('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            },
                        }, [
                            h('img', {
                                attrs: {
                                    src: that.avatar,
                                },
                                style: {
                                    maxWidth: '100%',
                                    maxHeight: `${window.innerHeight * 0.7}px`,
                                },
                            }),
                        ]);
                    },
                });
            },
            deleteAvatar(isSaved) {
                const that = this;
                this.$Modal.confirm({
                    title: '删除封面',
                    content: '确认删除封面？',
                    onOk() {
                        if (isSaved) {
                            that.savedAvatar = '';
                            that.$emit('on-save', this.savedAvatar);
                        } else {
                            that.avatar = '';
                        }
                    },
                });
            },
            getImageCropperView() {
                this.$refs.cropper.getCropData((data) => {
                    if (data !== oldViewImg) {
                        this.viewImg = data;
                    }
                    oldViewImg = data;
                });
                this.$refs.cropper.getCropBlob((data) => {
                    this.viewImgBlob = data;
                });
            },
            /* 上传文件 */
            uploadFile() {
                const formData = new FormData();
                formData.append('file', this.viewImgBlob, this.file.name);
                const promise = axios.post('/api/v1/file/avatar', formData);
                this.loading = true;
                promise.then((data) => {
                    this.avatar = data.path;
                    this.loading = false;
                    this.chooseImg(-1);
                }).catch((err) => {
                    this.loading = false;
                    window.notice(err.message);
                });
            },
            leftRotate() {
                this.$refs.cropper.rotateLeft();
                this.getImageCropperView();
            },
            rightRotate() {
                this.$refs.cropper.rotateRight();
                this.getImageCropperView();
            },
            ok() {
                this.savedAvatar = this.chooseIndex === -1
                        ? this.avatar
                        : Object.keys(this.avatars)[this.chooseIndex];
                this.$emit('on-save', this.savedAvatar);
            },
            cancel() {

            },
        },
    };
</script>
