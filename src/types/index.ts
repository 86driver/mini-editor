export interface Options {
  placeholder?: string // 空文本占位符
  width?: number // 编辑器宽度
  internalToolbar?: Array<string> // 选择的内置组件
  expandToolbar?: Array<pluginOptions> // 扩展组件
}

export interface dropDownItems {
  label: string
  [propName: string]: any
}

export interface pluginOptions {
  name: string
  openType?: string // click，dropDown
  dropDownList?: Array<dropDownItems>
  isExtenal?: boolean
  iconName?: string
  callback: (...val: any) => any
  dropDownCallback?: (...val: any) => any
}

export class Editor {
  options: object
  el: string
  toolbarDom!: HTMLElement
  container!: HTMLElement
  savedRange!: Range
  constructor(el: string, options: object) {
    this.el = el
    this.options = options
  }
  getHtml!: () => string
  restoreRange!: () => void
  saveRange!: () => void
  isEmptyRange!: () => boolean
}
