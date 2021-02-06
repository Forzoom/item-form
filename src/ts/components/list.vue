<template>
    <van-popup :value="value" class="if-comp-list" position="bottom">
        <div v-if="title" class="title">{{title}}</div>
        <div class="if-comp-list__list">
            <div v-for="(item, index) in list"
                :key="index"
                @click="onClickItem(item)"
                class="if-comp-list__list-item clearfix"
                :class="{'color-red': multipleValue[item.value] || item.value === value}">
                <div class="left">{{item.text}}</div>
            </div>
        </div>
        <MobileButton
            name="white-red"
            tag="div"
            class="btn-large bottom-fixed btn-rect"
            :class-list="[ 'btn-cancel' ]"
            :is-block="true"
            @click="onClickAction">
            <div>{{actionText}}</div>
        </MobileButton>
    </van-popup>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ValueText } from 'types/form';

@Component({
    name: 'List',
})
export default class List extends Vue {
    @Prop({ type: String }) public title?: string;
    /** 是否显示 */
    @Prop({ required: true, type: Boolean }) public value!: boolean;
    /** 选择列表 */
    @Prop({ type: Array, default() { return []; } }) public list!: ValueText[];
    /** 是否多选 */
    @Prop({ type: Boolean, default: false }) public multiple!: boolean;
    /** 按钮文本 */
    @Prop({ type: String }) public actionText?: string;

    public multipleValue: any = {};

    /**
     * 选择队伍
     */
    public onClickItem(item: ValueText) {
        if (!this.multiple) {
            this.$emit('select', item);
            this.$emit('input', false);
        } else {
            this.$set(this.multipleValue, item.value, !this.multipleValue[item.value]);
        }
    }

    public onClickAction() {
        if (this.multipleValue) {
            this.$emit('action', this.multipleValue);
        } else {
            this.$emit('action');
        }
    }
}
</script>

<style lang="less">
@import '../../lib/style/mixins.less';

.if-comp-list {
    height: 100%;
    color: @color-font-1;
    overflow: scroll;
    .color-red {
        color: @color-red;
    }

    .title {
        position: relative;
        padding: 10px 0;
        font-size: 16px;
        line-height: 24px;
        font-weight: normal;
        color: @color-font-1;
        text-align: center;
        border-bottom: 0;
    }
    &__list {
        background-color: #fff;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        .left {
            float: left;
            white-space: normal;
        }
        .right {
            float: right;
        }
    }
    &__list-item {
        padding: 10px 15px;
        font-size: 16px;
        line-height: 24px;
        border-bottom: solid 1px #efefef;
        white-space: normal;
        box-sizing: border-box;
    }
    &__list-item:last-child {
        margin-bottom: 45px;
        border-bottom: solid 1px #efefef;
    }
    .bottom-fixed {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
}

</style>
