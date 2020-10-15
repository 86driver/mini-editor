export interface Options {
  el: string // 挂载对象
  placeholder?: string // 空文本占位符
  width?: number // 编辑器宽度
  internalToolbar: Array<string> // 选择的内置组件
  expandToolbar: Array<object> // 扩展组件
}
