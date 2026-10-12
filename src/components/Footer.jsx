import { profile } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Designed &amp; built with ♥</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
