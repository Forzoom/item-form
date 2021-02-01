<template>
    <div class="item-title">
        {{title}}
        <span v-if="isRequired" class="item-title__asterisk">*</span>
        <span v-if="titleHint" class="tips">{{titleHint}}</span>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'ItemTitle',
})
export default class ItemTitle extends Vue {
    @Prop({
        type: String,
    })
    public title: any;

    @Prop({
        type: String,
    })
    public titleHint: any;

    @Prop({
        type: Boolean,
        default: false,
    })
    public isRequired: any;
}
</script>
<style lang="less">

@import "../../lib/style/mixins.less";

.item-title {
    padding: 16px 0px;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    &__asterisk {
        color: #FF1D1D;
    }
    .tips {
        color: #999;
        font-size: 12px;
    }
}

</style>
