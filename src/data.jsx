export const SITE = {
  name: 'Codewithathar',
  tagline: 'Frontend Web Developer — ReactJS, HTML, CSS, JavaScript',
  whatsappNumber: '923014718577', // international format without '+'
  whatsappText: 'Hello! I saw your portfolio and want to discuss a project.',
  facebook: 'https://www.facebook.com/profile.php?id=61566583837579',
  instagram: 'https://www.instagram.com/atharfatima007/',
  fiverr: 'https://www.fiverr.com/codewithathar'
}

export const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 88 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 86 },
  { name: 'Responsive Design', level: 90 }
]

export const services = [
  {
    id: 'frontend-dev',
    title: 'Frontend Development (React)',
    description: 'Modern responsive React apps, SPA, component-driven design.',
    price: 'Starting at $50',
    fiverrLink: SITE.fiverr
  },
  {
    id: 'landing-pages',
    title: 'High-converting Landing Pages',
    description: 'Pixel-perfect landing pages, performance-optimized.',
    price: 'Starting at $30',
    fiverrLink: SITE.fiverr
  },
  {
    id: 'bugs-fixes',
    title: 'Bug Fixes and Improvements',
    description: 'Quick fixes, performance tuning, and accessibility improvements.',
    price: 'Hourly / Fixed',
    fiverrLink: SITE.fiverr
  }
]
