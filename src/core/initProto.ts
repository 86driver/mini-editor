import { Options, Editor } from '../types/index'
import { domGetElementById } from '../utils/dom'

function getHtml(this: Editor) {
  return this.container.innerHTML
}

export function initProto(editor: Editor, options: Options) {
  editor.getHtml = getHtml
}
