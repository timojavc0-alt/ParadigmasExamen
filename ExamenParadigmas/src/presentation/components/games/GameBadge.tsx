interface Props{
    label: string,
    color?: string
}

export const GameBadge = ({label, color}:Props) => {
  return (
    <div>
        <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold">
            {label}
            {color}
        </span>
    </div>
  )
}
