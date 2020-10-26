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
    const boldParentDom = ['B', 'H1', 'H2']
    let boldToolDom = domQuerySelector('.icon-bold').parentElement
    let parentDom = editor.savedRange.commonAncestorContainer.parentElement
      ? editor.savedRange.commonAncestorContainer.parentElement
      : null
    if (parentDom && boldParentDom.indexOf(parentDom.nodeName) === -1) {
      if (boldToolDom && hasClass(boldToolDom, 'm-n-toolbar-active')) {
        boldToolDom?.classList.remove('m-n-toolbar-active')
      }
    } else {
      if (parentDom) {
        if (boldToolDom && !hasClass(boldToolDom, 'm-n-toolbar-active')) {
          boldToolDom?.classList.add('m-n-toolbar-active')
        }
      }
    }
  }
  return container
}
