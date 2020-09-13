export interface ValidateRule {
    required?: boolean;
    pattern?: RegExp;
    trigger?: 'blur' | 'validate';
    /** 最大长度 */
    max?: number;
    min?: number;
    message?: string;
}

export interface ItemFormBasicSectionMeta {
    type: string;
    key: string;
    validates?: ValidateRule[];
}

export interface ItemInputMeta extends ItemFormBasicSectionMeta {
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
    };
}

export interface ItemSelectMeta extends ItemFormBasicSectionMeta {
    type: 'ItemSelect';
    props?: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        options?: ValueText[];
    };
}

export interface ItemCascaderMeta extends ItemFormBasicSectionMeta {
    type: 'ItemCascader';
    props: {
        title?: string;
        titleHint?: string;
        placeholder?: string;
        /** 获取列表数据 */
        fetchList: <T extends CascaderItem>(item: T) => T[] | Promise<T[]>;
    };
}

export interface ItemListMeta extends ItemFormBasicSectionMeta {
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
    };
}

export interface ItemTextareaMeta extends ItemFormBasicSectionMeta {
    type: 'ItemTextarea';
    props?: {
        /** 标题 */
        title?: string;
        /** 副标题 */
        titleHint?: string;
        /** 占位 */
        placeholder?: string;
        max?: number;
    };
}

export interface ItemButtonGroupMeta extends ItemFormBasicSectionMeta {
    type: 'ItemButtonGroup';
    props?: {
        title?: string;
        titleHint?: string;
        options?: ValueText[];
        readonly?: boolean;
    };
}

export interface ItemUploaderMeta extends ItemFormBasicSectionMeta {
    type: 'ItemUploader';
    props: {
        /** 标题 */
        title?: string;
        /** 副标题 */
        titleHint?: string;
        /** 用于发送上传请求 */
        httpRequest: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
    };
}

export interface ItemMultiUploaderMeta extends ItemFormBasicSectionMeta {
    type: 'ItemMultiUploader';
    props: {
        /** 标题 */
        title?: string;
        /** 副标题 */
        titleHint?: string;
        size?: number;
        httpRequest: (imageInfo: ImageInfo) => ImageInfo | Promise<ImageInfo>;
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
