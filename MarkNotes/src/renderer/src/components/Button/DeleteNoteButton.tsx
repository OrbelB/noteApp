import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleNoteDelete = () => {
    deleteNote()
  }

  return (
    <ActionButton onClick={handleNoteDelete} {...props}>
      <FaRegTrashCan size={18} />
    </ActionButton>
  )
}

