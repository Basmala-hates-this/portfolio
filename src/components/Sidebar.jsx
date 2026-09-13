const links = [
  { href: '#about', label: 'About' },
  { href: '#glaukopis', label: 'Glaukopis' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Sidebar() {
  return (
    <nav className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-64 px-6 py-10 gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}