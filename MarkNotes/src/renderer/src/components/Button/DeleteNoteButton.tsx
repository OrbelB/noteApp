import { ActionButton, ActionButtonProps } from '@/components'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan size={18} />
    </ActionButton>
  )
}
