### 说明

本库一般配合`@forzoom/form-renderer`使用，也可以单独使用，其中包含了一些表单会使用到的Vue组件。

### 例子

```typescript

// 全局注册组件
import { ItemInput, ItemSelect, ItemCascader, ItemButtonGroup, ItemUploader, ItemTextarea, ItemList, ItemMultiUploader } from '@forzoom/item-form';

const list = [
    ItemInput,
    ItemSelect,
    ItemCascader,
    ItemButtonGroup,
    ItemUploader,
    ItemTextarea,
    ItemList,
    ItemMultiUploader;
];

for (const component of list) {
    Vue.component(component.name, component);
}

// page.vue

import { Component, Vue, Watch } from 'vue-property-decorator';
import { Renderer } from '@forzoom/form-renderer';
import { FormPageMeta } from '@forzoom/form-renderer/types/form';
import { ItemFormSectionMeta } from '@forzoom/item-form/types/form';

@Component
export default class Page extends Vue {
    /** meta用于传入Renderer中 */
    public get meta(): Array<FormPageMeta<ItemFormSectionMeta>> {
        const sections: ItemFormSectionMeta[] = [
            {
                type: 'ItemUploader',
                key: 'avatar',
                props: {
                    title: '头像',
                    httpRequest: async (image) => {
                        const rdata = await store.dispatch('uploadMedia', {
                            mediaId: image.key,
                            type: 'avatar',
                        });
                        return rdata.data;
                    },
                },
                validates: [
                    { trigger: 'validate', required: true, message: '请上传头像' },
                ],
            },
        ];
        return sections;
    }

    /**
     * 点击提交
     */
    public async onClickSubmit() {
        // 当使用了ItemUploader、ItemMultiUploader组件时，在提交代码之前应该调用FormRenderer的beforeSubmit函数，以确保Uploader完成上传逻辑
        const renderer = this.$refs.form as FormRendererComponent;
        await renderer.beforeSubmit();
    }
}

```

### Todo

1. uploader支持普通网页上传
