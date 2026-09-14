export default function About() {
  return (
   <section id="about" className="min-h-screen flex flex-col font-syne
    justify-center px-6 lg:pl-64 lg:pr-12 py-20 
    ml-5 bg-gradient-to-br from-bg-sidebar to-bg-body text-text-primary
    ">
  <div className="max-w-2xl">
      <h2 className="text-3xl font-bold mb-6 text-text-postTitle">About me</h2>

      <p className="text-lg  mb-4 text-text-muted">
        I'm a Computer Science student — bachelor's in Information Systems and
        Software Engineering (ISIL, and yes, it was as much suffering as it sounds)
        in hopes the masters in Data Sceince works better
        — and a curious person who happened to find myself in technology.
      </p>

      <p className="text-lg text-text-muted mb-4" >
        I've always been drawn to understanding how things work. Sometimes that
        means writing code, sometimes it means wondering why people behave the
        way they do, and sometimes it means falling down a completely unrelated
        rabbit hole about mathematics, physics, biology, or whatever else catches
        my attention.
      </p>

     <p className="text-lg text-text-muted mb-4">
  I learn by building. Most of my projects start with a question, an idea,
  or occasionally a terrible decision that somehow turns into a project.
  I like taking an idea from "wouldn't it be interesting if..." to
  something that actually works — these days, a lot of that starts with
  vibing with an AI until it works, then going back to figure out why.
</p>

      <p className="text-lg text-text-muted mb-4">
        For me, technology is a tool rather than the destination. I'm interested
        in the intersection between technology, people, and ideas — creating
        things that are useful, understandable, and occasionally a little unusual.
      </p>

      <p className="text-base text-text-soft italic mt-6">
        Current status: still figuring it out.<br />
        Last known location: somewhere between a code editor and a completely
        unrelated article.
      </p>
       </div>
    </section>
  )
}