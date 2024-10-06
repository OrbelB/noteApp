import {
  ActionButtonRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkDownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { useRef } from 'react'

export default function App(): JSX.Element {
  const contentRetainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentRetainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-200 mt-12">
          <Sidebar className="h-full bg-blue-100 text-gray-700 rounded-tr-3xl">
            <ActionButtonRow className="flex justify-between p-4 border-b-2 border-indigo-500" />
            <NotePreviewList onSelect={resetScroll} className="mt-2 ml-2 space-y-1" />
          </Sidebar>
        </div>
        <Content ref={contentRetainerRef} className="bg-purple-200">
          <FloatingNoteTitle className="p-2" />
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

