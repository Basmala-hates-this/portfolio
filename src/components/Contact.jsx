export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 lg:pl-64 lg:pr-12 text-center">
      <h2 className="text-3xl font-bold mb-4 text-text-main">Get in touch</h2>
      <p className="text-text-soft mb-6 max-w-md">
        Still figuring it out, still building — feel free to reach out.
      </p>
      <div className="flex gap-6">
        <a href="mailto:laouaribasmala75@gmail.com" className="no-underline text-success
        hover:text-text-main
  transition-all px-6 py-4 rounded-md 
   translate-y-0 hover:translate-y-1
   hover:shadow-[0_8px_20px_var(--color-accent-neon)]
   focus:outline-none focus:ring-2 focus:ring-text-main hover:bg-bg-dark2
">Email</a>
        <a href="https://github.com/Basmala-hates-this" className="no-underline text-success
        hover:text-text-main
  transition-all px-6 py-4 rounded-md 
   translate-y-0 hover:translate-y-1
   hover:shadow-[0_8px_20px_var(--color-accent-neon)]
   focus:outline-none focus:ring-2 focus:ring-text-main hover:bg-bg-dark2
">GitHub</a>
        <a href="https://www.linkedin.com/in/ba-smala-64066129a" className="no-underline text-success
        hover:text-text-main
  transition-all px-6 py-4 rounded-md 
   translate-y-0 hover:translate-y-1
   hover:shadow-[0_8px_20px_var(--color-accent-neon)]
   focus:outline-none focus:ring-2 focus:ring-text-main hover:bg-bg-dark2
">LinkedIn</a>
      </div>
    </section>
  )
}