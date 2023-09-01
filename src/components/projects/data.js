import {
  FaBlog,
  FaBlogger,
  FaIdeal,
  FaMicroblog,
  FaShoppingCart,
  FaStickyNote,
} from "react-icons/fa";

const techDomain = {
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
    title: `Fullstack e-commerce * Tech Shop`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ad. Velit laboriosam laborum beatae voluptates sapiente explicabo reiciendis corrupti iure fugiat eum, debitis tempora voluptatem. Pariatur quibusdam facere assumenda magnam.",
    technologies: [
      techDomain.react,
      techDomain.tailwind,
      techDomain.next,
      techDomain.express,
      techDomain.mongo,
    ],
    live: "https://ecommerce-logo.netlify.app/",
    years: "2023",
    repo: "https://github.com/mt-alejo/project-ecommerce-react",
  },
  {
    id: 2,
    image: <FaStickyNote />,
    title: `Fullstack blog app * Habits Blog`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ad. Velit laboriosam laborum beatae voluptates sapiente explicabo reiciendis corrupti iure fugiat eum, debitis tempora voluptatem. Pariatur quibusdam facere assumenda magnam.",
    technologies: [],
    live: "bla",
    years: "2023",
    repo: "bla",
  },
  {
    id: 3,
    image: <FaShoppingCart />,
    title: `Project 3`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ad. Velit laboriosam laborum beatae voluptates sapiente explicabo reiciendis corrupti iure fugiat eum, debitis tempora voluptatem. Pariatur quibusdam facere assumenda magnam.",
    technologies: [],
    live: "bla",
    years: "2023",
    repo: "bla",
  },
];

export { projects };
