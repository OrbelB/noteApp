import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled')
}

//navigator is an api that will return info about the user agent

try {
  contextBridge.exposeInMainWorld('context', {
    local: navigator.language
  })
} catch (error) {
  console.log(error)
}
