"use client";

import MyStatements from "@/app/conponents/common/myStatements/page";
import PageTitle from "@/app/conponents/common/pageTitle/page";
import { BiCheckDouble } from "react-icons/bi";

const Projects = () => {
  const selectedProjects = [
    {
      icon: BiCheckDouble,
      title: "Enterprise Business Website",
      description:
        "A modern, responsive digital presence designed to improve brand credibility and customer engagement.",
    },
    {
      icon: BiCheckDouble,
      title: "Scalable E-commerce Platform",
      description:
        "Built with secure payment systems, product management, responsive design, and optimized performance.",
    },
    {
      icon: BiCheckDouble,
      title: "SaaS & Dashboard Systems",
      description:
        "Data-driven dashboards with secure authentication, APIs, analytics, and scalable backend infrastructure.",
    },
    {
      icon: BiCheckDouble,
      title: "Custom Client Platforms",
      description:
        "Tailored web solutions developed to streamline operations and enhance user experience.",
    },
  ];
  return (
    <>
      <section className="py-12 w-full">
        <PageTitle
          title="Selected Work & Digital Solutions"
          description="A collection of premium digital experiences developed to solve business challenges, improve efficiency, and deliver measurable outcomes."
        />

        <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {selectedProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl p-8 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/2 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold transition-colors duration-300 shadow-sm"
              onClick={() => alert("View Projects clicked!")}
            >
              View Project Details
            </button>
          </div>
        </div>
      </section>

      <MyStatements
        titleStatements="Closing Statement"
        descrStatements="Every project represents a commitment to quality, clean engineering,
            and measurable business impact."
      />
    </>
  );
};

export default Projects;
