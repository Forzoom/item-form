<template>

    <div class="item-multi-uploader">
        <ItemTitle :title="title" :titleHint="titleHint" />
        <div class="clearfix">
            <WechatUploader
                ref="uploader"
                :size="size"
                :can-modify="true"
                @add="onAdd"
                @remove="onRemove"
                @load="onLoad"
                @finish="onFinish">
            </WechatUploader>
        </div>
    </div>

</template>
<script lang="js">
import ItemTitle from './title.vue';

export default {
    name: 'ItemMultiUploader',

    components: {
        ItemTitle,
    },

    props: {
        /** title */
        title: { type: String },

        /** titleHint */
        titleHint: { type: String },

        /** 数据 */
        value: {},

        size: { type: Number, default: 9 },

        /** 上传函数 */
        httpRequest: { required: true, type: Function },
    },

    data: function data() {
        return {};
    },

    computed: {},
    watch: {},

    methods: {
        /**
         * 数据开始加载
         */
        onLoad: function() {
            this.$emit('load');
        },

        /**
         * 图片加载完成
         */
        onFinish: function() {
            this.$emit('finish');
        },

        /**
         * add事件
         *
         *  {image, serverId}
         */
        onAdd: function(...args) {
            const $uploader = this.$refs.uploader;
            const images = $uploader.getImages();

            this.$emit('input', images.map((image) => {
                const info = {
                    key: image.serverId,
                    url: image.image,
                    // @ts-ignore
                    mode: image.mode || 'wechat',
                };
                return info;
            }));

            this.$emit('add', ...args);
        },

        /**
         * remove事件
         *
         *  {} 可能没有数据
         */
        onRemove: function(...args) {
            const $uploader = this.$refs.uploader;
            const images = $uploader.getImages();

            this.$emit('input', images.map((image) => {
                const info = {
                    key: image.serverId,
                    url: image.image,
                    // @ts-ignore
                    mode: image.mode || 'wechat',
                };
                return info;
            }));

            this.$emit('remove', ...args);
        },

        /**
         * 完成上传
         */
        upload: async function() {
            const rdatas = await Promise.all((this.value || []).map((image) => image.mode === 'wechat' ? this.httpRequest(image) : null));
            for (let i = 0, len = rdatas.length; i < len; i++) {
                const rdata = rdatas[i];
                if (rdata === null) {
                    continue;
                }
                this.value[i].key = rdata.key;
                this.value[i].url = rdata.url;
                this.value[i].mode = 'file';
            }

            this.$emit('input', this.value);
        },

        /**
         * 生命周期
         */
        beforeSubmit: async function() {
            await this.upload();
        },
    },

    mounted: function() {
        if (this.value) {
            this.$refs.uploader.setImages(this.value.map((item) => {
                return {
                    image: item.url,
                    serverId: item.key,
                    mode: item.mode || 'file',
                };
            }));
        }
    },
};
</script>
<style lang="less">

@import "../../lib/style/mixins.less";

.item-multi-uploader {
    @uploader-wrap-padding: 20px;

    @uploader-image-padding-half: 2px;
    @uploader-image-size: 109px;
    @uploader-image-border-radius: 2px;

    @request-cross-color: #ccc;
    @request-cross-active-color: #999;

    @remove-button-size: 11px;
    @border-width: 2px;

    @border-color: #ccc;
    @active-border-color: #999;

    // 图片上传
    .uploader-wrap {
        padding: 10px - @uploader-image-padding-half @uploader-wrap-padding - @uploader-image-padding-half;
    }
    .ro-uploader-wrap {
        display: block;
        .ro-uploader-image-wrap {
            float: left;
            position: relative;
            margin-right: 0;
            padding: @uploader-image-padding-half;
            .ro-uploader-image {
                vertical-align: middle;
                width: @uploader-image-size !important;
                height: @uploader-image-size !important;
                background-position: center center;
                border-radius: @uploader-image-border-radius;
            }
            .ro-uploader-remove {
                position: absolute;
                width: @remove-button-size !important;
                height: @remove-button-size !important;
                font-size: @remove-button-size;
                line-height: @remove-button-size;
                color: rgba(255, 255, 255, 0.6);
                background-color: rgba(255, 255, 255, 0.8);
                right: @uploader-image-padding-half + 4;
                top: @uploader-image-padding-half + 4;
                border-radius: 50%;
                &:before,
                &:after {
                    background-color: #ccc;
                    transform: translate(-50%, -50%) rotateZ(45deg);
                }
                &:before {
                    width: @border-width - 1;
                    height: @remove-button-size - 4 !important;
                }
                &:after {
                    width: @remove-button-size - 4 !important;
                    height: @border-width - 1;
                }
                &:active {
                    border-color: @color-white;
                    &:before,
                    &:after {
                        background-color: @color-white;
                    }
                }
            }
        }
        .ro-uploader-request {
            position: relative;
            width: @uploader-image-size !important;
            height: @uploader-image-size !important;
            border: 1px dashed #ccc;
            margin: @uploader-image-padding-half 0px 0px @uploader-image-padding-half;
            border-radius: @uploader-image-border-radius;
            box-sizing: border-box;
            &:before,
            &:after {
                background-color: @request-cross-color;
            }
            &:before {
                width: @border-width + 1;
                height: @uploader-image-size / 3;
                border-radius: @border-width + 1;
                background-color: @request-cross-active-color;
            }
            &:after {
                width: @uploader-image-size / 3;
                height: @border-width + 1;
                border-radius: @border-width + 1;
                background-color: @request-cross-active-color;
            }
            &:active {
                border-color: @active-border-color;
                &:before,
                &:after {
                    background-color: @active-border-color;
                }
            }
        }
    }
}


</style>
