export interface Options {
    placeholder?: string;
    width?: number;
    internalToolbar?: Array<string>;
    expandToolbar?: Array<pluginOptions>;
}
export interface dropDownItems {
    label: string;
    [propName: string]: any;
}
export interface pluginOptions {
    name: string;
    openType?: string;
    dropDownList?: Array<dropDownItems>;
    isExtenal?: boolean;
    iconName?: string;
    callback: (...val: any) => any;
    dropDownCallback?: (...val: any) => any;
}
export declare class Editor {
    options: object;
    el: string;
    toolbarDom: HTMLElement;
    container: HTMLElement;
    savedRange: Range | null;
    constructor(el: string, options: object);
    getHtml: () => string;
    getSavedRange: () => Range | null;
}
