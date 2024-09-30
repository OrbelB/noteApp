import { ComponentProps } from 'react'
import { ActionButton } from './ActionButton'
import { MdEditNote } from 'react-icons/md'

export const NewNoteButton = ({ ...props }: ComponentProps<'button'>) => {
  return (
    <ActionButton {...props}>
      <MdEditNote size={20} />
    </ActionButton>
  )
}
