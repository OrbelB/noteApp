import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled')
}

try {
  contextBridge.exposeInMainWorld('contex', {
    // TODO
  })
} catch (error) {
  console.log(error)
}
