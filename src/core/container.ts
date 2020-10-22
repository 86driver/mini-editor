import { Editor } from '../types'
import { domCreateElement, domQuerySelector } from '../utils/dom'
export function createContainer(editor: Editor): HTMLElement {
  let container = domCreateElement('div')
  container.setAttribute('contenteditable', 'true')
  container.classList.add('m-n-container')
  container.onblur = function () {
    editor.saveRange()
  }
  container.onkeyup = function () {
    editor.saveRange()
  }
  container.onmouseup = function () {}
  container.onmousedown = function () {
    console.log(editor.savedRange.toString())
  }
  return container
}
