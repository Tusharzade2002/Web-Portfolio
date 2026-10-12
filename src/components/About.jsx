import { useEffect, useRef, useState } from 'react'
import { profile, stats } from '../data'
import { prefersReducedMotion, useCountUp, useInView } from '../hooks'

function Stat({ value, suffix, label, delay }) {
  const [ref, inView] = useInView()
  const n = useCountUp(value, inView)
  return (
    <div ref={ref} className={`stat reveal ${inView ? 'in' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <b>{n}<sup>{suffix}</sup></b>
      <span>{label}</span>
    </div>
  )
}

// Words light up one by one as the paragraph scrolls through the viewport.
function ScrollText({ text }) {
  const ref = useRef(null)
  const words = text.split(' ')
  const [lit, setLit] = useState(prefersReducedMotion() ? words.length : 0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const update = () => {
      const r = ref.current.getBoundingClientRect()
      const p = Math.min(Math.max((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.4), 0), 1)
      setLit(Math.floor(p * words.length))
    }
    update()
    addEventListener('scroll', update, { passive: true })
    return () => removeEventListener('scroll', update)
  }, [words.length])

  return (
    <p className="big-text" ref={ref}>
      {words.map((w, i) => (
        <span key={i}><span className={`w ${i < lit ? 'on' : ''}`}>{w}</span>{' '}</span>
      ))}
    </p>
  )
}

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <span className="eyebrow">( About me )</span>
          <ScrollText text={profile.intro} />
        </div>
        <div className="stats">
          {stats.map((s, i) => <Stat key={s.label} {...s} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  )
}
