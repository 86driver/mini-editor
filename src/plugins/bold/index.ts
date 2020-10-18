import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'
import { hasClass, hasSelection } from '../../utils/common'
import { execCommand } from '../../utils/dom'

export default function (): HTMLElement {
  let pluginOption: pluginOptions = {
    name: 'bold',
    openType: 'click',
    callback: function (pluginDom) {
      if (hasSelection()) {
        if (hasClass(pluginDom, 'm-n-toolbar-active')) {
          pluginDom.classList.remove('m-n-toolbar-active')
        } else {
          pluginDom.classList.add('m-n-toolbar-active')
        }
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
