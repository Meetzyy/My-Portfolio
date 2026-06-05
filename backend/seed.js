const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('./models/Project');

const projects = [
  {
    title: 'USER MANAGEMENT & REGISTRY',
    description: 'A full-stack, decoupled web application utilizing a Vite-React 19 frontend and an Express.js backend to manage high-performance user registries with secure cryptographic authentication and CORS-enabled REST APIs.',
    tags: ['React', 'Express.js', 'MongoDB', 'REST API'],
    highlights: [
      'Implemented secure cryptographic authentication with CORS-enabled REST APIs',
      'Engineered reactive state-driven registry panel with real-time UI updates',
      'Optimized client-side rendering for seamless data synchronization'
    ],
    link: 'https://github.com/Meetzyy/User-Management-App',
    liveLink: 'https://user-management-app-project.netlify.app/',
    imageClass: 'project-image-1',
    image: '/user-management-app.png'
  },
  {
    title: 'CLOTH STORE — E-COMMERCE',
    description: 'A full-scale, responsive e-commerce web application for clothing retail, incorporating dynamic client-side routing and optimized state management with persistent browser storage.',
    tags: ['React', 'React Router', 'Axios', 'CSS'],
    highlights: [
      'Engineered complex cart system and checkout logic with session persistence',
      'Integrated dynamic third-party API communication using Axios',
      'Implemented product filtering, search, and seamless pagination'
    ],
    link: 'https://github.com/Meetzyy/Cloth-Store-App',
    liveLink: 'https://cloth-store-react-app.netlify.app/',
    imageClass: 'project-image-2',
    image: '/cloth-store-app.png'
  },
  {
    title: 'SHARK TANK PITCH TRACKER',
    description: 'A dynamic, data-driven REST API CRUD application built from scratch using vanilla JavaScript to handle, manage, and track startup pitch submissions with zero framework overhead.',
    tags: ['Vanilla JS', 'REST API', 'CRUD', 'Skeleton CSS'],
    highlights: [
      'Programmed custom frontend search algorithms for real-time data filtering',
      'Manipulated standard DOM nodes directly for lightning-fast performance',
      'Delivered lightweight UX with Skeleton CSS — zero framework overhead'
    ],
    link: 'https://github.com/Meetzyy/Shark-Tank-App',
    liveLink: 'https://shark-tank-app.netlify.app/',
    imageClass: 'project-image-3',
    image: '/shark-tank-app.png'
  },
  {
    title: 'AMAZON PRIME VIDEO CLONE',
    description: 'A high-fidelity pixel-perfect replication of the Amazon Prime Video streaming platform interface demonstrating advanced modern frontend styling capabilities with glassmorphic design elements.',
    tags: ['HTML5', 'CSS3', 'Glassmorphism', 'Flexbox & Grid'],
    highlights: [
      'Authored sophisticated responsive UI with glassmorphic fixed navigation',
      'Implemented custom multi-tier dropdown menus and box-shadow overlays',
      'Designed hardware-accelerated directional hover-scale animations'
    ],
    link: 'https://github.com/Meetzyy/Amazon-Prime-Video-Clone-App-',
    liveLink: 'https://amazon-prime-video-clone-app.netlify.app/',
    imageClass: 'project-image-4',
    image: '/amazon-prime-clone-app.png'
  }
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio')
  .then(async () => {
    console.log('Connected to MongoDB');
    await Project.deleteMany({});
    console.log('Old projects removed');
    await Project.insertMany(projects);
    console.log('Projects seeded successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    process.exit(1);
  });
