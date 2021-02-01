import { CombinedVueInstance } from 'vue/types/vue';
import { PropsDefinition } from 'vue/types/options';
import { ComponentOptions } from 'vue';
import { ValueText, ImageInfo, CascaderItem } from './form';

// buttonGroup
interface ItemButtonGroupProp {
    title?: string;
    titleHint?: string;
    options: ValueText[];
    readonly?: boolean;
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemButtonGroupComponent = CombinedVueInstance<Vue, object, object, object, ItemButtonGroupProp>;
export type ItemButtonGroupComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemButtonGroupProp>, ItemButtonGroupProp>;

export const ItemButtonGroup: ItemButtonGroupComponentOptions;

// cascader
interface ItemCascaderProp {
    placeholder?: string;
    fetchList: <T extends CascaderItem>(item: T) => T[] | Promise<T[]>;
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemCascaderComponent = CombinedVueInstance<Vue, object, object, object, ItemCascaderProp>;
export type ItemCascaderComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemCascaderProp>, ItemCascaderProp>;

export const ItemCascader: ItemCascaderComponentOptions;

// input
interface ItemInputProp {
    title?: string;
    titleHint?: string;
    placeholder?: string;
    parser?: Function;
    formatter?: Function;
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemInputComponent = CombinedVueInstance<Vue, object, object, object, ItemInputProp>;
export type ItemInputComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemInputProp>, ItemInputProp>;

export const ItemInput: ItemInputComponentOptions;

// list
interface ItemListProp {
    title?: string;
    titleHint?: string;
    placeholder?: string;
    options?: ValueText[] | (() => ValueText[]);
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemListComponent = CombinedVueInstance<Vue, object, object, object, ItemListProp>;
export type ItemListComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemListProp>, ItemListProp>;

export const ItemList: ItemListComponentOptions;

// multiUploader
interface ItemMultiUploaderProp {
    title?: string;
    titleHint?: string;
    size?: number;
    httpRequest: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemMultiUploaderComponent = CombinedVueInstance<Vue, object, object, object, ItemMultiUploaderProp>;
export type ItemMultiUploaderComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemMultiUploaderProp>, ItemMultiUploaderProp>;

export const ItemMultiUploader: ItemMultiUploaderComponentOptions;

// select
interface ItemSelectProp {
    placeholder?: string;
    options?: ValueText[];
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemSelectComponent = CombinedVueInstance<Vue, object, object, object, ItemSelectProp>;
export type ItemSelectComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemSelectProp>, ItemSelectProp>;

export const ItemSelect: ItemSelectComponentOptions;

// textarea
interface ItemTextareaProp {
    max?: number;
    placeholder?: string;
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemTextareaComponent = CombinedVueInstance<Vue, object, object, object, ItemTextareaProp>;
export type ItemTextareaComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemTextareaProp>, ItemTextareaProp>;

export const ItemTextarea: ItemTextareaComponentOptions;

// title
interface ItemTitleProp {
    title?: string;
    titleHint?: string;
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemTitleComponent = CombinedVueInstance<Vue, object, object, object, ItemTitleProp>;
export type ItemTitleComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemTitleProp>, ItemTitleProp>;

export const ItemTitle: ItemTitleComponentOptions;

// uploader
interface ItemUploaderProp {
    title?: string;
    titleHint?: string;
    httpRequest: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
    /** 显示星号 */
    asterisk?: boolean;
}
export type ItemUploaderComponent = CombinedVueInstance<Vue, object, object, object, ItemUploaderProp>;
export type ItemUploaderComponentOptions = ComponentOptions<Vue, object, object, object, PropsDefinition<ItemUploaderProp>, ItemUploaderProp>;

export const ItemUploader: ItemUploaderComponentOptions;
