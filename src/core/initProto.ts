import { Options, Editor } from '../types/index'
import { domGetElementById } from '../utils/dom'

function getHtml(this: Editor) {
  return this.container.innerHTML
}

function getSavedRange(this: Editor) {
  return this.savedRange
}

export function initProto(editor: Editor, options: Options) {
  editor.getHtml = getHtml
  editor.getSavedRange = getSavedRange
}
