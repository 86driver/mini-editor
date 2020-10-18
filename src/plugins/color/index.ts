import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'

export default function (): HTMLElement {
  // this.options = pluginOption
  let pluginOption: pluginOptions = {
    name: 'color',
    openType: 'click',
    showType: 'text',
    label: '颜色',
    callback: function () {
      console.log('设置颜色')
    }
  }
  let plugin = createPlugin(pluginOption)
  return plugin
}
