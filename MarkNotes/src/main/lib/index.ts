// lib will hold a serious of functions that will be use dan an api to ineract with the file system
// save read & write files

//only can be accessed from a nodejs environtment
import { appDirectoryName, fileEncoding } from '@shared/constants'
import { NoteInfo } from '@shared/models'
import { GetNotes } from '@shared/types'
import { ensureDir, readdir, stat } from 'fs-extra'
import { homedir } from 'os'

export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}

// async function that will read all of the files with a .md extention in the directory
export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  // will see if the directory exists, if not it will create it
  await ensureDir(rootDir)

  // will have a list if string with all iof the fine
  const noteFileName = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  // filter out all of the file names that dont have a .md extention
  const notes = noteFileName.filter((fileName) => fileName.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFileName))
}

export const getNoteInfoFromFileName = async (fileName: string): Promise<NoteInfo> => {
  const fileState = await stat(`${getRootDir()}/${fileName}`)

  return {
    title: fileName.replace(/\.md$/, ''),
    lastEditTime: fileState.mtimeMs
  }
}
