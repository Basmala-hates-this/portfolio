import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Collaborative Agenda',
    blurb: 'A shared agenda/scheduling app.',
    tech: 'Java, Swing',
    status: null,
    repo: 'https://github.com/Basmala-hates-this/agenda4',
    link: "not avaliable",
    images: [
    '/src/photos/projects/ag-wel.png',
    '/src/photos/projects/ag-log.png',
    '/src/photos/projects/add.png',
    '/src/photos/projects/edit.png',
    '/src/photos/projects/help.png',
    '/src/photos/projects/list.png',
    '/src/photos/projects/mon.png',
    '/src/photos/projects/not.png',
    '/src/photos/projects/sign.png',
    '/src/photos/projects/week.png',
  ],
  features: [
    'Shared calendar view [monthly, weekly, notification and event list]',
    'Event creation and editing and deletion',
    'Event notifications',
    'User authentication and management',
    'Help section for user guidance',
    'Toast actions for feedback on user actions and reminders',
    'drag & drop event management in weekly view',


    
  ],
  },
  {
    name: 'Room Chat',
    blurb: 'A client-server chat app, built to learn Java sockets.',
    tech: 'Java, Swing',
    status: 'Split across two repos (client + server).',
    repo: 'https://github.com/Basmala-hates-this/RoomChat-Client',
    link: "not avaliable",
    image: '/src/photos/projects/roomchat.png',
  },
  {
    name: 'Album',
    blurb: 'A photo album web app.',
    tech: 'jQuery, PHP, CSS',
    status: 'Database lost — no longer live, code preserved as reference.',
    repo: 'https://github.com/Basmala-hates-this/Albume-recovery',
    link: "not avaliable",
    image: '/src/photos/projects/album.png',
  },
  {
    name: 'Film Gallery',
    blurb: 'Displays a list of movies with links out to their IMDB search results.',
    tech: 'Node.js,HTML,CSS',
    status: null,
    repo: 'https://github.com/Basmala-hates-this/film-gallery',
    link: "not avaliable",
    image: '/src/photos/projects/movie.png',

  },
  {
    name: 'Back with the Milk',
    blurb: 'Pulls dad jokes from an API.',
    tech: 'HTML, CSS, JS',
    status: 'First project I ever deployed (Netlify).',
    repo: 'https://github.com/Basmala-hates-this/Back-With-The-Milk',
    link: "https://back-with-the-milk.netlify.app",
    image: '/src/photos/projects/bwtm.png',
  },
  {
    name: 'RMI Calculator',
    blurb: 'A calculator built with Java RMI.',
    tech: 'Java, Swing',
    status: 'Terminal only, no interface was built.',
    repo: 'https://github.com/Basmala-hates-this/RMIProject',
    link: "not avaliable",
    images:[
        '/src/photos/projects/calc.png',
        '/src/photos/projects/serv-cal.png',
    ]
  },
  {
    name: 'Frogged',
    blurb: 'Rotates frog-themed jokes and quotes — made for a friend.',
    tech: 'HTML, CSS, JS',
    status: 'Deployed on Netlify.',
    repo: 'https://github.com/Basmala-hates-this/frog',
    link :"https://frogged.netlify.app",
    image: '/src/photos/projects/frog.png',
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Small Scale Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}