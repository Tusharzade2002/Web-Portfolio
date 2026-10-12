import { steps } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <SectionHead eyebrow="Process" title="How we work" text="A simple, transparent process — you always know what's next." />
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.title} className="step" delay={i * 0.1}>
              <div><h3>{s.title}</h3><p>{s.desc}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
