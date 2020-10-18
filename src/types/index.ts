export interface Options {
  placeholder?: string // 空文本占位符
  width?: number // 编辑器宽度
  internalToolbar?: Array<string> // 选择的内置组件
  expandToolbar?: Array<pluginOptions> // 扩展组件
}

// tslint:disable-next-line: class-name
export interface pluginOptions {
  name: string
  openType?: string // click，dropDown
  showType: string // img text
  label: string // 展示内容
  isExtenal?: boolean
  callback: (val?: any) => any
}

export class Editor {
  options: object
  el: string
  toolbarDom!: HTMLElement
  container!: HTMLElement
  constructor(el: string, options: object) {
    this.el = el
    this.options = options
  }
  getHtml!: () => string
}
