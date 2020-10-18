import { dropDownItems } from '../types'
import { hasClass } from '../utils/common'
import {
  domCreateDocumentFragment,
  domCreateElement,
  domQuerySelector
} from '../utils/dom'
export function showDropDownTemp(
  list: Array<dropDownItems>,
  position: DOMRect,
  yOffset: number
) {
  console.log(list, `---list`)
  let dropDownTempDom = domCreateElement('div')
  list.map((item) => {
    let itemDoms = domCreateElement('div')
    itemDoms.classList.add('m-n-dropdown-item')
    itemDoms.innerHTML = item.label
    dropDownTempDom.appendChild(itemDoms)
  })
  dropDownTempDom.style.left = `${position.left}px`
  dropDownTempDom.style.top = `${position.top + yOffset}px`
  dropDownTempDom.classList.add('m-n-dropdown-List')
  dropDownTempDom.style.display = 'block'
  domQuerySelector('body').appendChild(dropDownTempDom)
}
