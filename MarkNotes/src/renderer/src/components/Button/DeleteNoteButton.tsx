import { ComponentProps } from 'react'
import { ActionButton } from './ActionButton'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ComponentProps<'button'>) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan size={18} />
    </ActionButton>
  )
}
