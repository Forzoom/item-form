<template>
    <div class="if-comp-uploader" :class="{'blank': blank}">
        <WechatUploader v-if="type === 'wechat'"
            ref="uploader"
            :size="1"
            :can-modify="true"
            :container-class="[ 'loaderImg' ]"
            :container-style="{ 'opacity': opacity, 'z-index': 1, position: 'relative' }"
            :request-class="[ 'loaderImg' ]"
            :image-class="[ 'loaderImg']"
            @add="onAdd"
            @remove="onRemove"
            @load="onLoad"
            @finish="onFinish">
        </WechatUploader>
        <InputUploader v-else-if="type === 'input'"
            ref="uploader"
            :size="1"
            :can-modify="true"
            :accept="accept"
            :container-class="[ 'loaderImg' ]"
            :container-style="{ 'opacity': opacity, 'z-index': 1, position: 'relative' }"
            :request-class="[ 'loaderImg' ]"
            :image-class="[ 'loaderImg']"
            @add="onAdd"
            @remove="onRemove"
            @load="onLoad"
            @finish="onFinish">
        </InputUploader>
        <div class="uploader-mock-background" :style="backgroundStyle">
            <p>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconxiangji1"></use>
                </svg>
            </p>
            <p>{{hint}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import {
    InputUploaderComponent,
    FileImage,
    WechatImage,
    WechatUploaderComponent,
    WechatUploaderFactory,
    InputUploaderFactory,
} from '@forzoom/uploader';

const WechatUploader = WechatUploaderFactory(Vue, { transformWXLocalImageData: true });
const InputUploader = InputUploaderFactory(Vue);

/**
 * 班级头像上传逻辑
 *
 * - @add 数据添加
 * - @remove 数据删除
 */
@Component({
    name: 'CommonUploader',
    components: {
        WechatUploader,
        InputUploader,
    },
})
export default class CommonUploader extends Vue {
    /** 提示内容 */
    @Prop({ type: String }) public hint!: any;
    /** 背景样式类 */
    @Prop({ type: [ Object, Array] }) public backgroundStyle!: any;
    /** 是否未填写 */
    @Prop({ type: Boolean, default: false }) public blank!: any;
    /** 类型 */
    @Prop({ type: String, default: 'wechat' }) public type!: 'wechat' | 'input';
    /** 接受的文件类型，默认为 image/* ，只支持InputUploader中生效 */
    @Prop({ type: String, default: 'image/*' }) public accept!: string;

    // 图片内容
    public image: string | null = null;

    public get opacity() {
        return this.image ? 1 : 0;
    }

    /**
     * 获得元素
     *
     * @return {} uploader
     */
    public getImage() {
        return this.image;
    }
    /**
     * 设置头像
     *
     * @param {} image 头像内容
     */
    public setImage(image: string) {
        const $uploader = this.$refs.uploader as (WechatUploaderComponent | InputUploaderComponent);
        $uploader.setImages([
            {
                url: image,
                image,
            },
        ]);
        this.image = image;
    }
    /**
     * 删除当前的图片信息
     */
    public removeImage() {
        const $uploader = this.$refs.uploader as InputUploaderComponent;
        $uploader.setImages([]);
    }
    /**
     * 数据开始加载
     */
    public onLoad() {
        this.$emit('load');
    }
    /**
     * 图片加载完成
     */
    public onFinish() {
        this.$emit('finish');
    }
    /**
     * add事件
     *
     *  {image, serverId}
     */
    public onAdd(...args: WechatImage[] | FileImage[]) {
        const $uploader = this.$refs.uploader as InputUploaderComponent;
        const images = $uploader.getImages();
        this.image = images[0].url;
        this.$emit('add', ...args);
    }
    /**
     * remove事件
     *
     *  {} 可能没有数据
     */
    public onRemove(...args: WechatImage[] | FileImage[]) {
        this.image = null;
        this.$emit('remove', ...args);
    }
}
</script>

<style lang="less">
@import "../../lib/style/mixins.less";

.if-comp-uploader {
    position: relative;
    width: 84px;
    height: 84px;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    background-color: #fafafa;
    margin: 0 auto;
    overflow: hidden;
    &.blank {
        border: 1px solid @color-red;
        .uploader-mock-background {
            color: @color-red;
        }
    }
    .icon {
        font-size: 23px;
    }

    // 对于uploader样式的更正
    .ro-uploader-wrap {
        .ro-uploader-request.loaderImg {
            width: 84px !important;
            height: 84px !important;
            margin-right: 0;
        }
        .ro-uploader-image-wrap {
            position: relative;
            .ro-uploader-image.loaderImg {
                width: 84px !important;
                height: 84px !important;
            }
            .remove-wrapper {
                position: absolute;
                width: 84px !important;
                height: 23px !important;
                left: 0;
                top: 61px;
            }
            .ro-uploader-remove {
                position: absolute;
                width: 84px !important;
                height: 23px !important;
                line-height: 23px !important;
                font-size: 14px !important;
                left: 0;
                top: 0 !important;
                color: #666;
                background-color: rgba(0, 0, 0, 0.5) !important;
                &:before {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100% !important;
                    height: 0 !important;
                    content: '更换图片';
                    color: @color-white;
                    font-size: 14px;
                    text-align: center;
                    transform: translate(-50%,-50%) rotate(0deg);
                }
                &:after {
                    width: 0 !important;
                    height: 0 !important;
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
    }

    .loaderImg {
        width: 84px !important;
        height: 84px !important;
    }
    .upLoaderImg {
        width: 84px;
        height: 84px;
        position: absolute;
    }

    .uploader-mock-background {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #000;
        text-align: center;
        transform: translate(-50%, -50%);
    }
}
</style>