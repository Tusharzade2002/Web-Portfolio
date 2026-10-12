import { useEffect, useRef, useState } from 'react'

// Lagging ring + dot. Elements with data-cursor="Text" grow the ring into a label bubble.
export default function Cursor() {
  const ring = useRef(null)
  const dot = useRef(null)
  const [label, setLabel] = useState('')
  const [hover, setHover] = useState(false)

  useEffect(() => {
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, raf
    const move = e => {
      mx = e.clientX; my = e.clientY
      dot.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
    }
    const over = e => {
      const el = e.target.closest('a,button,.svc')
      setHover(!!el)
      setLabel(el?.dataset.cursor || '')
    }
    const loop = () => {
      cx += (mx - cx) * 0.15; cy += (my - cy) * 0.15
      ring.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    addEventListener('mousemove', move)
    addEventListener('mouseover', over)
    loop()
    return () => {
      removeEventListener('mousemove', move)
      removeEventListener('mouseover', over)
      cancelAnimationFrame(raf)
    }
  }, [])

  const size = !label && hover ? { width: 60, height: 60 } : undefined
  return (
    <>
      <div ref={ring} className={`cursor ${label ? 'big' : ''}`} style={size}>{label}</div>
      <div ref={dot} className="cursor-dot" />
    </>
  )
}
