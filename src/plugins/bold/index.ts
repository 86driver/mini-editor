import { createPlugin } from '../../core/createPlugin'
import { Editor, pluginOptions } from '../../types/index'
import { hasClass, hasSelection } from '../../utils/common'
import { execCommand } from '../../utils/dom'

export default function (editor: Editor): HTMLElement {
  let pluginOption: pluginOptions = {
    name: 'bold',
    openType: 'click',
    iconName: 'icon-bold',
    callback: function (pluginDom) {
      if (hasSelection()) {
        if (hasClass(pluginDom, 'm-n-toolbar-active')) {
          pluginDom.classList.remove('m-n-toolbar-active')
        } else {
          pluginDom.classList.add('m-n-toolbar-active')
        }
        execCommand('Bold')
      }
    }
  }
  let plugin = createPlugin(editor, pluginOption)
  return plugin
}
