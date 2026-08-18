type TechStackItem = {
  category: string;
  items: string[];
};

export const techStack: TechStackItem[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React.js", "Vue.js", "Typescript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Nest.js", "Express"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "UniApp", "Mini-Program"],
  },
  {
    category: "Styling",
    items: ["TailwindCSS", "Unocss", "Sass", "Less"],
  },

  {
    category: "Database",
    items: ["PostgresSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Dev tools",
    items: ["MacBook Pro"],
  },
];
