import { BiBug, BiCodeAlt, BiData, BiSelection } from "react-icons/bi";
import Link from "next/link";

const FeaturedServices = () => {
  const featuredServices = [
    {
      icon: BiCodeAlt,
      title: "Custom Web Development",
      description:
        "Tailored websites and web applications designed with modern technologies, optimized performance, and scalable architecture.",
    },
    {
      icon: BiSelection,
      title: "Frontend Experience Design",
      description:
        "Premium, responsive, and intuitive interfaces focused on usability, speed, and seamless interaction.",
    },
    {
      icon: BiData,
      title: "Backend Systems & APIs",
      description:
        "Secure infrastructure, authentication, API integrations, and database management built for reliability and efficiency.",
    },
    {
      icon: BiBug,
      title: "Optimization & Maintenance",
      description:
        "Continuous improvements, performance optimization, bug fixing, and long-term technical support.",
    },
  ];

  return (
    <section className="w-full bg-background py-20 lg:py-24">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs mb-3 block">
          What I Offer
        </span>
        <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight text-foreground mb-10">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl p-8 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/2 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-end">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
