import { Editor } from '../types'
import { hasClass } from '../utils/common'
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
  container.onmouseup = function () {
    editor.saveRange()
    // todo 拆
    // 处理组件高亮状态
    // 加粗
    let boldToolDom = domQuerySelector('.icon-bold').parentElement
    if (
      editor.savedRange.commonAncestorContainer.parentElement &&
      editor.savedRange.commonAncestorContainer.parentElement.nodeName !== 'B'
    ) {
      if (boldToolDom && hasClass(boldToolDom, 'm-n-toolbar-active')) {
        boldToolDom?.classList.remove('m-n-toolbar-active')
      }
    } else {
      if (editor.savedRange.commonAncestorContainer.parentElement) {
        if (boldToolDom && !hasClass(boldToolDom, 'm-n-toolbar-active')) {
          boldToolDom?.classList.add('m-n-toolbar-active')
        }
      }
    }
  }
  return container
}
