import { useRef } from 'react'
import { profile, socials } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const mag = useRef(null)

  // Magnetic pull toward the cursor
  const pull = e => {
    const r = mag.current.getBoundingClientRect()
    mag.current.style.transform =
      `translate(${(e.clientX - r.left - r.width / 2) * 0.35}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`
  }
  const release = () => { mag.current.style.transform = '' }

  return (
    <section className="contact" id="contact">
      <div className="blob a" style={{ left: '30%', top: '20%', right: 'auto', opacity: 0.25 }} />
      <div className="wrap">
        <span className="eyebrow">( Got a project? )</span>
        <Reveal as="h2"><a href={`mailto:${profile.email}`}>Let's work<br />together</a></Reveal>
        <a ref={mag} href={`mailto:${profile.email}`} className="magnet" onMouseMove={pull} onMouseLeave={release}>
          Say hello →
        </a>
        <div className="socials">
          {socials.map(s => <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}
        </div>
      </div>
    </section>
  )
}
