<style scoped lang="less">
    @import "home.less";
</style>
<style scoped>
    .layout-content-outer {
        height: auto;
    }
</style>
<template>
    <div class="layout-outer">
        <header class="layout-header-box">
            <div class="layout-title-box">
                <img :src="logo" />
                <h2>新华三党建云</h2>
            </div>
            <Menu
                mode="horizontal"
                :theme="'light'"
                :active-name="activeName"
                @on-select="select"
            >
                <MenuItem name="home">
                    首页
                </MenuItem>
                <MenuItem name="product">
                    产品
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        开放平台
                    </template>
                    <MenuItem name="ai">AI体验</MenuItem>
                    <MenuItem name="yanshi">演示环境</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        服务支持
                    </template>
                    <!--<MenuItem name="wiki">WIKI手册</MenuItem>-->
                    <MenuItem name="wenda">问答社区</MenuItem>
                    <!-- <MenuItem name="ziliao">资料中心</MenuItem> -->
                    <MenuItem name="contact">联系我们</MenuItem>
                </Submenu>
                <MenuItem name="shiyong">
                    申请试用
                </MenuItem>
            </Menu>
        </header>
        <div class="layout-content-outer">
            <router-view></router-view>
        </div>
        <footer class="layout-footer-outer">
            <div class="layout-footer-box">
                <div class="layout-left">
                    <div style="flex: 1;"></div>
                    <img :src="logo" />
                    <p>版权所有 2018新华三技术有限公司版权所有京ICP备09032636号</p>
                    <div style="flex: 1;"></div>
                </div>
                <div class="layout-right">
                    <img :src="appDownload" />
                    <p>扫一扫，下载APP</p>
                </div>
            </div>
        </footer>
        <Modal
            width="600"
            v-model="shiyongShow"
            title="党建云试用申请"
            @on-ok="save"
        >
            <Form :label-width="100">
                <FormItem label="客户类型" required>
                    <Select v-model="shiyongData.customerType">
                        <Option value="government">政府部门</Option>
                        <Option value="company">企业</Option>
                        <Option value="services">事业单位</Option>
                    </Select>
                </FormItem>
                <FormItem label="姓名" required>
                    <i-input v-model="shiyongData.name"></i-input>
                </FormItem>
                <FormItem label="邮箱" required>
                    <i-input v-model="shiyongData.email"></i-input>
                </FormItem>
                <FormItem label="电话号码" required>
                    <i-input v-model="shiyongData.phone"></i-input>
                </FormItem>
                <FormItem label="单位名称" required>
                    <i-input v-model="shiyongData.title"></i-input>
                </FormItem>
                <FormItem label="地区">
                    <v-distpicker
                        @province="changeArea"
                        @city="changeArea"
                        @area="changeArea"
                        @selected="changeArea"
                    ></v-distpicker>
                </FormItem>
                <FormItem label="地址" required>
                    <i-input v-model="shiyongData.address"></i-input>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
    import VDistpicker from 'v-distpicker';
    import logo from '../assets/images/logo.png';
    import appDownload from '../assets/images/appdownload.png';

    export default {
        name: 'home',
        components: { VDistpicker },
        data() {
            return {
                logo,
                appDownload,
                shiyongShow: false,
                shiyongData: {
                    customerType: '',
                    name: '',
                    email: '',
                    phone: '',
                    title: '',
                    area: '',
                    address: '',
                },
            };
        },
        computed: {
            activeName() {
                if (this.$route.path.includes('/product')) {
                    return 'product';
                } else {
                    return 'home';
                }
            }
        },
        methods: {
            select(name) {
                switch (name) {
                    case 'home':
                    case 'product':
                        this.$router.push(`/${name}`);
                        break;
                    case 'ai':
                        window.open('http://cea.h3c.com/ai');
                        break;
                    case 'yanshi':
                        window.open('http://cea.h3c.com');
                        break;
                    case 'wiki':
                        break;
                    case 'wenda':
                        window.open('http://cea.h3c.com');
                        break;
                    case 'ziliao':
                        break;
                    case 'contact':
                        window.open('http://www.h3c.com/cn/About_H3C/Contact_Us/');
                        break;
                    case 'shiyong':
                        this.shiyongShow = true;
                        break;
                }
            },
            changeArea(area) {
                this.shiyongData.area = area;
            },
            save() {
                this.$Message.success('申请已提交！');
            },
        },
    };
</script>
