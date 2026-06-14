import { BiCheckDouble } from "react-icons/bi";
import Link from "next/link";

const FeaturedProjects = () => {
  const featuredProjects = [
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
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-zinc-900/10 border-y border-neutral-100 dark:border-neutral-800/40 py-20 lg:py-24">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs mb-3 block">
          Portfolio
        </span>
        <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight text-foreground mb-3">
          Featured Projects
        </h2>
        <h6 className="font-medium text-lg md:text-xl text-foreground/80 mb-10">
          Delivering Results Through Modern Development
        </h6>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 rounded-2xl p-8 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/2 hover:-translate-y-1 group"
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

        <div className="flex items-center justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
