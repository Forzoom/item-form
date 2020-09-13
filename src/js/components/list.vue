<template>

    <van-popup :value="value" class="list-popup" position="bottom">
        <li v-if="title" class="title">{{title}}</li>
        <ul>
            <li v-for="(item, index) in list"
                :key="index"
                @click="onClickItem(item)"
                class="clearfix"
                :class="{'color-red': multipleValue[item.value] || item.value === value}">
                <div class="left">{{item.text}}</div>
            </li>
        </ul>
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
<script lang="js">

export default {
    name: 'List',

    props: {
        title: { type: String },

        /** 是否显示 */
        value: { required: true, type: Boolean },

        /** 选择列表 */
        list: { type: Array, default() { return []; } },

        /** 是否多选 */
        multiple: { type: Boolean, default: false },

        /** 按钮文本 */
        actionText: { type: String },
    },

    data: function data() {
        return {
            multipleValue: {},
        };
    },

    computed: {},
    watch: {},

    methods: {
        /**
         * 选择队伍
         */
        onClickItem: function(item) {
            if (!this.multiple) {
                this.$emit('select', item);
                this.$emit('input', false);
            } else {
                this.$set(this.multipleValue, item.value, !this.multipleValue[item.value]);
            }
        },

        onClickAction: function() {
            if (this.multipleValue) {
                this.$emit('action', this.multipleValue);
            } else {
                this.$emit('action');
            }
        },
    },
};
</script>
<style lang="less">

@import '../../lib/style/mixins.less';

.list-popup {
    height: 100%;
    color: @color-font-1;
    overflow: scroll;
    .color-red {
        color: @color-red;
    }

    .popup {
        height: 100%;
        background-color: @color-white;
        .btn-cancel {
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
            border-radius: 0;
        }
    }
    .title {
        position: relative;
        font-size: 16px;
        line-height: 44px;
        font-weight: normal;
        color: @color-font-1;
        text-align: center;
        border-bottom: 0;
    }
    ul {
        background-color: #fff;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        .left {
            float: left;
        }
        .right {
            float: right;
        }
        li {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            box-sizing: border-box;
            padding: 0px 15px;
            height: 45px;
            font-size: 16px;
            line-height: 45px;
            border-bottom: solid 1px #efefef;
        }
        li:last-child {
            margin-bottom: 45px;
            border-bottom: solid 1px #efefef;
        }
    }
    .bottom-fixed {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
}


</style>
