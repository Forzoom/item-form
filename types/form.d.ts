import { FormSection } from '@forzoom/form-renderer/types/form';

export interface ItemInputMeta extends FormSection {
    type: 'ItemInput';
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        type?: 'text' | 'tel';
        /** 内容最大长度 */
        max?: number;
        parser?: (str: string) => any;
        formatter?: (val: any) => string;
        /** 显示星号 */
        asterisk?: boolean;
    };
}

export interface ItemSelectMeta extends FormSection {
    type: 'ItemSelect';
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        options?: ValueText[];
        /** 显示星号 */
        asterisk?: boolean;
    };
}

export interface ItemCascaderMeta extends FormSection {
    type: 'ItemCascader';
    props: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        /** 获取列表数据 */
        fetchList: <T extends CascaderItem>(item: T) => T[] | Promise<T[]>;
        /** 显示星号 */
        asterisk?: boolean;
    };
}

export interface ItemListMeta extends FormSection {
    type: 'ItemList';
    props?: {
        /** 标题 */
        title?: string;
        /** 副标题 */
        titleHint?: string;
        /** 列表title */
        listTitle?: string;
        /** 占位 */
        placeholder?: string;
        /** 选项 */
        options?: ValueText[] | (() => ValueText[]);
        /** 是否允许多选 */
        multiple?: boolean;
        /** 显示文本分割 */
        separator?: string;
        /** 显示星号 */
        asterisk?: boolean;
    };
}

export interface ItemTextareaMeta extends FormSection {
    type: 'ItemTextarea';
    props?: {
        /** 标题 */
        title?: string;
        /** 副标题 */
        titleHint?: string;
        /** 占位 */
        placeholder?: string;
        max?: number;
        /** 显示星号 */
        asterisk?: boolean;
    };
}

export interface ItemButtonGroupMeta extends FormSection {
    type: 'ItemButtonGroup';
    props?: {
        title?: string;
        titleHint?: string;
        options?: ValueText[];
        readonly?: boolean;
        /** 显示星号 */
        asterisk?: boolean;
    };
}

export interface ItemUploaderMeta extends FormSection {
    type: 'ItemUploader';
    props: {
        /** 标题 */
        title?: string;
        /** 副标题 */
        titleHint?: string;
        /** 用于发送上传请求 */
        httpRequest: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
        /** 显示星号 */
        asterisk?: boolean;
    };
}

export interface ItemMultiUploaderMeta extends FormSection {
    type: 'ItemMultiUploader';
    props: {
        /** 标题 */
        title?: string;
        /** 副标题 */
        titleHint?: string;
        size?: number;
        httpRequest: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
        /** 显示星号 */
        asterisk?: boolean;
    };
}

export type ItemFormSectionMeta = ItemInputMeta | ItemSelectMeta | ItemCascaderMeta | ItemListMeta | ItemTextareaMeta | ItemButtonGroupMeta | ItemUploaderMeta | ItemMultiUploaderMeta;

export interface ValueText {
    value: any;
    text: string;
}

export interface ImageInfo {
    key: string;
    url: string;
    /** file: 上传后的文件链接 wechat: 微信临时文件 */
    mode: 'file' | 'wechat';
}

export interface CascaderItem {
    id: number;
    name: string;
}
