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
      { label: '蓝色', value: 'blue' },
      { label: '黑色', value: 'black' }
    ],
    dropDownCallback: function (srcDom: HTMLElement, item: dropDownItems) {
      if (editor.savedRange) {
        execCommand('foreColor', false, item.value)
      }
    },
    callback: function (pluginDom) {}
  }
  let plugin = createPlugin(editor, pluginOption)
  return plugin
}
