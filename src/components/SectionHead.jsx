import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, text }) {
  return (
    <Reveal className="head">
      <div><span className="eyebrow">( {eyebrow} )</span><h2>{title}</h2></div>
      <p>{text}</p>
    </Reveal>
  )
}
