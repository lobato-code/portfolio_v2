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
    title: `React e-commerce •-• Tech Shop`,
    description:
      "UI e-commerce. View products description. Search for a product. Sort by category. Save profile with local storage. Orders CRUD. Save orders on shopping cart. Make chackouts. View orders history",
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
    image: <FaShoppingCart />,
  },
  {
    id: 2,
    title: `Next dashboard •-• Shop Administrator`,
    description:
      "UI dashboard. Login with Google. View dashboard of categories. Get, add, edit, delete products. See orders",
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
    image: <FaChartBar />,
  },
  {
    id: 3,
    title: `Fullstack blog app •-• Habits Blog `,
    description: "(Coming soon..)",
    technologies: ["Typescript", "Sass", "SQL"],
    live: "#",
    years: "2023",
    repo: "#",
    image: <FaStickyNote />,
  },
];

export { projects };
