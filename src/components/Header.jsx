import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from './Logo'
import Navigation from './Navigation'
import Button from './Button'
import { MenuIcon, CloseIcon } from './Icons'
import { navItems, DEMO_HREF } from '../data/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <div id="site-menu" className="header__panel">
          <Navigation items={navItems} onNavigate={() => setMenuOpen(false)} />
          <Button href={DEMO_HREF} className="header__cta">
            CRM preview
          </Button>
        </div>
        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
    </header>
  )
}
