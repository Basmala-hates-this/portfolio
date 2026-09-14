import { useState } from 'react'

export default function Collapsible({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="font-medium  text-text-soft mb-1 flex items-center gap-1"
      >
        <span>{open ? '▾' : '▸'}</span> {title}
      </button>
      {open && <div className="mt-1">{children}</div>}
    </div>
  )
}