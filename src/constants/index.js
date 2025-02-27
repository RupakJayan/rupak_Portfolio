import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mern,
  hackathon,
  hotel,
  portfolio,
  security,
  aiml,
  volunteer,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "MERN Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Innovator", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "MERN Full Stack Intern",
    company_name: "Remote",
    icon: mern,
    iconBg: "#E6DEDD",
    date: "Jun 2024",
    points: [
      "Developed and deployed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Implemented RESTful APIs and optimized database queries for efficient data retrieval.",
      "Designed responsive UI components using React.js and Tailwind CSS.",
      "Integrated authentication and authorization features using JWT and OAuth.",
    ],
  },
  {
    title: "Competitive Coder",
    company_name: "YANTRA'24: AlgoArena",
    icon: hackathon,
    iconBg: "#383E56",
    date: "Mar 2024",
    points: [
      "Achieved a Top 5 finish in YANTRA’24: AlgoArena, a competitive coding event organized by The AI & ML Club – TAM, outperforming 100+ teams.",
      "Solved complex algorithmic problems using Python and C++ under time constraints.",
      "Collaborated with teammates to develop efficient solutions and optimize execution time.",
    ],
  },
  {
    title: "Project Developer",
    company_name: "Hotel Recommendation System",
    icon: hotel,
    iconBg: "#E6DEDD",
    date: "Completed",
    points: [
      "Integrated maps to locate hotels based on 10,000+ user reviews, improving search efficiency by 40%.",
      "Utilized Flask, Pandas, BeautifulSoup, NLTK, and Requests for data scraping and sentiment analysis.",
      "Developed a dynamic and interactive front-end using React.js and Tailwind CSS.",
    ],
  },
  {
    title: "Portfolio Website Developer",
    company_name: "Personal Project",
    icon: portfolio,
    iconBg: "#383E56",
    date: "Completed",
    points: [
      "Designed a responsive personal portfolio website using React.js, Tailwind CSS, and JavaScript.",
      "Showcased projects, skills, and experiences with interactive UI elements for enhanced user engagement.",
      "Optimized performance by implementing lazy loading and efficient state management.",
    ],
  },
  {
    title: "Research & Development",
    company_name:
      "Lightweight Cryptography for Secure and Decentralized Data Storage",
    icon: security,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Created a lightweight cryptographic framework using ChaCha20 encryption and dynamic key generation to enhance security in IoT networks.",
      "Implemented tile-based image encryption, achieving 99.6% NPCR and passing NIST randomness tests for robustness.",
      "Conducted in-depth research on blockchain-based decentralized data storage solutions.",
    ],
  },
  {
    title: "Senior Core Member",
    company_name: "TAM (AI/ML) Club - VIT Vellore",
    icon: aiml,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Participated in AI/ML hackathons and workshops organized by the club.",
      "Contributed to research discussions and knowledge-sharing sessions on AI and machine learning.",
    ],
  },
  {
    title: "Senior Core Member",
    company_name: "Youth Red Cross Club - VIT Vellore",
    icon: volunteer,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Donated blood as part of the club’s humanitarian initiatives.",
      "Organized community service activities promoting social responsibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hotel Recommendation System",
    description:
      "Integrated maps to locate hotels based on 10,000+ user reviews, improving search efficiency by 40%. Used sentiment analysis to enhance user experience.",
    tags: [
      { name: "Flask", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "BeautifulSoup", color: "pink-text-gradient" },
      { name: "NLTK", color: "yellow-text-gradient" },
    ],
    image: hotel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "Designed a responsive personal portfolio website using React.js, Tailwind CSS, and JavaScript. Showcased projects, skills, and experiences with interactive UI elements.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lightweight Cryptography for Secure Data Storage",
    description:
      "Developed a cryptographic framework using ChaCha20 encryption and tile-based image encryption. Achieved 99.6% NPCR and passed NIST randomness tests for security.",
    tags: [
      { name: "Cryptography", color: "blue-text-gradient" },
      { name: "ChaCha20", color: "green-text-gradient" },
      { name: "Blockchain", color: "pink-text-gradient" },
    ],
    image: security,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
