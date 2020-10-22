import { Editor, pluginOptions } from '../types/index'
import { removeDropDown } from '../utils/common'
import { domCreateElement, domQuerySelector } from '../utils/dom'
import { showDropDownTemp } from './dropDownTemp'
export function createPlugin(
  editor: Editor,
  pluginOptions: pluginOptions
): HTMLElement {
  let pluginDom = domCreateElement('button')

  if (pluginOptions.openType === 'click') {
    pluginDom.onclick = () => {
      if (pluginOptions.isExtenal && !pluginOptions.callback) {
        console.error('外置组件需要传入callback')
      } else {
        editor.restoreRange()
        pluginOptions.callback(pluginDom)
        // 操作结束之后更新选区
        editor.saveRange()
      }
    }
  }
  if (pluginOptions.openType === 'dropDown') {
    pluginDom.onmouseenter = function () {
      editor.restoreRange()
      let position = pluginDom.getBoundingClientRect()
      const yOffset = pluginDom.offsetHeight
      showDropDownTemp(pluginOptions, position, yOffset, editor)
    }
    pluginDom.onmouseleave = function (event) {
      if (
        domQuerySelector('.m-n-dropdown-List').contains(
          (event as any).toElement
        )
      ) {
        return
      }
      removeDropDown()
    }
  }
  pluginDom.classList.add('m-n-toolbar-item')
  pluginDom.innerHTML = `<i class="m-n-icon"></i>`
  let iconfontDom = pluginDom.getElementsByClassName('m-n-icon')[0]
  iconfontDom.classList.add(`${pluginOptions.iconName}`)
  return pluginDom
}
