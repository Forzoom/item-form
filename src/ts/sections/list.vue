<template>
    <div class="item-list">
        <ItemTitle :title="title" :titleHint="titleHint" />
        <div class="item-list__inner" :class="{placeholder: isPlaceholder}" @click="onClickSubject">
            {{textStr}}
        </div>

        <List v-model="visible"
            :list="optionList"
            :title="listTitle"
            actionText="确认"
            :multiple="multiple"
            @action="onClickAction" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ValueText } from 'types/form';
import ItemTitle from './title.vue';
import List from '../components/list.vue';

@Component({
    name: 'ItemList',
    components: {
        ItemTitle,
        List,
    },
})
export default class ItemList extends Vue {
    /** title */
    @Prop({ type: String }) public title?: string;
    /** titleHint */
    @Prop({ type: String }) public titleHint?: string;
    /** listTitle */
    @Prop({ type: String }) public listTitle?: string;
    /** value */
    @Prop() public value: any;
    /** 选项 */
    @Prop() public options?: ValueText[] | (() => ValueText[]);
    /** 是否允许多选 */
    @Prop({ type: Boolean, default: false }) public multiple!: boolean;
    /** 文本分割 */
    @Prop({ type: String, default: '、' }) public separator!: string;
    /** 占位 */
    @Prop({ type: String }) public placeholder?: string;

    public visible = false;

    public get textStr() {
        if (this.multiple) {
            const map: { [value: string]: string } = {};
            const len = this.optionList.length;
            for (let i = 0; i < len; i++) {
                const option = this.optionList[i];
                map[option.value] = option.text;
            }
            return this.value.length > 0 ? this.value.map((value: any) => map[value]).join(this.separator) : this.placeholder;
        } else {
            return this.value || this.placeholder;
        }
    }

    public get isPlaceholder() {
        return this.multiple ? !this.value.length : !this.value;
    }

    public get optionList() {
        if (!this.options) {
            return [];
        } else if (typeof this.options === 'function') {
            return this.options();
        } else {
            return this.options;
        }
    }

    public onClickSubject() {
        this.visible = true;
    }

    public onClickAction(mutlipleValue: any) {
        this.$emit('input', Object.keys(mutlipleValue).filter((key) => mutlipleValue[key]));
        this.visible = false;
    }
}
</script>

<style lang="less">
@import "../../lib/style/mixins.less";

.item-list {
    &__inner {
        padding: 10px 15px;
        font-size: 14px;
        line-height: 25px;
        background-color: #f2f2f2;
        border-radius: 5px;
    }
    .placeholder {
        color: #c8c8c8;
    }
}
</style>