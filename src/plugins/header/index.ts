import { createPlugin } from '../../core/createPlugin'
import { dropDownItems, Editor, pluginOptions } from '../../types/index'
import { hasClass } from '../../utils/common'
import { execCommand } from '../../utils/dom'

export default function (editor: Editor): HTMLElement {
  let pluginOption: pluginOptions = {
    name: 'color',
    openType: 'dropDown',
    iconName: 'icon-header',
    dropDownList: [
      { label: 'H1', value: 'red' },
      { label: 'H2', value: 'green' },
      { label: '正文', value: 'blue' }
    ],
    dropDownCallback: function (srcDom: HTMLElement, items: dropDownItems) {
      let text = editor.savedRange.toString()
      let hDom = ``
      switch (items.label) {
        case 'H1':
          hDom = `<h1>${text}</h1>`
          break
        case 'H2':
          hDom = `<h2>${text}</h2>`
          break
        case '正文':
          hDom = `<span>${text}</span>`
          break
      }
      execCommand('insertHTML', false, hDom)
    },
    callback: function (pluginDom) {
      // if (hasClass(pluginDom, 'm-n-toolbar-active')) {
      //   pluginDom.classList.remove('m-n-toolbar-active')
      // } else {
      //   pluginDom.classList.add('m-n-toolbar-active')
      // }
    }
  }
  let plugin = createPlugin(editor, pluginOption)
  return plugin
}
