<style lang="scss">
    @import "index.scss";
</style>

<template>
    <div class="layout-oc-table-outer">
        <Table
            :data="data"
            :columns="columns"
            :stripe="stripe"
            :border="border"
            :show-header="showHeader"
            :width="width"
            :height="height"
            :loading="loading"
            :disabled-hover="disabledHover"
            :highlight-row="highlightRow"
            :row-class-name="rowClassName"
            :size="size"
            :no-data-text="noDataText"
            :no-filtered-data-text="noFilteredDataText"
            ref="table"
            @on-current-change="onCurrentChange"
            @on-select="onSelect"
            @on-select-cancel="onSelectCancel"
            @on-select-all="onSelectAll"
            @on-select-all-cancel="onSelectAllCancel"
            @on-selection-change="onSelectionChange"
            @on-sort-change="onSortChange"
            @on-filter-change="onFilterChange"
            @on-row-click="onRowClick"
            @on-row-dblclick="onRowDblclick"
            @on-expand="onExpand"
        >
            <template slot="header">
                <slot name="header"></slot>
            </template>
            <slot name="footer">
                <template slot="footer">
                    <div style="display: flex;">
                        <div style="flex: 1;"></div>
                        <Page
                            style="padding: 0 10px;"
                            :current="current"
                            :total="total"
                            :page-size="pageSize"
                            :page-size-opts="pageSizeOpts"
                            :placement="placement"
                            :size="pageComponentSize"
                            :simple="simple"
                            :show-total="true"
                            :show-elevator="showElevator"
                            :show-sizer="true"
                            :class-name="className"
                            :styles="styles"
                            :transfer="transfer"
                            :prev-text="prevText"
                            :next-text="nextText"
                            @on-change="onPageNoChange"
                            @on-page-size-change="onPageSizeChange"
                        ><slot name="pageSlot"></slot></Page>
                    </div>
                </template>
            </slot>
            <template slot="loading">
                <slot name="loading"></slot>
            </template>
        </Table>
    </div>
</template>

<script>
    export default {
        props: [
            'data', 'columns', 'stripe', 'border', 'showHeader', 'width', 'height', 'loading',
            'disabledHover', 'highlightRow', 'rowClassName', 'size', 'noDataText', 'noFilteredDataText',
            'setRef', 'current', 'total', 'pageSize', 'pageSizeOpts', 'placement', 'pageComponentSize',
            'simple', 'showTotal', 'showElevator', 'className', 'styles', 'transfer', 'prevText',
            'nextText',
        ],
        data() {
            return {};
        },
        mounted() {
            if (this.setRef) {
                this.setRef(this.$refs.table);
            }
        },
        methods: {
            onCurrentChange() {
                this.$emit('on-current-change');
            },
            onSelect() {
                this.$emit('on-select');
            },
            onSelectCancel() {
                this.$emit('on-select-cancel');
            },
            onSelectAll() {
                this.$emit('on-select-all');
            },
            onSelectAllCancel() {
                this.$emit('on-select-all-cancel');
            },
            onSelectionChange() {
                this.$emit('on-selection-change');
            },
            onSortChange() {
                this.$emit('on-sort-change');
            },
            onFilterChange() {
                this.$emit('on-filter-change');
            },
            onRowClick() {
                this.$emit('on-row-click');
            },
            onRowDblclick() {
                this.$emit('on-row-dblclick');
            },
            onExpand() {
                this.$emit('on-expand');
            },
            onPageNoChange() {
                this.$emit('on-page-no-change');
            },
            onPageSizeChange(size) {
                this.$emit('on-page-size-change', size);
            },
        },
    };
</script>
