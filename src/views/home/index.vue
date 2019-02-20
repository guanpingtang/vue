<style lang="less">
    @import "index.less";
</style>

<template>
    <div class="layout-home-outer">
        <div class="layout-home-box">
            <Carousel v-model="bannerValue" loop>
                <CarouselItem>
                    <div
						class="layout-carousel-outer"
						:style="{
							background: 'url(' + banner1 + ') center no-repeat',
						}"
					>
                        <div class="layout-carousel-box">
                            <h1>网络发展到哪里，党建工作就要覆盖到哪里！</h1>
                            <h1>——习近平</h1>
                            <div class="layout-button" @click="mftyClick">
                                <p>免费体验</p>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div
						class="layout-carousel-outer"
						:style="{
							background: 'url(' + banner2 + ') center no-repeat',
						}"
					></div>
                </CarouselItem>
                <CarouselItem>
                    <div
						class="layout-carousel-outer"
						:style="{
							background: 'url(' + banner3 + ') center no-repeat',
						}"
					></div>
                </CarouselItem>
            </Carousel>
            <div class="layout-superiority-outer">
                <div class="layout-tab-outer">
                    <h1>我们的优势</h1>
                    <p class="layout-desc">
                        源于加涅教学设计理论，对学习过程事件进行组合和控制
                    </p>
                    <div class="layout-tab-box">
                        <div style="flex: 1;"></div>
                        <div
                            v-for="item in tabs"
                            class="layout-tab"
                            :key="item.key"
                            @click="tabSelectFunc(item.key)"
                        >
                            <img :src="tabSelect === item.key ? item.iconSelect : item.icon" />
                            <p>{{item.title}}</p>
                        </div>
                        <div style="flex: 1;"></div>
                    </div>
                </div>
                <div class="layout-tab-content-outer">
                    <div class="layout-tab-content-box">
                        <img
                            class="layout-arrow"
                                :src="arrow"
                                :style="{
                                left: arrowLeft + 'px',
                            }"
                        />
                        <template
                            v-for="item in tabContents"
                        >
                            <div
                                :key="item.key"
                                class="layout-tab-content-item"
                                :style="{opacity: item.key === tabSelect ? 1 : 0}"
                            >
                                <div class="layout-left">
                                    <div style="flex: 1;"></div>
                                    <h1>{{item.title}}</h1>
                                    <p>{{item.content}}</p>
                                    <Button
                                        @click="knowMore(item.key)"
                                        type="error"
                                    >< 了解更多</Button>
                                    <div style="flex: 1;"></div>
                                </div>
                                <div class="layout-right">
                                    <img :src="item.img" />
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="layout-our-abilities-outer">
                <div class="layout-our-abilities-box">
                    <h1 class="layout-title">我们的能力</h1>
                    <p class="layout-desc">源于加涅教学设计理论，对学习过程事件进行组合和控制</p>
                    <div class="layout-abilities-box">
                        <div
                            v-for="item in abilities"
                            class="layout-abilities-item-box"
                        >
                            <div class="layout-abilities-item">
                                <img :src="item.img" />
                                <h2 class="layout-abilities-title">{{item.title}}</h2>
                                <p class="layout-abilities-content">{{item.content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layout-plus13-outer">
                <div class="layout-plus13-box">
                    <h1 class="layout-title">1＋3模式</h1>
                    <p class="layout-desc">AI＋智慧党建平台采用1＋3模式，即1个统一的管理平台，3种不同的接入方式（门户网站、手机APP、手机H5页面）组织工作者、党务工作 者、党员群众、可以通过不同的途径、便捷的获取党建资源即服务</p>
                    <img :src="plus13" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dsjfzjc from '../../assets/images/dsjfzjc.png';
    import dsjfzjcimg from '../../assets/images/dsjfzjcimg.png';
    import dsjfzjcRed from '../../assets/images/dsjfzjc-red.png';
    import gzlqfwddjnrk from '../../assets/images/gzlqfwddjnrk.png';
    import gzlqfwddjnrkimg from '../../assets/images/gzlqfwddjnrkimg.png';
    import gzlqfwddjnrkRed from '../../assets/images/gzlqfwddjnrk-red.png';
    import jyaiddyxxxghx from '../../assets/images/jyaiddyxxxghx.png';
    import jyaiddyxxxghximg from '../../assets/images/jyaiddyxxxghximg.png';
    import jyaiddyxxxghxRed from '../../assets/images/jyaiddyxxxghx-red.png';
    import banner1 from '../../assets/images/banner1.png';
    import banner2 from '../../assets/images/banner2.png';
    import banner3 from '../../assets/images/banner3.png';
    import jywkdxxfs from '../../assets/images/jywkdxxfs.png';
    import jywkdxxfsimg from '../../assets/images/jywkdxxfsimg.png';
    import jywkdxxfsRed from '../../assets/images/jywkdxxfs-red.png';
    import plus13 from '../../assets/images/1plus3.png';
    import djxczx from '../../assets/images/djxczx.png';
    import dwglzx from '../../assets/images/dwglzx.png';
    import dycpzx from '../../assets/images/dycpzx.png';
    import hdjlzx from '../../assets/images/hdjlzx.png';
    import kxjczx from '../../assets/images/kxjczx.png';
    import xxjyzx from '../../assets/images/xxjyzx.png';
    import arrow from '../../assets/images/homeArrow.png';

    export default {
        data() {
            return {
                bannerValue: 0,
                plus13,
                djxczx,
                dwglzx,
                dycpzx,
                hdjlzx,
                kxjczx,
                xxjyzx,
                arrow,
                banner1,
                banner2,
                banner3,
                tabSelect: 'jywkdxxff',
                tabs: [
                    {
                        key: 'jywkdxxff',
                        icon: jywkdxxfs,
                        iconSelect: jywkdxxfsRed,
                        title: '基于微课的学习方式',
                    },
                    {
                        key: 'jyaiddyxxxghx',
                        icon: jyaiddyxxxghx,
                        iconSelect: jyaiddyxxxghxRed,
                        title: '基于AI的党员学习效果画像',
                    },
                    {
                        key: 'dsjfzjc',
                        icon: dsjfzjc,
                        iconSelect: dsjfzjcRed,
                        title: '大数据辅助决策',
                    },
                    {
                        key: 'gzlqfwddjnrk',
                        icon: gzlqfwddjnrk,
                        iconSelect: gzlqfwddjnrkRed,
                        title: '高质量全方位的党建内容库',
                    },
                ],
                tabContents: [
                    {
                        key: 'jywkdxxff',
                        title: '基于加涅教学设计理论的微课学习方式',
                        content: '源于加涅教学设计理论，对学习过程事件进行组合和控制，帮助党员利用碎片时间进行学习，又不失系统性。',
                        img: jywkdxxfsimg,
                    },
                    {
                        key: 'jyaiddyxxxghx',
                        title: '基于AI的党员学习效果画像技术',
                        content: '充分运用人工智能技术，通过对党员言行进行智能化分析 实现党员修养、性格、风格等153个维度画像',
                        img: jyaiddyxxxghximg,
                    },
                    {
                        key: 'dsjfzjc',
                        title: '大数据辅助决策和智能预警',
                        content: '通过党建指数、积分排名等量化的分析结果，帮助管理者 发扬先进、发现短板，精准施测',
                        img: dsjfzjcimg,
                    },
                    {
                        key: 'gzlqfwddjnrk',
                        title: '高质量、全方位的权威党建内容库',
                        content: '充分运用人工智能技术，通过对党员言行进行智能化分析 实现党员修养、性格、风格等153个维度画像',
                        img: gzlqfwddjnrkimg,
                    },
                ],
                abilities: [
                    {
                        img: hdjlzx,
                        title: '互动交流中心',
                        content: '便捷的党群互动方式，通过党群服务门户，让党员能够 倾听群众心声，强化党建引领作用',
                    },
                    {
                        img: dycpzx,
                        title: '党员测评中心',
                        content: '党员测评中心对测评流程、测评指标、测评报告进行了 全方位的梳理和实现，提供党员线上自检能力',
                    },
                    {
                        img: dwglzx,
                        title: '党务管理中心',
                        content: '实现在线党务管理，帮助党务工作者落实职责、量化 考核、跟踪督导',
                    },
                    {
                        img: xxjyzx,
                        title: '学习教育中心',
                        content: '基于移动互联网方便快捷、实时互动等特点，党员可以 便捷地获取学习内容，提高学习效率',
                    },
                    {
                        img: djxczx,
                        title: '党建宣传中心',
                        content: '及时发布党内重要新闻、生动展示党建成功，让党员群 众能时时处处听到党的声音',
                    },
                    {
                        img: kxjczx,
                        title: '科学决策中心',
                        content: '结合AI分析引擎，提供智能、多维、立体的党建分析 决策中心帮助党务工作者精准施策',
                    },
                ],
            };
        },
        computed: {
            arrowLeft() {
                switch (this.tabSelect) {
                    case 'jywkdxxff':
                        return 123;
                    case 'jyaiddyxxxghx':
                        return 445;
                    case 'dsjfzjc':
                        return 760;
                    case 'gzlqfwddjnrk':
                        return 1063;
                }
            },
        },
        methods: {
			mftyClick() {
				window.open('https://cea.h3c.com/web');
			},
            tabSelectFunc(key) {
                this.tabSelect = key;
            },
            knowMore(key) {
                document.getElementById('app').scrollTop = 0;
                this.$store.commit('setProduceSelectTab', key);
                this.$router.push('/product');
            }
        },
    }
</script>
