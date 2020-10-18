import { domCreateElement } from '../utils/dom'
import { mergePlugins } from './mergePlugins'
import { Options } from '../types/index'

export function createToolbarDom(options: Options): HTMLElement {
  let toolbarDom = domCreateElement('div')
  toolbarDom.classList.add('m-n-toolbar')
  let mergedPlugins = mergePlugins(
    options.internalToolbar,
    options.expandToolbar
  )
  mergedPlugins.map((dom) => {
    toolbarDom.appendChild(dom)
  })
  return toolbarDom
}
