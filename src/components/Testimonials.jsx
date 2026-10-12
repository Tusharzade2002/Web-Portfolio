import { useEffect, useState } from 'react'
import { testimonials } from '../data'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  // Auto-advance; resets whenever user picks a slide.
  useEffect(() => {
    const t = setTimeout(() => setActive(a => (a + 1) % testimonials.length), 6000)
    return () => clearTimeout(t)
  }, [active])

  return (
    <section>
      <div className="wrap">
        <span className="eyebrow" style={{ textAlign: 'center' }}>( Kind words )</span>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`quote ${i === active ? 'active' : ''}`}>
              <blockquote>{t.quote}</blockquote>
              <div className="who">
                <div className="av" style={{ background: t.bg, color: t.fg }}>{t.initials}</div>
                <div>{t.name}<small>{t.role}</small></div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {testimonials.map((t, i) => (
            <button key={t.name} className={i === active ? 'active' : ''} aria-label={`Quote ${i + 1}`} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
