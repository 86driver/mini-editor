import { domCreateElement } from '../utils/dom'
import { mergePlugins } from './mergePlugins'
import { Editor, Options } from '../types/index'

export function createToolbarDom(
  editor: Editor,
  options: Options
): HTMLElement {
  let toolbarDom = domCreateElement('div')
  toolbarDom.classList.add('m-n-toolbar')
  let plugins = mergePlugins(
    editor,
    options.internalToolbar,
    options.expandToolbar
  )
  plugins.map((dom) => {
    toolbarDom.appendChild(dom)
  })
  return toolbarDom
}
