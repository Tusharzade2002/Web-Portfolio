import { services } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Services() {
  return (
    <section id="services" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead eyebrow="Services" title="What I do" text="End-to-end design for the web — from first sketch to a live, polished site." />
        <div className="services">
          {services.map((s, i) => (
            <Reveal key={s.title} className="svc">
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="arr">→</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
