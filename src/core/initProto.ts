import { Options, Editor } from '../types/index'
import { domGetElementById } from '../utils/dom'

const selection = window.getSelection() as Selection

function getHtml(this: Editor) {
  return this.container.innerHTML
}

function restoreRange(this: Editor) {
  selection.removeAllRanges()
  selection.addRange(this.savedRange)
}

function saveRange(this: Editor) {
  if (selection.getRangeAt && selection.rangeCount) {
    this.savedRange = selection.getRangeAt(0)
  } else {
    this.savedRange = document.createRange()
  }
}

function isEmptyRange(this: Editor): boolean {
  return this.savedRange.startOffset === this.savedRange.endOffset
}

export function initProto(editor: Editor, options: Options) {
  editor.getHtml = getHtml
  editor.restoreRange = restoreRange
  editor.saveRange = saveRange
  editor.isEmptyRange = isEmptyRange
}
