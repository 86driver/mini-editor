import { Editor } from '../types'
import { domCreateElement, domQuerySelector } from '../utils/dom'
export function createContainer(editor: Editor): HTMLElement {
  let container = domCreateElement('div')
  container.setAttribute('contenteditable', 'true')
  container.classList.add('m-n-container')
  container.onblur = function () {
    editor.saveRange()
    console.log(editor.savedRange)
  }
  container.onkeyup = function () {
    editor.saveRange()
  }
  return container
}
