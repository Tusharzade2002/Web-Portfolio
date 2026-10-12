import { skills } from '../data'

export default function Marquee() {
  // Doubled list so the -50% translate loops seamlessly.
  const items = [...skills, ...skills]
  return (
    <div className="marquee">
      <div className="track">
        {items.map((s, i) => <span key={i}>{s}</span>)}
      </div>
    </div>
  )
}
