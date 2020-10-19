import { Editor } from '../types'
import { hasSelection } from '../utils/common'
import { domCreateElement } from '../utils/dom'
export function createContainer(editor: Editor): HTMLElement {
  let container = domCreateElement('div')
  container.innerHTML = '这里是可编辑区域'
  container.setAttribute('contenteditable', 'true')
  container.classList.add('m-n-container')
  container.onblur = function () {
    if (hasSelection()) {
      editor.savedRange = (window.getSelection() as Selection).getRangeAt(0)
    }
  }
  container.onkeyup = function () {
    if (hasSelection()) {
      editor.savedRange = (window.getSelection() as Selection).getRangeAt(0)
    }
  }
  container.click = function () {
    if (hasSelection()) {
      editor.savedRange = (window.getSelection() as Selection).getRangeAt(0)
    }
  }
  return container
}
