const skillGroups = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Java', 'PHP', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js / Express', 'jQuery', 'Socket.io'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Vite', 'Git / GitHub', 'Vercel', 'Netlify', 'Supabase', 'Render', 'AI-assisted development'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 lg:pl-64 lg:pr-12 py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-lg font-semibold mb-2">{group.category}</h3>
            <ul className="text-gray-500 space-y-1">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}