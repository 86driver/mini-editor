export function domQuerySelector(el: string): HTMLElement {
  return document.querySelector(el) as HTMLElement
}

export function domInsert(
  fatherdom: HTMLElement,
  childdom: HTMLElement | DocumentFragment
) {
  fatherdom.appendChild(childdom)
}

export function domCreateElement(el: string): HTMLElement {
  return document.createElement(el)
}

export function domCreateDocumentFragment(): DocumentFragment {
  return document.createDocumentFragment()
}
