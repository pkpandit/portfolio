import MyStatements from "@/app/conponents/common/myStatements/page";
import PageTitle from "@/app/conponents/common/pageTitle/page";
import { BiCabinet } from "react-icons/bi";

const Services = () => {
  const developerServices = [
    {
      icon: BiCabinet,
      title: "Full Stack Web Development",
      description:
        "Complete website and application development covering frontend, backend, APIs, databases, and deployment — tailored to business requirements.",
    },
    {
      icon: BiCabinet,
      title: "Custom Website Development",
      description:
        "Premium business websites designed to strengthen online presence, improve engagement, and generate measurable growth.",
    },
    {
      icon: BiCabinet,
      title: "Frontend Development",
      description:
        "Modern, responsive, and user-centric interfaces designed for seamless experiences across desktop, tablet, and mobile devices.",
    },
    {
      icon: BiCabinet,
      title: "Backend Development & APIs",
      description:
        "Secure backend systems, scalable architecture, database management, authentication, and API integrations engineered for performance.",
    },
    {
      icon: BiCabinet,
      title: "E-commerce Development",
      description:
        "Scalable e-commerce platforms with secure payments, product management, user authentication, and conversion-focused experiences.",
    },
    {
      icon: BiCabinet,
      title: "Website Maintenance & Optimization",
      description:
        "Ongoing website maintenance, performance optimization, security updates, and continuous improvement to ensure your site remains fast, secure, and up-to-date.",
    },
  ];
  return (
    <>
      <section className="py-12 w-full">
        <PageTitle
          title="Professional Full Stack Development Services"
          description="I provide premium web development services for startups, entrepreneurs, agencies, and businesses seeking reliable, scalable, and performance-driven digital products. With expertise in modern frontend and backend technologies, I help clients build powerful web applications that drive growth and deliver long-term value."
        />

        <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {developerServices.map((service) => {
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
        </div>
      </section>

      <MyStatements
        titleStatements="Service Promise"
        descrStatements="Every project is developed with performance, scalability, security,
            and long-term maintainability in mind."
      />
    </>
  );
};

export default Services;
