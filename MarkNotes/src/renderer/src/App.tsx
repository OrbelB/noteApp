import {
  ActionButtonRow,
  Content,
  DraggableTopBar,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'

export default function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-200 mt-12">
          <Sidebar className="h-full bg-blue-100 text-gray-700 rounded-tr-3xl">
            <ActionButtonRow className="flex justify-between p-4 border-b-2 border-indigo-500" />
            <NotePreviewList className='mt-2 ml-2' />
          </Sidebar>
        </div>
        <Content className="bg-purple-200">Content</Content>
      </RootLayout>
    </>
  )
}

