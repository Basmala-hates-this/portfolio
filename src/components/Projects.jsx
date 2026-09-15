import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Collaborative Agenda',
    blurb: 'A shared agenda/scheduling app.',
    tech: 'Java, Swing',
    status: null,
    repo: 'https://github.com/Basmala-hates-this/agenda4',
    
    images: [
    '/photos/projects/ag-wel.png',
    '/photos/projects/ag-log.png',
    '/photos/projects/add.png',
    '/photos/projects/edit.png',
    '/photos/projects/help.png',
    '/photos/projects/list.png',
    '/photos/projects/mon.png',
    '/photos/projects/not.png',
    '/photos/projects/sign.png',
    '/photos/projects/week.png',
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
    '/photos/projects/ro-ch.png',
    '/photos/projects/room-log.png',
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
    '/photos/projects/alb.png',
    '/photos/projects/hov.png',
    '/photos/projects/slid.png',
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
    image: '/photos/projects/movie.png',

  },
  {
    name: 'Back with the Milk',
    blurb: 'Pulls dad jokes from an API.',
    tech: 'HTML, CSS, JS',
    status: 'First project I ever deployed (Netlify).',
    repo: 'https://github.com/Basmala-hates-this/Back-With-The-Milk',
    liveLink: "https://back-with-the-milk.netlify.app",
    image: '/photos/projects/bwtm.png',
  },
  {
    name: 'RMI Calculator',
    blurb: 'A calculator built with Java RMI.',
    tech: 'Java, Swing',
    status: 'Terminal only, no interface was built.',
    repo: 'https://github.com/Basmala-hates-this/RMIProject',
    images:[
        '/photos/projects/calc.png',
        '/photos/projects/serv-cal.png',
    ]
  },
  {
    name: 'Frogged',
    blurb: 'Rotates frog-themed jokes and quotes — made for a friend.',
    tech: 'HTML, CSS, JS',
    status: 'Deployed on Netlify.',
    repo: 'https://github.com/Basmala-hates-this/frog',
    liveLink :"https://frogged.netlify.app",
    image: '/photos/projects/frog.png',
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