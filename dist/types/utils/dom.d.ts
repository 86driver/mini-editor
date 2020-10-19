export declare function domQuerySelector(el: string): HTMLElement;
export declare function domQuerySelectorAll(el: string): NodeListOf<Element>;
export declare function domGetElementById(el: string): HTMLElement;
export declare function domInsert(fatherdom: HTMLElement, childdom: HTMLElement | DocumentFragment): void;
export declare function domCreateElement(el: string): HTMLElement;
export declare function domCreateDocumentFragment(): DocumentFragment;
export declare function execCommand(aCommandName: string, aShowDefaultUI?: boolean, aValueArgument?: string): void;
