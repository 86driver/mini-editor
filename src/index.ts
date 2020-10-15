import {
  domInsert,
  domQuerySelector,
  domCreateElement,
  domCreateDocumentFragment
} from './utils/dom'

import { Options } from './types/index'
import './assets/styles/index.less'
function MiniEditor(el: string, options?: Options) {
  // todo 拆
  options = options ? options : {}
  let domFragment = domCreateDocumentFragment()
  let editorDom = domCreateElement('div')
  let toolbarDom = domCreateElement('div')
  toolbarDom.innerHTML = '这里是toolbar区域'
  toolbarDom.classList.add('m-n-toolbar')
  let container = domCreateElement('div')
  container.innerHTML = '这里是可编辑区域'
  container.setAttribute('contenteditable', 'true')
  container.classList.add('m-n-container')
  editorDom.classList.add('m-n-editor')
  editorDom.appendChild(toolbarDom)
  editorDom.appendChild(container)
  editorDom.style.width = options.width ? `${options.width}px` : '300px'
  domFragment.appendChild(editorDom)
  domInsert(domQuerySelector(el), domFragment)
}

export default MiniEditor
