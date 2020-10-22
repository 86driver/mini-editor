import { domQuerySelector, domQuerySelectorAll } from './dom'

export function isArray(o: any) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

export function warn(val: any) {
  console.warn(val)
}

export function error(val: any) {
  console.error(val)
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

export function removeDropDown() {
  let dom = domQuerySelector('.m-n-dropdown-List')
  document.body.removeChild(dom)
}
