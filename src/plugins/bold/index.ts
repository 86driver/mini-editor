import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'
// 返回的any类型需要些声明文件
export function boldPlugin(pluginOtion: pluginOptions): any {
  // this.options = pluginOtion
  let plugin = createPlugin(pluginOtion)
  // 内置组件重写onclick方法
  plugin.onclick = function () {
    console.log('内置组件方法执行')
  }
  return plugin
}
