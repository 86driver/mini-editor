import { createPlugin } from '../../core/createPlugin'
import { pluginOptions } from '../../types/index'
import { clearActiveClass } from '../../utils/common'

export default function (): HTMLElement {
  // this.options = pluginOption
  let pluginOption: pluginOptions = {
    name: 'color',
    openType: 'click',
    callback: function (pluginDom) {
      console.log('设置颜色')
      // clearActiveClass('.m-n-toolbar-item')
      pluginDom.classList.add('m-n-toolbar-active')
    }
  }
  let plugin = createPlugin(pluginOption)
  let iconfontDom = plugin.getElementsByClassName('m-n-icon')[0]
  iconfontDom.classList.add('icon-ColorLens')
  return plugin
}
