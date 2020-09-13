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
<script lang="js">
import ItemTitle from './title.vue';
import List from '../components/list.vue';

export default {
    name: 'ItemList',

    components: {
        ItemTitle,
        List,
    },

    props: {
        /** title */
        title: { type: String },

        /** titleHint */
        titleHint: { type: String },

        /** listTitle */
        listTitle: { type: String },

        /** value */
        value: {},

        /** 选项 */
        options: {},

        /** 是否允许多选 */
        multiple: { type: Boolean, default: false },

        /** 文本分割 */
        separator: { type: String, default: '、' },

        /** 占位 */
        placeholder: { type: String },
    },

    data: function data() {
        return {
            visible: false,
        };
    },

    computed: {
        textStr: function() {
            if (this.multiple) {
                const map = {};
                const len = this.optionList.length;
                for (let i = 0; i < len; i++) {
                    const option = this.optionList[i];
                    map[option.value] = option.text;
                }
                return this.value.length > 0 ? this.value.map((value) => map[value]).join(this.separator) : this.placeholder;
            } else {
                return this.value || this.placeholder;
            }
        },

        isPlaceholder: function() {
            return this.multiple ? !this.value.length : !this.value;
        },

        optionList: function() {
            if (!this.options) {
                return [];
            } else if (typeof this.options === 'function') {
                return this.options();
            } else {
                return this.options;
            }
        },
    },

    watch: {},

    methods: {
        onClickSubject: function() {
            this.visible = true;
        },

        onClickAction: function(mutlipleValue) {
            this.$emit('input', Object.keys(mutlipleValue).filter((key) => mutlipleValue[key]));
            this.visible = false;
        },
    },
};
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
