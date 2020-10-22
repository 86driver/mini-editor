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
      editor.restoreRange()
      if (pluginOptions.openType === 'dropDown' && pluginOptions.dropDownList) {
        let position = pluginDom.getBoundingClientRect()
        const yOffset = pluginDom.offsetHeight
        showDropDownTemp(pluginOptions, position, yOffset)
      }
      pluginOptions.callback(pluginDom)
      // 操作结束之后更新选区
      editor.saveRange()
    }
  }
  pluginDom.classList.add('m-n-toolbar-item')
  pluginDom.innerHTML = `<i class="m-n-icon"></i>`
  let iconfontDom = pluginDom.getElementsByClassName('m-n-icon')[0]
  iconfontDom.classList.add(`${pluginOptions.iconName}`)
  return pluginDom
}
