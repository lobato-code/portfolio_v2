import { FaChartBar, FaShoppingCart, FaStickyNote } from "react-icons/fa";

const techDomain = {
  html: "HTML",
  css: "CSS",
  js: "JS",
  react: "React",
  tailwind: "Tailwind",
  next: "Next",
  express: "Express",
  mongo: "Mongo",
};

const projects = [
  {
    id: 1,
    image: <FaShoppingCart />,
    title: `React e-commerce •-• Tech Shop`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ad. Velit laboriosam laborum beatae voluptates sapiente explicabo reiciendis corrupti iure fugiat eum, debitis tempora voluptatem. Pariatur quibusdam facere assumenda magnam.",
    technologies: [
      techDomain.html,
      techDomain.css,
      techDomain.js,
      techDomain.tailwind,
      techDomain.react,
    ],
    live: "https://ecommerce-logo.netlify.app/",
    years: "2023",
    repo: "https://github.com/mt-alejo/project-ecommerce-react",
  },
  {
    id: 2,
    image: <FaChartBar />,
    title: `Next dashboard •-• Shop Administrator`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ad. Velit laboriosam laborum beatae voluptates sapiente explicabo reiciendis corrupti iure fugiat eum, debitis tempora voluptatem. Pariatur quibusdam facere assumenda magnam.",
    technologies: [
      techDomain.html,
      techDomain.css,
      techDomain.js,
      techDomain.tailwind,
      techDomain.next,
    ],
    live: "https://practice-next-dashboard.vercel.app/",
    years: "2023",
    repo: "https://github.com/mt-alejo/project-dashboard-next",
  },
  {
    id: 3,
    image: <FaStickyNote />,
    title: `Fullstack blog app •-• Habits Blog (coming soon..)`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ad. Velit laboriosam laborum beatae voluptates sapiente explicabo reiciendis corrupti iure fugiat eum, debitis tempora voluptatem. Pariatur quibusdam facere assumenda magnam.",
    technologies: ["Typescript", "Sass"],
    live: "#",
    years: "2023",
    repo: "#",
  },
];

export { projects };
