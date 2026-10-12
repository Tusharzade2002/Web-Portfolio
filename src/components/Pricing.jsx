import { plans } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Pricing() {
  return (
    <section id="pricing" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead eyebrow="Pricing" title="Simple packages" text="Clear pricing, no surprises. Need something custom? Let's talk." />
        <div className="plans">
          {plans.map((p, i) => (
            <Reveal key={p.name} className={`plan ${p.hot ? 'hot' : ''}`} delay={i * 0.1}>
              {p.hot && <span className="badge">Popular</span>}
              <h3>{p.name}</h3>
              <p className="muted">{p.blurb}</p>
              <div className="price">{p.price}{p.plus && <small>+</small>}</div>
              <span className="muted">one-time</span>
              <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
              <a href="#contact" className={`btn ${p.hot ? '' : 'ghost'}`}><span>Get started</span></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
