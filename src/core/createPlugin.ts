import { Editor, pluginOptions } from '../types/index'
import { domCreateElement } from '../utils/dom'
import { showDropDownTemp } from './dropDownTemp'
export function createPlugin(
  editor: Editor,
  pluginOptions: pluginOptions
): HTMLElement {
  let pluginDom = domCreateElement('button')
  pluginDom.onclick = () => {
    if (pluginOptions.isExtenal && !pluginOptions.callback) {
      console.error('外置组件需要传入callback')
    } else {
      if (pluginOptions.openType === 'dropDown' && pluginOptions.dropDownList) {
        let position = pluginDom.getBoundingClientRect()
        const yOffset = pluginDom.offsetHeight
        showDropDownTemp(pluginOptions, position, yOffset)
      }
      pluginOptions.callback(pluginDom)
    }
  }
  pluginDom.classList.add('m-n-toolbar-item')
  pluginDom.innerHTML = `<i class="m-n-icon"></i>`
  let iconfontDom = pluginDom.getElementsByClassName('m-n-icon')[0]
  iconfontDom.classList.add(`${pluginOptions.iconName}`)
  return pluginDom
}
