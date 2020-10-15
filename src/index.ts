import {
  domInsert,
  domQuerySelector,
  domCreateElement,
  domCreateDocumentFragment
} from './utils/dom'

import { Options } from './types/index'
import './assets/styles/toolbar.css'
function MiniEditor(el: string, options?: Options) {
  let domFragment = domCreateDocumentFragment()
  let toolbarDom = domCreateElement('div')
  toolbarDom.innerHTML = '这里是toolbar区域'
  toolbarDom.classList.add('toolbar')
  let contentDom = domCreateElement('div')
  contentDom.innerHTML = '这里是可编辑区域'
  contentDom.setAttribute('contenteditable', 'true')
  domFragment.appendChild(toolbarDom)
  domFragment.appendChild(contentDom)
  domInsert(domQuerySelector(el), domFragment)
}

export default MiniEditor
