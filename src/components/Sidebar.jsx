const links = [
  { href: '#about', label: 'About' },
  { href: '#glaukopis', label: 'Glaukopis' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Sidebar() {
  return (
    <nav className="hidden lg:flex flex-col  border-r-4 border-t border-b
fixed top-1  left-1 right-1 mb-10 mr-10  h-screen w-64 px-6 py-10
 gap-8 bg-gradient-to-br from-bg-sidebar to-dark2 text-text-primary  border-success
 rounded-md font-mono font-bold"
 
 >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
        className="block w-full text-center
       
 text-text-soft hover:text-text-main
  transition-all px-6 py-4 rounded-md no-underline
   translate-y-0 hover:translate-y-1
   hover:shadow-[0_8px_20px_var(--color-accent-neon)]
   focus:outline-none focus:ring-2 focus:ring-text-main hover:bg-bg-dark2"

   >
          {link.label}
        </a>
      ))}
    </nav>
  )
}