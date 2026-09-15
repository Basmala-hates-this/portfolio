import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Collaborative Agenda',
    blurb: 'A shared agenda/scheduling app.',
    tech: 'Java, Swing',
    status: null,
    repo: 'https://github.com/Basmala-hates-this/agenda4',
    
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
    images: [
    '/src/photos/projects/ro-ch.png',
    '/src/photos/projects/room-log.png',
  ],
  features: [
    'Client-server architecture using Java sockets',
    'User authentication and management',
    'Real-time messaging with multiple users in a chat room',
    'Basic GUI for user interaction',
    "color coded messages for diffrent types of messages (user, system, error,private,multiple,broeadcast )",
  ],
  },
  {
    name: 'Album',
    blurb: 'A photo album web app.',
    tech: 'jQuery, PHP, CSS',
    status: 'Database lost — no longer live, code preserved as reference.',
    repo: 'https://github.com/Basmala-hates-this/Albume-recovery',
    images:[
    '/src/photos/projects/alb.png',
    '/src/photos/projects/hov.png',
    '/src/photos/projects/slid.png',
    ],
    features: [
    'Photo upload via file selection or URL',
    'Album creation and organization',
    'Slideshow feature for viewing photos',
    'Drag-and-drop photo creating mini albums',
    'Photo deletion and management',
    'Search functionality for finding photos/mini albums by name or tag',
  ],

  },
  {
    name: 'Film Gallery',
    blurb: 'Displays a list of movies with links out to their IMDB search results.',
    tech: 'Node.js,HTML,CSS',
    status: null,
    repo: 'https://github.com/Basmala-hates-this/film-gallery',
    image: '/src/photos/projects/movie.png',

  },
  {
    name: 'Back with the Milk',
    blurb: 'Pulls dad jokes from an API.',
    tech: 'HTML, CSS, JS',
    status: 'First project I ever deployed (Netlify).',
    repo: 'https://github.com/Basmala-hates-this/Back-With-The-Milk',
    liveLink: "https://back-with-the-milk.netlify.app",
    image: '/src/photos/projects/bwtm.png',
  },
  {
    name: 'RMI Calculator',
    blurb: 'A calculator built with Java RMI.',
    tech: 'Java, Swing',
    status: 'Terminal only, no interface was built.',
    repo: 'https://github.com/Basmala-hates-this/RMIProject',
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
    liveLink :"https://frogged.netlify.app",
    image: '/src/photos/projects/frog.png',
  },
]

export default function Projects() {
  return (
<section id='projects' className="min-h-screen px-6 lg:pl-64 lg:pr-12 py-20
ml-5  text-text-primary

">
        <h2 className="text-3xl font-bold mb-8 text-text-postTitle">Small Scale Projects</h2>
     <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}