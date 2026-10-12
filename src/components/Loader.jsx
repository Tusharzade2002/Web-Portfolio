import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../hooks'

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDone(true)
      onDone()
      return
    }
    let n = 0
    let finishTimer
    const t = setInterval(() => {
      n = Math.min(n + Math.ceil(Math.random() * 9), 100)
      setCount(n)
      if (n === 100) {
        clearInterval(t)
        finishTimer = setTimeout(() => { setDone(true); onDone() }, 250)
      }
    }, 35)
    return () => { clearInterval(t); clearTimeout(finishTimer) }
  }, [onDone])

  return (
    <div className={`loader ${done ? 'done' : ''}`}>
      <div className="count">{count}</div>
    </div>
  )
}
