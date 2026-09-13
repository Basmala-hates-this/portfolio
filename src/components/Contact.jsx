export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 lg:pl-64 lg:pr-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Still figuring it out, still building — feel free to reach out.
      </p>
      <div className="flex gap-6">
        <a href="mailto:laouaribasmala75@gmail.com" className="underline text-blue-600">Email</a>
        <a href="https://github.com/Basmala-hates-this" className="underline text-blue-600">GitHub</a>
        <a href="https://www.linkedin.com/in/ba-smala-64066129a" className="underline text-blue-600">LinkedIn</a>
      </div>
    </section>
  )
}