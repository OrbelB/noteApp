// fake notes

import { NoteInfo } from "@shared/models";

export const noteMock: NoteInfo[] = [
  {
    title: "Hello world",
    lastEditTime: new Date().getTime()
  },
  {
    title: "Good bye",
    lastEditTime: new Date().getTime()
  },
  {
    title: "Hello Again",
    lastEditTime: new Date().getTime()
  }
]