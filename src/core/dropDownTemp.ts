import { dropDownItems, Editor, pluginOptions } from '../types'
import { hasClass, removeDropDown } from '../utils/common'
import { domCreateElement, domQuerySelector } from '../utils/dom'
export function showDropDownTemp(
  pluginOptions: pluginOptions,
  position: DOMRect,
  yOffset: number,
  editor: Editor
) {
  let dropDownTempDom = domCreateElement('div')
  if (pluginOptions.dropDownList) {
    pluginOptions.dropDownList.map((item, index) => {
      let itemDoms = domCreateElement('button')
      itemDoms.classList.add('m-n-dropdown-item')
      itemDoms.setAttribute('index', `${index}`)
      itemDoms.innerHTML = item.label
      dropDownTempDom.appendChild(itemDoms)
    })
    // 事件代理item onclick
    dropDownTempDom.onclick = function (event) {
      let target = event.target
      let itemIndex = (target as HTMLElement).getAttribute('index') as string
      if (pluginOptions.dropDownCallback) {
        pluginOptions.dropDownCallback(
          target,
          (pluginOptions.dropDownList as Array<dropDownItems>)[itemIndex]
        )
        removeDropDown()
      }
      editor.saveRange()
    }
    dropDownTempDom.onmouseleave = function (event) {
      removeDropDown()
    }
    dropDownTempDom.style.left = `${position.left}px`
    dropDownTempDom.style.top = `${position.top + yOffset}px`
    dropDownTempDom.classList.add('m-n-dropdown-List')
    dropDownTempDom.style.display = 'block'
    domQuerySelector('body').appendChild(dropDownTempDom)
  }
}
