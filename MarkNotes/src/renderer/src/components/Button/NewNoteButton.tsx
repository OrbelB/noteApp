import { ActionButton, ActionButtonProps } from '@/components'
import { MdEditNote } from 'react-icons/md'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <MdEditNote size={20} />
    </ActionButton>
  )
}
