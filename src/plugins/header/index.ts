import { createPlugin } from '../../core/createPlugin'
import { dropDownItems, Editor, pluginOptions } from '../../types/index'
import { execCommand } from '../../utils/dom'

export default function (editor: Editor): HTMLElement {
  let pluginOption: pluginOptions = {
    name: 'header',
    openType: 'dropDown',
    iconName: 'icon-header',
    dropDownList: [
      { label: 'H1', value: 'H1' },
      { label: 'H2', value: 'H2' },
      { label: '正文', value: 'P' }
    ],
    dropDownCallback: function (srcDom: HTMLElement, item: dropDownItems) {
      if (editor.savedRange) {
        execCommand('formatBlock', false, item.value)
      }
    },
    callback: function (pluginDom) {}
  }
  let plugin = createPlugin(editor, pluginOption)
  return plugin
}
