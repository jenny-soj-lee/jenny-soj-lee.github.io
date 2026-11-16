export const profile = {
  // the flip charset in About.jsx is lowercase a-z
  headline: 'hi my name is jenny',
  blurb: 'senior @ Cornell University, aspiring ASIC design engineer!',
  linkedin: 'https://www.linkedin.com/in/jenny-sojung-lee',
  email: 'jenny.soj.lee@gmail.com',
}

export const experience = [
  {
    logo: '/logos/amd.png',
    role: 'Logic Design Engineer Co-op',
    org: 'AMD',
    dates: 'Jan 2026 – Aug 2026',
    bullets: [
      'Debugged next-generation low-power DDR PHY RTL datapath modules',
      'Owned reset domain crossing methodology and sign-off',
      'Built AI-powered module testbench generation and regression error parsing tools in Python',
    ],
    skills: ['SystemVerilog', 'Synopsys Verdi', 'Siemens Questa RDC', 'Python', 'Tcl', 'Perl'],
  },
  {
    logo: '/logos/cadence.png',
    role: 'Digital ASIC Design Intern',
    org: 'Cadence Design Systems',
    dates: 'May 2025 – Aug 2025',
    bullets: [
      'Executed full RTL-to-GDSII flow for a kitchen sous-vide controller ASIC (SkyWater 130nm) and Tensilica HiFi3 Audio Engine (GPDK 45nm)',
      'Cut routing congestion hotspots, closed timing, and optimized for power, performance, and area for both ASIC designs'
    ],
    skills: ['Cadence Genus', 'Cadence Innovus', 'Tcl'],
  },
]

export const projects = [
  {
    media: [
      { src: '/media/pcb-board.gif', alt: 'Rotating 3D render of the AUX_V4 board' },
      { src: '/media/pcb-board-top.jpg', alt: 'Top view of the AUX_V4 board layout' },
    ],
    name: 'Auxiliary & Safety System PCB',
    blurb: 'Built for 2026 Cornell Electric Vehicles entry car in Shell Eco Marathon',
    tags: ['Altium Designer', 'PCB Design', 'LTSpice'],
    href: null,
  },
  {
    media: [
      { src: '/media/miami.png', alt: 'Energy-efficient path found for Miami, FL' },
      { src: '/media/buckhannon.png', alt: 'Energy-efficient path found for Buckhannon, VA' },
    ],
    name: 'Energy-Efficient Route-Planning Program',
    blurb: 'Linear programming application for energy-efficient route-planning for autonomous EVs',
    tags: ['CVXPY', 'OpenStreetMap API', 'Open-Meteo Elevation API', 'Python'],
    href: 'https://github.com/jenny-soj-lee/ece4800-final-project',
  },
]

export const resume = '/resume/portfolio_resume.pdf'

// photos: files in public/photos/. `text` is caption under each card.
export const photos = [
  { image: '/photos/rainier-chipmunk.jpg', text: 'Paradise Valley Squirrel' },
  { image: '/photos/singing-beach-cove.jpg', text: 'Singing Beach' },
  { image: '/photos/hammond-castle-courtyard.jpg', text: 'Hammond Castle' },
  { image: '/photos/boston-common-ducklings.jpg', text: 'Ducks @ Boston Public Garden' },
  { image: '/photos/seagulls.jpg', text: 'Manchester-by-the-Sea Beach' },
  { image: '/photos/boston-common-squirrel.jpg', text: 'Boston Common Squirrel' },
  { image: '/photos/zakim-bridge-dusk.jpg', text: 'Zakim Bridge' },
  { image: '/photos/singing-beach-dog.jpg', text: 'Beach Dog' },
  { image: '/photos/public-garden-squirrel.jpg', text: 'Boston Public Garden Squirrel' },
  { image: '/photos/seattle-waterfront.jpg', text: 'Elliott Bay' },
  { image: '/photos/manchester.jpg', text: 'Motif #1 Rockport, MA' },
  { image: '/photos/mount-rainier.jpg', text: 'Mt. Rainier' },
  { image: '/photos/tatoosh-range.jpg', text: 'Tatoosh Range' },
  { image: '/photos/alpine-asters.jpg', text: 'Alpine Asters' },
]

// gallery: 'photos' renders the circular gallery under that interest.
export const interests = [
  {
    title: 'Photography & Squirrel Watching',
    body: 'Shot on Sony a6400 with 16-50mm f/3.5-5.6 Lens',
    gallery: 'photos',
  },
  {}
]
