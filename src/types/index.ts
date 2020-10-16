export interface Options {
  placeholder?: string // 空文本占位符
  width?: number // 编辑器宽度
  // internalToolbar: Array<string> // 选择的内置组件
  // expandToolbar: Array<object> // 扩展组件
}

// tslint:disable-next-line: class-name
export interface pluginOptions {
  openType: string // click，dropDown
  showType: string // img text
  label: string // 展示内容
  isExtenal?: boolean
  callback?: (val?: any) => any
}
