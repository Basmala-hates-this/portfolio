import ScreenshotSlider from './ScreenshotSlider'
import Collapsible from './Collapsible'

// we make the slid show iterate on its own when we decide to mess with style

const screenshots = [
   '/src/photos/glaukopis/welcome.png',
    '/src/photos/glaukopis/info.png',
    '/src/photos/glaukopis/login.png',
    '/src/photos/glaukopis/admin.png',
    '/src/photos/glaukopis/chat.png',
    // '/src/photos/glaukopis/cv.png',
    '/src/photos/glaukopis/dash.png',
    '/src/photos/glaukopis/guide.png',
    '/src/photos/glaukopis/pchat.png',
    '/src/photos/glaukopis/profile.png',
    '/src/photos/glaukopis/edit.png',
    '/src/photos/glaukopis/rooms.png',
    '/src/photos/glaukopis/search.png',
    '/src/photos/glaukopis/pupp.png',
    '/src/photos/glaukopis/rrp.png',
    '/src/photos/glaukopis/Sadmin.png',
   
    
]

const stack = [
  { name: 'React + Vite', blurb: 'Frontend, chosen for fast iteration during a long solo build.' },
  { name: 'Node.js + Express', blurb: 'Backend API, with role-based access and real-time features.' },
  { name: 'PostgreSQL (Supabase)', blurb: 'Core data layer, queried directly with node-postgres.' },
  { name: 'Groq → Mistral → OpenRouter', blurb: 'A task-based AI routing chain with fallback, used for study material generation, smart search, and more.' },
  { name: 'Socket.io', blurb: 'Real-time room chat and live updates.' },
  { name: 'i18n (English/French/Arabic)'},
]

export default function Glaukopis() {
  return (
<section id='glaukopis' className="min-h-screen px-6 lg:pl-64 lg:pr-12 py-20">
        <h2 className="text-3xl font-bold mb-2">🦉 Glaukopis</h2>
      <p className="text-lg text-gray-500 mb-8">
        A self-built university collaboration platform for knowledge sharing, peer learning, and AI-assisted academic tools.
      </p>

      {screenshots.length > 0 && (
  <div className="max-w-1/2 mx-auto mb-8">
    <ScreenshotSlider images={screenshots} />
  </div>
)}

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">About the project</h3>
        <p className="text-gray-500 mb-3">
          Glaukopis started as a relatively simple university collaboration concept
          and grew considerably as new ideas and technical challenges appeared along
          the way. It's not meant to be a perfect production system — it's a highly
          functional project built progressively from scratch, well beyond its
          original prototype.</p>
        <p className="text-gray-500">
          The goal was never just to finish an app, but to use building it as a way
          to explore, break, improve, and learn.
        </p>
      </div>
      <div className="mb-8">
  <h3 className="text-xl font-semibold mb-3">Key Features</h3>

  <Collapsible title="Community">
    <ul className="list-disc list-inside text-gray-500 space-y-1">
      <li>Post/comment structured collaboration</li>
      <li>Room-oriented architecture (public, university, major, subject, private)</li>
      <li>Answered/unanswered question filtering</li>
      <li>Peer endorsements</li>
      <li>Study-partner posts</li>
      <li>Real-time room chat</li>
      <li>Cross-specialty collaboration rooms</li>
    </ul>
  </Collapsible>

  <Collapsible title="AI-assisted">
    <ul className="list-disc list-inside text-gray-500 space-y-1">
      <li>Question suggestions</li>
      <li>Study material generation</li>
      <li>Smart search assistance</li>
      <li>Study plan generation</li>
      <li>Room summaries</li>
      <li>Difficulty tagging</li>
      <li>Voice navigation</li>
    </ul>
  </Collapsible>
  <p className="text-gray-500 mb-3">
         ....There is still more to this project then the list of features mentioned and the screenshots, but I will let you explore it yourself.
        </p>
</div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Stack</h3>
        <ul className="space-y-2">
          {stack.map((s) => (
            <li key={s.name} className="text-gray-500">
              <span className="font-medium text-gray-700">{s.name}</span> — {s.blurb}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Where it stands</h3>
        <p className="text-gray-500">
          Currently paused — but not abandoned. Most core and advanced features are
          complete (real-time chat, peer endorsements, AI study tools, cross-specialty
          rooms). What's left is mostly polish: voice navigation, call UI, mobile
          layout, and documentation. The journey isn't over, it's just waiting for
          its next phase.
        </p>
      </div>

      <div className="flex gap-4">
        <a href="https://glaukopis.vercel.app/" className="underline text-blue-600">Live site</a>
        <a href="https://github.com/Basmala-hates-this/Glaukopis" className="underline text-blue-600">GitHub</a>
        {/* i might remove the github link */}
      </div>
    </section>
  )
}