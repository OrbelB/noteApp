import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const note = useAtomValue(selectedNoteAtom)

  if (!note) {
    return <></>
  }

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span>{note?.title}</span>
    </div>
  )
}
