// Edit everything about you here — components read from this file.

export const profile = {
  name: 'Your Name',
  logo: 'yourname',
  email: 'hello@yourname.com',
  availability: 'Available for new projects — Q4 2026',
  intro:
    "I'm a freelance web designer who blends clean aesthetics with smart strategy. Every pixel I place has one job — help your business grow. No templates, no fluff, just websites people remember.",
}

export const navLinks = ['About', 'Services', 'Work', 'Pricing', 'Contact']

export const skills = ['Web Design', 'UI / UX', 'Landing Pages', 'Webflow', 'Figma', 'E‑commerce', 'Branding']

export const stats = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 85, suffix: '+', label: 'Happy clients' },
  { value: 6, suffix: 'yrs', label: 'Experience' },
  { value: 98, suffix: '%', label: 'Client retention' },
]

export const services = [
  { title: 'Website Design', desc: 'Custom, responsive websites designed around your brand and goals.' },
  { title: 'Landing Pages', desc: 'High-converting pages for launches, ads and lead generation.' },
  { title: 'UI / UX Design', desc: 'Intuitive interfaces and user flows, prototyped in Figma.' },
  { title: 'Redesign', desc: 'Turn an outdated site into a modern, fast, trustworthy one.' },
]

// image: optional screenshot path (put files in /public, e.g. '/nimbus.jpg')
export const projects = [
  { title: 'Nimbus Analytics', tags: 'Web design · Webflow', chip: 'SaaS · 2026', from: '#7b5cff', to: '#2a1a7a', head: '#7b5cff', cols: 3, url: '#' },
  { title: 'Verde Botanics', tags: 'Shopify · Branding', chip: 'E‑commerce · 2026', from: '#c8ff3d', to: '#3d8b2a', head: '#1d1d1d', cols: 2, url: '#' },
  { title: 'Ember & Oak', tags: 'Website · Booking', chip: 'Restaurant · 2025', from: '#ff7a59', to: '#8a2b1a', head: '#ff7a59', cols: 4, url: '#' },
  { title: 'Ledgerly App', tags: 'UI / UX · Landing', chip: 'Fintech · 2025', from: '#3dc8ff', to: '#123a6b', head: '#123a6b', cols: 2, url: '#' },
]

export const steps = [
  { title: 'Discover', desc: 'Call to understand your business, audience and goals.' },
  { title: 'Design', desc: 'Wireframes and high-fidelity designs in Figma, with revisions.' },
  { title: 'Build', desc: 'Pixel-perfect, responsive development with smooth interactions.' },
  { title: 'Launch', desc: 'Testing, SEO basics, go-live and 30 days of support.' },
]

export const testimonials = [
  { quote: 'Our new site doubled demo bookings in the first month. Fast, creative and a joy to work with.', name: 'Sarah Mitchell', role: 'Founder, Nimbus', initials: 'SM', bg: '#c8ff3d', fg: '#000' },
  { quote: 'Took our vague ideas and turned them into something beautiful. Every detail was considered.', name: 'Rahul Kapoor', role: 'CEO, Ledgerly', initials: 'RK', bg: '#7b5cff', fg: '#fff' },
  { quote: "Best freelance hire we've made. Delivered ahead of schedule and online sales went up 40%.", name: 'Lena Duarte', role: 'Owner, Verde Botanics', initials: 'LD', bg: '#ff7a59', fg: '#000' },
]

export const plans = [
  { name: 'Starter', blurb: 'Perfect for a single page launch.', price: '$499', features: ['1-page landing site', 'Responsive design', 'Basic SEO setup', '2 revisions'] },
  { name: 'Business', blurb: 'Full website for growing brands.', price: '$1,499', hot: true, features: ['Up to 6 pages', 'Custom animations', 'CMS / blog setup', 'Unlimited revisions', '30 days support'] },
  { name: 'Premium', blurb: 'E‑commerce & complex builds.', price: '$2,999', plus: true, features: ['Unlimited pages', 'Online store', 'Brand identity kit', 'Priority support'] },
]

export const socials = [
  { label: 'Dribbble', url: '#' },
  { label: 'Behance', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'Instagram', url: '#' },
  { label: 'Upwork', url: '#' },
]
