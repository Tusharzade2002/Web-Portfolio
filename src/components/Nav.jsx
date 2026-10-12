import { useEffect, useRef, useState } from 'react'
import { navLinks, profile } from '../data'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = scrollY
      setSolid(y > 40)
      setHidden(y > lastY.current && y > 300)
      lastY.current = y
      setProgress((y / (document.documentElement.scrollHeight - innerHeight)) * 100)
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <nav className={`${solid ? 'solid' : ''} ${hidden && !open ? 'hide' : ''}`}>
        <div className="wrap">
          <a href="#top" className="logo">{profile.logo}<span>.</span></a>
          <div className={`links ${open ? 'open' : ''}`}>
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
            ))}
          </div>
          <a href="#contact" className="btn"><span>Let's talk</span></a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 8h18M3 16h18" />}
            </svg>
          </button>
        </div>
      </nav>
    </>
  )
}
