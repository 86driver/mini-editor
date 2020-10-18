import { domCreateElement } from '../utils/dom'
export function createContainer(): HTMLElement {
  let container = domCreateElement('div')
  container.innerHTML = '这里是可编辑区域'
  container.setAttribute('contenteditable', 'true')
  container.classList.add('m-n-container')
  return container
}
