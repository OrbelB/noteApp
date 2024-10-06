import { contextBridge, ipcRenderer } from 'electron'
import { GetNotes } from '@shared/types'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be enabled')
}

//navigator is an api that will return info about the user agent
//You are exposing the function 
// proxy to avoid exposing the entire ipcRendere object to the renderer procesfs
try {
  contextBridge.exposeInMainWorld('context', {
    local: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args)
  })
} catch (error) {
  console.log(error)
}

