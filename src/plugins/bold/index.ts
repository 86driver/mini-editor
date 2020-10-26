import { createPlugin } from '../../core/createPlugin'
import { Editor, pluginOptions } from '../../types/index'
import { hasClass } from '../../utils/common'
import { execCommand } from '../../utils/dom'

export default function (editor: Editor): HTMLElement {
  let pluginOption: pluginOptions = {
    name: 'bold',
    openType: 'click',
    iconName: 'icon-bold',
    callback: function (pluginDom) {
      // todo 拆
      if (hasClass(pluginDom, 'm-n-toolbar-active')) {
        if (editor.savedRange.toString().trim().length) {
          execCommand('Bold', false)
        } else {
          execCommand('insertHTML', false, '<span>&#8203;</span>')
        }
        pluginDom.classList.remove('m-n-toolbar-active')
      } else {
        if (editor.savedRange.toString().trim().length) {
          execCommand('Bold', false)
        } else {
          execCommand('insertHTML', false, '<b>&#8203;</b>')
        }
        pluginDom.classList.add('m-n-toolbar-active')
      }
    }
  }
  let plugin = createPlugin(editor, pluginOption)
  return plugin
}
