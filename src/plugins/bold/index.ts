import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'
import { execCommand } from '../../utils/dom'

export default function (): HTMLElement {
  // this.options = pluginOption
  let pluginOption: pluginOptions = {
    name: 'bold',
    openType: 'click',
    showType: 'text',
    label: '加粗',
    callback: function () {
      execCommand('Bold')
    }
  }
  let plugin = createPlugin(pluginOption)
  return plugin
}
