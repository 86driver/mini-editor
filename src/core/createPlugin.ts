import { pluginOptions } from '../types/index'
import { domCreateElement } from '../utils/dom'
export function createPlugin(pluginOptions: pluginOptions): HTMLElement {
  let pluginDom = domCreateElement('button')
  pluginDom.onclick = () => {
    if (pluginOptions.isExtenal && !pluginOptions.callback) {
      console.error('外置组件需要传入callback')
    } else {
      pluginOptions.callback()
    }
  }
  pluginDom.classList.add('m-n-toolbar-item')
  pluginDom.innerHTML = `<i class="m-n-icon"></i>`
  return pluginDom
}
