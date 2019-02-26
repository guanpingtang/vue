<style lang="less">
    @import "index.less";
</style>

<template>
    <div class="layout-product-outer">
        <div class="layout-product-box">
            <div class="layout-tab-box">
                <div style="flex: 1;"></div>
                <div
                    v-for="item in tabs"
                    :key="item.key"
                    class="layout-tab-item"
                    @click="tabSelect(item.key)"
                >
                    <img :src="selectTab === item.key ? item.iconSelect : item.icon" />
                    <span
                        :class="{selected: selectTab === item.key}"
                    >{{item.name}}</span>
                </div>
                <div style="flex: 1;"></div>
            </div>
            <div class="layout-tab-content-box">
                <div class="layout-desc-outer">
                    <div class="layout-desc-box">
                        <img class="layout-yinhao-1" :src="yinhao" >
                        <img class="layout-yinhao-2" :src="yinhao" >
                        <div class="layout-line-top"></div>
                        <div class="layout-line-right"></div>
                        <div class="layout-line-left"></div>
                        <div class="layout-line-bottom"></div>
                        <p :class="`layout-desc-${selectTab}`">
                            <span v-if="selectTab === 'jywkdxxff'">
                                相比较传统意义上的微课教学，新华三党建云系统设计的亮点在于引入了“引导式讨论”和“评价分享”环节。学习者在微课学习结束之后，积极地论述自己的学习心得和创新观点，学习者在发表评论的同时，自主思考并有条理地论述，不断调用自己头脑中的知识结构，这一过程本身就是一次再学习的过程，而在浏览他人的评论的同时，也使得学习者可以进一步对照反思自己的学习成果，对学习者的知识巩固与提升也可以起到良好的促进作用，由此产生的教学活动不仅注重了党建工作认知层面的学习把握，而且注重了广大党员学习情感和动作技能领域的培育，党建工作者和基层党员双方将教与学的过程建立在对学习过程的深刻认识上，达到提升党建学习成效的目标。
                            </span>
                            <span v-if="selectTab === 'jyaiddyxxxghx'">
                                与传统党建产品不同，新华三党建云注重党建学习效果的大数据分析与评估。党员学习效果评估，是指将党员在党建云平台上进行的所有学习活动、发言分享数据都留痕沉淀下来，然后通过分词、向量化等自然语言处理之后，对照党建云平台系统中集成的卡特尔性格特征分析词典、4MAT工作风格分析词典以及80 余万党建知识语料库，进行检索、标注和计数，从而为每个党员生成包括性格特征、工作风格、学习效果在内的145个维度的画像，一来可以帮助党员更加全面的了解自己，二来可以为党员精准推荐学习内容和资讯，有针对性的学习和提高。
                            </span>
                            <span v-if="selectTab === 'dsjfzjc'">
                                新华三党建云系统充分发挥党建平台互联互通、方便快捷、实时互动、参与面广、实时感知等优势，通过多维度、多渠道数据留痕记录，采用人工智能和大数据挖掘手段，智能跟踪和分析基层党建工作情况，随时通过图形化方式直接展现党建指数现状与趋势、三会一课活动执行情况、党支部活跃度排行、党员学习热点等数据，实现党建考核指标可量化、党建工作成效可视化、从而为党的各项工作活动提供源源不断的辅助决策依据真正做到落实抓好党建是最大的政绩的中央精神。
                            </span>
                            <span v-if="selectTab === 'gzlqfwddjnrk'">
                                新华三党建云的内容库瞄准“大党建”的政策、党务、党纪、党史等领域，把握政治方向，体现高端特色，坚持问题导向，体现党建研究的专业性、时效性党建，为各级党委加强党的建设提供决策参考和智力支持。
                            </span>
                        </p>
                    </div>
                </div>
                <div
                    class="layout-content-outer"
                    v-if="selectTab === 'jywkdxxff'"
                >
                    <div class="layout-content-item-outer layout-jywkdxxff-content-1">
                        <div class="layout-content-item-box">
                            <img :src="jyjdllmxdwksj" />
                            <div class="layout-text">
                                <h1>基于经典理论模型的微课设计</h1>
                                <p>每一个党建课程都是一个教学事件，每个教学事件可以是一个微课，包含一个 或多个知识点，并设计成一个有逻辑顺序完成特定教学功能的事件流，达到零 散学习、系统收获的效果。党建管理者通过微课设计灵活安排“主题教学事件” ，广大党员利用碎片化的时间有效组织学习。</p>
                            </div>
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-jywkdxxff-content-2">
                        <div class="layout-content-item-box">
                            <div class="layout-text">
                                <h1>党建学习过程留痕</h1>
                                <p>有效管理学习过程，使学习过程透明化、可视化、痕迹化，严格党员教育 管理，严格组织生活，提升党员学习教育的有效性。</p>
                            </div>
                            <img :src="djxxgclh" />
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-jywkdxxff-content-3">
                        <div class="layout-content-item-box">
                            <img :src="djhd" />
                            <div class="layout-text">
                                <h1>党建活动留痕</h1>
                                <p>有效创新党建载体，使党建活动和过程全程互联网化和电子化留痕，有效拓展 党建工作空间，创新党组织活动方式。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="layout-content-outer"
                    v-if="selectTab === 'jyaiddyxxxghx'"
                >
                    <div class="layout-content-item-outer layout-jyaiddyxxxghx-content-1">
                        <div class="layout-content-item-box">
                            <img :src="dyxgtzfx" />
                            <div class="layout-text">
                                <h1>党员性格特征分析</h1>
                                <p>党员性格特征分析基于美国伊利诺伊州立大学卡特尔教授编制的 “卡特尔16种性格因素问卷”，通过学习者在不同的时间和情景 中的行为形式，挖掘出学习者在大多数情况下表现出来的相对稳 定而持久的特性，从而预测学习者在工作稳定性、工作效率和压 力承受能力等方面的表现。卡特尔性能分析模型可广泛应用于心 理咨询、人员选拔和职业指导的各个环节，为人事决策和人事诊 断提供个人心理素质的参考依据。</p>
                            </div>
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-jyaiddyxxxghx-content-2">
                        <div class="layout-content-item-box">
                            <div class="layout-text">
                                <h1>党员工作风格分析</h1>
                                <p>党员工作风格分析基于美国麦克卡锡博士提出的4MAT教学模 式。4MAT教学模式，又称自然学习设计，核心理念是遵循大 脑规律，关注学习者的个性差异，将教学过程分为4个象限， 在4个不同象限中运用不同的教学方法，从而达到因材施教的 教学效果。</p>
                            </div>
                            <img :src="dygzfgfx" />
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-jyaiddyxxxghx-content-3">
                        <div class="layout-content-item-box">
                            <img :src="djzshxxxgfx" />
                            <div class="layout-text">
                                <h1>党建指数和学习效果分析</h1>
                                <p>党建指数和学习效果分析以党章、十八大、十九大报告等重要文 献为依据，计算提取出约80万党员修养相关关键词，从6个维度 细化出125个具体党建指数和学习效果指标，可以帮助党员更加 全面了解自己，也可以帮助党组织更加清晰地了解党建工作成效 ，并利用人工智能实现学习资料的精准推送，自动为党员精准推 荐学习内容和资讯，有针对性地学习和提升党建水平。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="layout-content-outer"
                    v-if="selectTab === 'dsjfzjc'"
                >
                    <div class="layout-content-item-outer layout-dsjfzjc-content-1">
                        <div class="layout-content-item-box">
                            <img :src="djzsjzzw" />
                            <div class="layout-text">
                                <h1>党建指数精准掌握</h1>
                                <p>党建指数直观反映管理区域内所有党员素养的量化指标，帮助党务领导和党 务工作者及时了解整个组织的党员学习效果画像，可有针对性的组织党员教 育和提升，精准施策。同时，通过党建指数趋势分析党建成效的开展情况， 便于回顾党建工作执行效果，不断调整和优化策略。</p>
                            </div>
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-dsjfzjc-content-2">
                        <div class="layout-content-item-box">
                            <div class="layout-text">
                                <h1>党员学习教育精准管理</h1>
                                <p>新华三党建云为每个党支部搭建网上支部，支部党员线下开展活动 的基层上，将每位党员线上学习、交流、活动等情况进行收集汇总 生成党员学习效果分析数据库，做到支部天天在线、党员时时连线 同时对每个党支部的活动组织情况进行考核制度量化和积分制管理 情况进行考核制度量化和积分制管理，通过积分排名直观展现各党 支部学习教育的开展情况，便于发扬先进、发现短板，及时预警辅 助决策。</p>
                            </div>
                            <img :src="dyxxjyjzgl" />
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-dsjfzjc-content-3">
                        <div class="layout-content-item-box">
                            <img :src="zzhdjzdd" />
                            <div class="layout-text">
                                <h1>组织活动精准督导</h1>
                                <p>新华三党建云通过建立党支部工作在线纪实制度，形成线上通知、线上签到 线上讨论，线上总结的工作机制，支部党员大会、组织生活会、民主评议党 员、党支部委员会、党小组会等活动情况，通过新华三党建云系统进行全程 在线纪实，上级党组织在线跟踪监督，抓好规范监督促整改，推动党支部活 动严起来、实起来。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="layout-content-outer"
                    v-if="selectTab === 'gzlqfwddjnrk'"
                >
                    <div class="layout-content-item-outer layout-gzlqfwddjnrk-content-1">
                        <div class="layout-content-item-box">
                            <img :src="zjjz" />
                            <div class="layout-text">
                                <h1>专家资源</h1>
                                <p>党建内容库由全国10余个政治素质过硬、理论造诣精深、党建经 验丰富的省市级党校专家智库、知名党史党建专家学者精心制作</p>
                            </div>
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-gzlqfwddjnrk-content-2">
                        <div class="layout-content-item-box">
                            <div class="layout-text">
                                <h1>5000＋套题库</h1>
                                <p>以《中国共产党章程》、十八大、十九大报告、习近平总 书记系列重要讲话读本和学习图解等文献为依据，精心制 作了5000多套高质量、全方位的党员体检测评题库。</p>
                            </div>
                            <img :src="tiku5000" />
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-gzlqfwddjnrk-content-3">
                        <div class="layout-content-item-box">
                            <img :src="xxyz" />
                            <div class="layout-text">
                                <h1>学习原著</h1>
                                <p>“读原著”、“学原文”、“悟原理”，原本通读，把握其要义；逐字 逐句细度，挖掘其精髓；联系实际精读，用学习成果指引党建工作</p>
                            </div>
                        </div>
                    </div>
                    <div class="layout-content-item-outer layout-gzlqfwddjnrk-content-4">
                        <div class="layout-content-item-box">
                            <div class="layout-text">
                                <h1>红色VR教育基地</h1>
                                <p>通过前沿的VR技术身临其境参观陕西西安吴青训班革命旧址 和关中地委旧址等红色教育基地，重温历史瞬间，体验红色 文化底蕴</p>
                            </div>
                            <img :src="hsvrjyjd" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import jywkdxxff from '../../assets/images/product/jywkdxxff.png';
    import jywkdxxffRed from '../../assets/images/product/jywkdxxff-red.png';
    import jyaiddyxxxghx from '../../assets/images/product/jyaiddyxxxghx.png';
    import jyaiddyxxxghxRed from '../../assets/images/product/jyaiddyxxxghx-red.png';
    import dsjfzjc from '../../assets/images/product/dsjfzjc.png';
    import dsjfzjcRed from '../../assets/images/product/dsjfzjc-red.png';
    import gzlqfwddjnrk from '../../assets/images/product/gzlqfwddjnrk.png';
    import gzlqfwddjnrkRed from '../../assets/images/product/gzlqfwddjnrk-red.png';
    import zjjz from '../../assets/images/product/zjjz.png';
    import tiku5000 from '../../assets/images/product/tiku5000.png';
    import xxyz from '../../assets/images/product/xxyz.png';
    import hsvrjyjd from '../../assets/images/product/hsvrjyjd.png';
    import djzsjzzw from '../../assets/images/product/djzsjzzw.png';
    import dyxxjyjzgl from '../../assets/images/product/dyxxjyjzgl.png';
    import zzhdjzdd from '../../assets/images/product/zzhdjzdd.png';
    import dyxgtzfx from '../../assets/images/product/dyxgtzfx.png';
    import dygzfgfx from '../../assets/images/product/dygzfgfx.png';
    import djzshxxxgfx from '../../assets/images/product/djzshxxxgfx.png';
    import jyjdllmxdwksj from '../../assets/images/product/jyjdllmxdwksj.png';
    import djxxgclh from '../../assets/images/product/djxxgclh.png';
    import djhd from '../../assets/images/product/djhd.png';
    import yinhao from '../../assets/images/product/yinhao.png';

    export default {
        data() {
            return {
                selectTab: 'jywkdxxff',
                yinhao,
                zjjz,
                tiku5000,
                xxyz,
                hsvrjyjd,
                djzsjzzw,
                dyxxjyjzgl,
                zzhdjzdd,
                dyxgtzfx,
                dygzfgfx,
                djzshxxxgfx,
                jyjdllmxdwksj,
                djxxgclh,
                djhd,
                tabs: [
                    {
                        key: 'jywkdxxff',
                        name: '基于微课的学习方法',
                        icon: jywkdxxff,
                        iconSelect: jywkdxxffRed,
                    },
                    {
                        key: 'jyaiddyxxxghx',
                        name: '基于AI的党员学习效果画像',
                        icon: jyaiddyxxxghx,
                        iconSelect: jyaiddyxxxghxRed,
                    },
                    {
                        key: 'dsjfzjc',
                        name: '大数据辅助决策',
                        icon: dsjfzjc,
                        iconSelect: dsjfzjcRed,
                    },
                    {
                        key: 'gzlqfwddjnrk',
                        name: '高质量全方位的党建内容库',
                        icon: gzlqfwddjnrk,
                        iconSelect: gzlqfwddjnrkRed,
                    },
                ],
            };
        },
        created() {
            if (this.$store.state.produceSelectTab) {
                this.selectTab = this.$store.state.produceSelectTab;
            }
        },
        methods: {
            tabSelect(key) {
                this.selectTab = key;
            }
        },
    }
</script>
