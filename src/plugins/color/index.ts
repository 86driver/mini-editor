import { createPlugin } from '../../core/createPlugin'
import { pluginOptions, dropDownItems, Editor } from '../../types/index'
import { domCreateElement, execCommand } from '../../utils/dom'

export default function (editor: Editor): HTMLElement {
  let pluginOption: pluginOptions = {
    name: 'color',
    openType: 'dropDown',
    iconName: 'icon-ColorLens',
    dropDownList: [
      { label: '红色', value: 'red' },
      { label: '绿色', value: 'green' },
      { label: '蓝色', value: 'blue' }
    ],
    dropDownCallback: function (srcDom: HTMLElement, items: dropDownItems) {
      if (editor.savedRange) {
        let text = editor.savedRange.toString()
        let fontDomString = `<font color="${items.value}">${text}</font>`
        execCommand('insertHTML', false, fontDomString)
      }
    },
    callback: function (pluginDom) {}
  }
  let plugin = createPlugin(editor, pluginOption)
  return plugin
}
