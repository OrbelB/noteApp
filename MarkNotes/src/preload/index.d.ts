import { ElectronAPI } from '@electron-toolkit/preload'
import { GetNotes } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI dont need it for this project
    // this is what your exposing in the index.ts
    context: {
      local: string
      getNotes: GetNotes
    }
    api: unknown
  }
}

