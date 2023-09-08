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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    extension,
    portfolio,
    ecommerce,
    threejs,
  } from "@/public/assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const skills = [
    {
      title: "UX Design",
      icon: web,
    },
    {
      title: "Web Design",
      icon: mobile,
    },
    {
      title: "Web Optimization",
      icon: backend,
    },
    {
      title: "Chrome Extension Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  
  const projects = [
    {
      name: "Chrome Extension for Grouping tabs",
      description:
        "Designed and built a Chrome extension to enhance user productivity by managing multiple open tabs in the browser. ",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Chrome API",
          color: "green-text-gradient",
        },
      ],
      image: extension,
      source_code_link: "https://github.com/letsbuildanything/Group-tabs",
    },
    {
      name: "Ecommerce Platform Development",
      description:
        "Developing a comprehensive e-commerce platform using Next.js, MongoDB, and Tailwind CSS, featuring both user and admin interfaces.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Next-AuthJS",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/letsbuildanything/Ecommerce-Learning",
    },
    {
      name: "Portfolio",
      description:
        "The portfolio site showcases 3D models in an interactive environment, providing users with a unique and engaging experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS(@react-three/*)",
          color: "green-text-gradient",
        },
        {
          name: "Framer-Motion",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/letsbuildanything/portfolio",
    },
  ];
  
  export { skills, technologies, projects };