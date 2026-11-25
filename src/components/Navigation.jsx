import { useEffect, useRef, useState, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { Chevron } from './Icons'

const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (min-width: 1024px)').matches

export default function Navigation({ items, onNavigate }) {
  const [openLabel, setOpenLabel] = useState(null)
  const ref = useRef(null)
  const location = useLocation()
  const close = useCallback(() => setOpenLabel(null), [])

  useOnClickOutside(ref, close)

  useEffect(() => {
    close()
  }, [location.pathname, location.hash, close])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [close])

  const handleNavigate = () => {
    close()
    onNavigate?.()
  }

  return (
    <nav className="nav" aria-label="Primary" ref={ref}>
      <ul className="nav__list">
        {items.map((item) => {
          if (!item.children) {
            return (
              <li key={item.label} className="nav__item">
                {item.to.includes('#') ? (
                  <Link className="nav__link" to={item.to} onClick={handleNavigate}>
                    {item.label}
                  </Link>
                ) : (
                  <NavLink className="nav__link" to={item.to} onClick={handleNavigate}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            )
          }
          const isOpen = openLabel === item.label
          const menuId = `menu-${item.label.toLowerCase()}`
          return (
            <li
              key={item.label}
              className="nav__item"
              onMouseEnter={() => canHover() && setOpenLabel(item.label)}
              onMouseLeave={() => canHover() && setOpenLabel(null)}
            >
              <button
                type="button"
                className={`nav__trigger${isOpen ? ' is-open' : ''}`}
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => setOpenLabel(isOpen ? null : item.label)}
              >
                {item.label}
                <Chevron size={16} className="nav__chevron" />
              </button>
              <ul id={menuId} className="nav__menu" hidden={!isOpen}>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link className="nav__menu-link" to={child.to} onClick={handleNavigate}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
