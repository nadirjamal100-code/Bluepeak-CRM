import { useId, useState } from 'react'
import { Plus } from './Icons'

export default function Accordion({ items }) {
  const base = useId()
  const [open, setOpen] = useState(null)
  const toggle = (i) =>
    setOpen((current) => (current === i ? null : i))

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i
        const buttonId = `${base}-btn-${i}`
        const panelId = `${base}-panel-${i}`
        return (
          <div className={`accordion__item${isOpen ? ' is-open' : ''}`} key={item.q}>
            <h3 className="accordion__heading">
              <button
                type="button"
                id={buttonId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
              >
                <span>{item.q}</span>
                <Plus size={20} className="accordion__icon" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion__panel" hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
