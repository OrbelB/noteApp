import { ComponentProps } from 'react'
import { DeleteNoteButton, NewNoteButton } from './Button'

export const ActionButtonRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <span className="font-mono font-thin text-indigo-800">NOTEMARK</span>
      <DeleteNoteButton />
    </div>
  )
}
