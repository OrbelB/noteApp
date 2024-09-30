import { ActionButton } from './Button'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMiniMinus } from 'react-icons/hi2'
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

export const DraggableTopBar = () => {
  return (
    <header className="absolute inset-0 h-12">
      <div className=" h-12 bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-200  p-2 justify-between w-[250px] space-x-4">
        <ActionButton className="text-sm">
          <AiOutlineClose size={18} />
        </ActionButton>
        <ActionButton className="text-sm">
          <MdOutlineCheckBoxOutlineBlank size={18} />
        </ActionButton>
        <ActionButton className="text-sm">
          <HiMiniMinus size={18} />
        </ActionButton>
      </div>
    </header>
  )
}
