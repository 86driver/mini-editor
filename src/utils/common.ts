import { domQuerySelectorAll } from './dom'

export function isArray(o: any) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

export function warn(val: any) {
  console.warn(val)
}

export function error(val: any) {
  console.error(val)
}

//  未做浏览器兼容
export function hasSelection(): boolean {
  let selection = window.getSelection() as Selection
  return selection.toString().trim().length ? true : false
}

export function clearActiveClass(el: string) {
  let toolbarItemDoms = domQuerySelectorAll(el)
  for (let index = 0; index < toolbarItemDoms.length; index++) {
    toolbarItemDoms[index].classList.remove('m-n-toolbar-active')
  }
}

export function hasClass(element: HTMLElement, className: string): boolean {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1
}
