import { useRef } from 'react'
import { projects } from '../data'
import { useInView } from '../hooks'
import SectionHead from './SectionHead'

function Mock({ head, cols }) {
  return (
    <div className="mock">
      <div className="bar"><i /><i /><i /></div>
      <div className="h" style={{ background: head }} />
      <div className="t" />
      <div className="row">{Array.from({ length: cols }, (_, i) => <div key={i} />)}</div>
    </div>
  )
}

function Project({ p }) {
  const [ref, inView] = useInView()
  const thumb = useRef(null)

  // 3D tilt following the mouse
  const tilt = e => {
    const r = thumb.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    thumb.current.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`
  }
  const reset = () => { thumb.current.style.transform = '' }

  return (
    <a ref={ref} href={p.url} className={`project reveal ${inView ? 'in' : ''}`} data-cursor="View">
      <div
        ref={thumb}
        className="thumb"
        onMouseMove={tilt}
        onMouseLeave={reset}
        style={{ transition: 'transform .5s cubic-bezier(.22,1,.36,1)' }}
      >
        <div className="art" style={{ background: `linear-gradient(135deg,${p.from},${p.to})` }}>
          {p.image
            ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <Mock head={p.head} cols={p.cols} />}
        </div>
        <span className="chip">{p.chip}</span>
      </div>
      <div className="meta"><h3>{p.title}</h3><span>{p.tags}</span></div>
    </a>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead eyebrow="Selected work" title="Recent projects" text="A few favourites from the last year. Full case studies on request." />
        <div className="work-grid">
          {projects.map(p => <Project key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  )
}
