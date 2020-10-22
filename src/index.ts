import {
  domInsert,
  domGetElementById,
  domCreateElement,
  domCreateDocumentFragment
} from './utils/dom'

import { Editor, Options } from './types/index'
import { createToolbarDom } from './core/toolbar'
import { createContainer } from './core/container'
import { initProto } from './core/initProto'
import './assets/styles/index.less'
import './assets/font/iconfont.css'
function MiniEditor(this: Editor, el: string, options?: Options) {
  // todo 拆
  let editor = this
  options = options ? options : {}
  editor.options = options
  editor.el = el
  initProto(editor, options)
  let domFragment = domCreateDocumentFragment()
  let toolbarDom = createToolbarDom(editor, options)
  let container = createContainer(editor)
  let editorWrap = domCreateElement('div')
  editorWrap.appendChild(toolbarDom)
  editor.toolbarDom = toolbarDom
  editor.savedRange = document.createRange()
  editorWrap.appendChild(container)
  editor.container = container
  editorWrap.style.width = options.width ? `${options.width}px` : '300px'
  editorWrap.classList.add('m-n-editor')
  domFragment.appendChild(editorWrap)
  domInsert(domGetElementById(el), domFragment)
}

export default MiniEditor
