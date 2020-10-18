import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'
import { clearActiveClass, hasSelection } from '../../utils/common'
import { domQuerySelectorAll, execCommand } from '../../utils/dom'

export default function (): HTMLElement {
  // this.options = pluginOption
  let pluginOption: pluginOptions = {
    name: 'bold',
    openType: 'click',
    callback: function (pluginDom) {
      if (hasSelection()) {
        clearActiveClass('.m-n-toolbar-item')
        pluginDom.classList.add('m-n-toolbar-active')
        execCommand('Bold')
      }
    }
  }
  let plugin = createPlugin(pluginOption)
  console.log(plugin)
  let iconfontDom = plugin.getElementsByClassName('m-n-icon')[0]
  iconfontDom.classList.add('icon-bold')
  return plugin
}
