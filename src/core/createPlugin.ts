import { pluginOptions } from '../types/index'
import { domCreateElement } from '../utils/dom'
export function createPlugin(pluginOptions: pluginOptions): HTMLElement {
  let pluginDom = domCreateElement('div')
  pluginDom.onclick = () => {
    if (pluginOptions.openType === 'click') {
      console.log('openType:click')
    }
    if (pluginOptions.isExtenal && pluginOptions.callback) {
      pluginOptions.callback()
    } else {
      console.log(222)
    }
    if (pluginOptions.showType === 'text') {
      pluginDom.innerHTML = `<span>${pluginOptions.label}</span>`
    }
  }
  return pluginDom
}
