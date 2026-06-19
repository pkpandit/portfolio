import PageTitle from "@/app/conponents/common/pageTitle/page";
import React from "react";
import { BsCheck2Circle, BsMicrosoft } from "react-icons/bs";
import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiDrizzle,
  SiGithubcopilot,
  SiUmbraco,
} from "react-icons/si";
import {
  FaServer,
  FaCubes,
  FaGaugeHigh,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
const About = () => {
  const WhatIDeliver = [
    {
      id: "item_01",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Modern full stack web applications",
    },
    {
      id: "item_02",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Scalable backend systems & APIs",
    },
    {
      id: "item_03",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Premium responsive interfaces",
    },
    {
      id: "item_04",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Performance-focused development",
    },
    {
      id: "item_05",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Reliable technical support & optimization",
    },
  ];
  const ClientsWork = [
    {
      id: "item_01",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Pre  mium quality execution",
    },
    {
      id: "item_02",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Clear communication and transparency",
    },
    {
      id: "item_03",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Business-first technical thinking",
    },
    {
      id: "item_04",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Long-term scalability and maintainability",
    },
    {
      id: "item_05",
      icon: <BsCheck2Circle className="text-blue-600" size={24} />,
      item: "Reliable project delivery",
    },
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" size={14} />,
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-[#E34F26]" size={14} />,
        },
        { name: "CSS3", icon: <SiCss className="text-[#1572B6]" size={14} /> },
      ],
    },
    {
      category: "Frontend",
      skills: [
        {
          name: "React.js",
          icon: <SiReact className="text-[#61DAFB]" size={14} />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-foreground" size={14} />,
        },
        { name: "Sass", icon: <SiSass className="text-[#CC6699]" size={14} /> },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-[#7952B3]" size={14} />,
        },
        {
          name: "Components",
          icon: <FaCubes className="text-indigo-500" size={14} />,
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-[#339933]" size={14} />,
        },
        {
          name: "REST APIs",
          icon: <FaServer className="text-emerald-500" size={14} />,
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#47A248]" size={14} />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-[#4169E1]" size={14} />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-[#4479A1]" size={14} />,
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" size={14} /> },
        {
          name: "Docker",
          icon: <SiDocker className="text-[#2496ED]" size={14} />,
        },
        {
          name: "VS Code",
          icon: <VscVscode className="text-[#007ACC]" size={14} />,
        },
        {
          name: "Drizzle ORM",
          icon: <SiDrizzle className="text-[#C5F74F]" size={14} />,
        },
      ],
    },
    {
      category: "Engineering",
      skills: [
        {
          name: "Optimization",
          icon: <FaGaugeHigh className="text-amber-500" size={14} />,
        },
        {
          name: "Responsive",
          icon: <FaLaptopCode className="text-blue-500" size={14} />,
        },
        {
          name: "Cross-Browser",
          icon: <FaGlobe className="text-teal-500" size={14} />,
        },
      ],
    },
    {
      category: "AI Tools",
      skills: [
        {
          name: "Copilot",
          icon: (
            <SiGithubcopilot
              className="text-[#24292E] dark:text-white"
              size={14}
            />
          ),
        },
      ],
    },
    {
      category: "Other Platforms",
      skills: [
        {
          name: "SharePoint",
          icon: <BsMicrosoft className="text-[#0078D4]" size={14} />,
        },
        {
          name: "Umbraco",
          icon: <SiUmbraco className="text-[#F58220]" size={14} />,
        },
      ],
    },
  ];

  return (
    <section className="py-12 w-full">
      <PageTitle
        title="About Me"
        description="I’m a Freelance Full Stack Developer focused on building premium digital products that combine modern design, reliable engineering, and scalable architecture. I work with startups, entrepreneurs, agencies, and businesses to transform ideas into secure, high-performing, and future-ready digital solutions. With a commitment to excellence, attention to detail, and a focus on client success, I deliver web applications that drive growth and provide long-term value."
      />
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24 mb-16 max-w-4xl">
        <h2 className="font-extrabold mb-6 text-3xl">My Philosophy</h2>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-light">
          Great digital products are built through a balance of technology,
          usability, and business strategy. My goal is not simply to write code
          — it is to build systems that create measurable value.
        </p>
      </div>

      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24 mb-16">
        <h2 className="font-semibold mb-6 text-3xl">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl flex flex-col hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
            >
              <h3 className="text-base font-bold text-foreground mb-4 border-b border-neutral-100 dark:border-neutral-800/60 pb-2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50/30 dark:bg-blue-950/10 text-foreground border border-neutral-250/60 dark:border-neutral-800/50 rounded-lg text-xs font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors cursor-default"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24 mb-16">
        <h2 className="font-semibold mb-4 text-3xl">What I Deliver</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WhatIDeliver.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl p-5 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-foreground/80 leading-snug">
                {item.item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
        <h2 className="font-extrabold mb-6 text-3xl">
          Why Clients Work With Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ClientsWork.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl p-5 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-foreground/80 leading-snug">
                {item.item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
