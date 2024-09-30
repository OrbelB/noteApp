import { ActionButtonRow, Content, DraggableTopBar, RootLayout, Sidebar } from './components'

export default function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-200 mt-12">
          <Sidebar className="h-full p-2 bg-blue-100 text-gray-700 rounded-tr-3xl">
            <ActionButtonRow className="flex justify-between p-2 border-b-2 border-indigo-500" />
          </Sidebar>
        </div>
        <Content className="bg-purple-200">Content</Content>
      </RootLayout>
    </>
  )
}
