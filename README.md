# oc

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 关于几个封装的组件
## table组件
请使用
```
<OCTable></OCTable>
```
该组件不需要引用可全局直接使用，里面包含了iview的Table组件与Page组件，使用方法
与这两个组件一样，传的属性除了Page的size属性传pageComponentSize以及Page组件的方
法on-change传on-page-no-change，如下
```
<OCTable
    style="margin-top: 20px;"
    :data="data"
    :columns="columns"
    @on-row-dblclick="() => {this.onRowDblclick('123')}"
    @on-page-no-change="() => {}"
    page-component-size="small"
    :setRef="(ref) => {this.$refs.table = ref}"
></OCTable>
```
:setRef="(ref) => {this.$refs.table = ref}" 这个为获取table的ref

## 关于notice组件
请使用：window.notice(message); notice方法我已写为window的属性，可以直接调
notice(message)；其中message为String类型；
### 使用示例
```
request.post('/api/auth/login', {
    username: 'alice',
    password: '123456',
}).then((data) => {
    console.log(data);
}).catch((err) => {
    window.notice(err.message);
})
```

##  关于暂无数据（nodata）组件
封装了暂无数据的组件，请需要显示暂无数据时调用该组件;
该组件的属性为content，默认值为暂无数据；
有一个slot为content，如果传了slot就无法显示属性内容；
示例：
```
<Nodata></Nodata>
<Nodata content="没有数据哦"></Nodata>
<Nodata>
    <span slot="content">没有数据哦</span>
</Nodata>
```

##  关于BottomOperationBox组件
该组件是页面内容基本容器，所有的内容应该都用该容器包裹
该组件有一个属性'showOperation'，true或者有在标签添加showOperation属性为显示底部操作按钮条，false为或者不填showOperation属性则为隐藏
该组件有两个三个slot
一个为默认的，默认的slot没有name，对应为主体内容，可以用于盛放表格等内容
一个为pageTop，显示在默认主体内容的上方，可以用于盛放搜索条件等内容
一个为operation，显示在默认主体内容下方，可以用于盛放提交按钮等内容，如果需要用到该slot请将showOperation属性设置为true
示例：
```
<BottomOperationBox showOperation>
    <div class="layout-search-outer" slot="pageTop">
        <Form
            inline
            :label-width="50"
            style="flex: 1;"
        >
            <FormItem style="margin-bottom: 0;" label="类型：">
                <RadioGroup
                    v-model="type"
                    type="button"
                    size="small"
                    @on-change="getData"
                >
                    <Radio label="ALL">所有项目</Radio>
                    <Radio label="MINE">我创建的</Radio>
                    <Radio label="JSON_IN">我参与的</Radio>
                </RadioGroup>
            </FormItem>
        </Form>
        <div
            style="display: flex; align-items: center;"
        >
            <Button
                @click="addProject"
                size="small"
                type="primary"
            >新增</Button>
        </div>
    </div>
    <template v-if="projectList.length > 0">
        <Row :gutter="10">
            <i-col
                v-for="item in projectList"
                :key="item.id"
                span="6"
            >
                <div @click="showProjectDetail">
                    <Card
                        class="layout-project-item-card"
                        :title="item.name"
                    >
                    </Card>
                </div>
            </i-col>
        </Row>
    </template>
    <div slot="operation" style="display: flex;">
        <div style="flex: 1;"></div>
        <Page
            :total="total"
            :current="pageNum"
            :page-size="pageSize"
            :page-size-opts="[8, 16, 24, 32, 40]"
            placement="top"
            show-total
            show-sizer
            @on-change="(num) => {
                this.pageChange(num, this.pageSize)
            }"
            @on-page-size-change="(size) => {
                this.pageChange(this.pageNum, size)
            }"
        ></Page>
    </div>
</BottomOperationBox>
```