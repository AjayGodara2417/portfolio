export interface Project {
  name: string;
  liveUrl: string;
  repoUrl: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "Gyan Sathi",
    liveUrl: "https://gyan-sathi.vercel.app/",
    repoUrl: "https://github.com/AjayGodara2417/Gyan_Sathi",
    description:
      "An AI powered Student App for students to get the best study material, resources and Clear doubts with AI and more",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "MySQL"],
  },
  {
    name: "Dukan",
    liveUrl: "https://dukan-client.onrender.com/",
    repoUrl: "https://github.com/AjayGodara2417/Dukan",
    description:
      "Ecommerce website for buying and selling products with all the features of a real ecommerce website",
    tech: ["React", "Express", "Node.js", "Render", "JavaScript", "Styled Components"],
  },
  {
    name: "Bharat Bhraman",
    liveUrl: "https://bharat-bhraman-nu.vercel.app/",
    repoUrl: "https://github.com/AjayGodara2417/Bharat-Bhraman",
    description:
      "Step toward new India to boost the current condition of the tour & travel industry through BB",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", 'php', 'Bootstrap'],
  },
  {
    name: "Notzy",
    liveUrl: "https://notzy.vercel.app/",
    repoUrl: "https://github.com/AjayGodara2417/Notzy",
    description:
      "React based notes taking application and use local storage to save the details",
    tech: ["React", "local storage", "Tailwind CSS", "Vercel", "JavaScript"],
  },
  {
    name: "Brainwave",
    liveUrl: "https://brainwave-two-ruby.vercel.app/",
    repoUrl: "https://github.com/AjayGodara2417/Brainwave",
    description:
      "Brainwave is a new age sleak design for modern web based applications",
    tech: ["React", "Tailwind CSS", "JavaScript",],
  },
  {
    name: "Weather App",
    liveUrl: "https://weathertoday-wheat.vercel.app/",
    repoUrl: "https://github.com/AjayGodara2417/WeatherApp",
    description:
      "Weather app to check weather through app by only entering the name of the place",
    tech: ["React", "APIs", "HTML", "CSS", "JavaScript"],
  },
];
