import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'
import { execCommand } from '../../utils/dom'

export default function (): HTMLElement {
  // this.options = pluginOption
  let pluginOption: pluginOptions = {
    name: 'bold',
    openType: 'click',
    callback: function () {
      execCommand('Bold')
    }
  }
  let plugin = createPlugin(pluginOption)
  let iconfontDom = plugin.getElementsByTagName('i')[0]
  iconfontDom.classList.add('icon-bold')
  return plugin
}
