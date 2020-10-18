import innternalPluginsCtor from '../plugins/index'
import { pluginOptions } from '../types/index'
import { isArray, error } from '../utils/common'
import { createPlugin } from './createPlugin'

export function mergePlugins(
  internalToolbar?: Array<string>,
  expandToolbar?: Array<pluginOptions>
) {
  let internalPlugins: Array<HTMLElement> = []
  let expandPlugins: Array<HTMLElement> = []
  if (!internalToolbar) {
    for (let ctor in innternalPluginsCtor) {
      internalPlugins.push(innternalPluginsCtor[ctor]())
    }
  } else {
    if (!isArray(internalToolbar)) {
      error('内置组件需要传入数组')
    } else {
      internalToolbar.map((item) => {
        if (innternalPluginsCtor[item]) {
          internalPlugins.push(innternalPluginsCtor[item]())
        }
      })
    }
  }
  if (expandToolbar) {
    if (!isArray(expandToolbar)) {
      error('外置组件需要传入数组')
    } else {
      expandToolbar.map((item) => {
        expandPlugins.push(createPlugin(item))
      })
    }
  }
  return [...internalPlugins, ...expandPlugins]
}
