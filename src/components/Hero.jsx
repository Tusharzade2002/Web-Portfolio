import { profile } from '../data'

export const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="blob a" />
      <div className="blob b" />
      <div className="wrap">
        <div className="tag fade-up"><i /> {profile.availability}</div>
        <h1>
          <span className="line"><span>I design</span></span>
          <span className="line"><span style={{ transitionDelay: '.1s' }} className="outline">websites</span></span>
          <span className="line"><span style={{ transitionDelay: '.2s' }}>that</span></span>
          <span className="line"><span style={{ transitionDelay: '.3s' }}><em>convert.</em></span></span>
        </h1>
        <div className="hero-foot">
          <p className="fade-up" style={{ transitionDelay: '.5s' }}>
            Freelance <b>web designer</b> helping startups &amp; small brands launch fast, beautiful,
            high-performing websites that turn visitors into customers.
          </p>
          <div className="fade-up" style={{ transitionDelay: '.65s', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#work" className="btn" data-cursor="View"><span>See my work</span><ArrowIcon /></a>
            <a href="#contact" className="btn ghost"><span>Hire me</span></a>
          </div>
        </div>
        <div className="scroll-ind fade-up" style={{ marginTop: 60, transitionDelay: '.8s' }}>Scroll</div>
      </div>
    </header>
  )
}
