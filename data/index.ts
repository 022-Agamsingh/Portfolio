import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Let's build something great together",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on web3",
    description: "The Inside Scoop",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Map Marvel",
    des: "Map Marvel is a web app that helps college students explore and stay updated with campus events. It features an interactive map showing event locations, details, timings, and coordinator info — making event discovery easy and engaging.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/https://mapmarvel.vercel.app/",
  },
  {
    id: 2,
    title: "Simon Game",
    des: "Test your memory and reflexes with the classic Simon Game. Follow the light sequence and repeat it back to win.",
    img: "/p2.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/https://simon-game-challenge-completed.vercel.app/",
  },
  {
    id: 3,
    title: "Sales Insights Dashboard",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.png",
    iconLists: ["/sql.svg", "/tableau.svg", "/mysql.svg"],
    link: "/https://github.com/022-Agamsingh/sale_insights",
  },
  {
    id: 4,
    title: "Maximizing Revenue for Taxi Services",
    des: "Taxi Fare Analysis is a data-driven project that uses hypothesis testing to explore the relationship between payment methods and total fare amounts. It helps identify whether paying by cash or credit card impacts driver revenue, offering insights to boost earnings without affecting customer experience",
    img: "/taxi driver.png",
    iconLists: ["/sql.svg", "/python.svg"],
    link: "/https://colab.research.google.com/drive/1oeeHzTiwsJfBLcY0mKCTc7PIE-LaSghd?usp=sharing",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Scientist Intern",
    company: "Hero VIred",
    date: "June 2023 - July 2023",
    description:
      "Developed and implemented data-driven solutions using Python, SQL, and machine learning techniques.",
    skills: ["Python", "SQL", "Machine Learning", "Data Analysis"],
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "The Sparks Foundation",
    date: "March 2023 - April 2023",
    description:
      "Worked on predictive modeling and data visualization projects using Python and statistical analysis.",
    skills: ["Python", "Data Visualization", "Statistical Analysis"],
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/022-Agamsingh",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/agamsingh646629",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/agam-pratap-singh-99080b254/",
  },
];
