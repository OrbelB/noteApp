import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const formatedDate = formatDateFromMs(lastEditTime)

  return (
    // TODO: update background color here
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 transition-colors duration-75',
        {
          'bg-purple-200/90': isActive,
          'mr-0': isActive,
          'rounded-l-md': isActive,
          'hover:bg-zinc-500/25': !isActive,
          'rounded-md': !isActive,
          'mr-2': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{formatedDate}</span>
    </div>
  )
}
