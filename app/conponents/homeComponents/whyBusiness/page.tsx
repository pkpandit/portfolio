import { BiCodeAlt, BiLockAlt, BiTargetLock, BiMobileAlt, BiChat } from "react-icons/bi";

const WhyBusiness = () => {
  const whyChooseMe = [
    {
      icon: BiCodeAlt,
      title: "Professional & Scalable Development",
      description:
        "Delivering high-quality, maintainable code that scales with your business needs.",
    },
    {
      icon: BiLockAlt,
      title: "Clean, Secure, and Maintainable Code",
      description:
        "Ensuring that every line of code is well-structured, secure, and easy to maintain.",
    },
    {
      icon: BiTargetLock,
      title: "Business-Focused Technical Solutions",
      description:
        "Providing solutions that align with your business goals and drive measurable results.",
    },
    {
      icon: BiMobileAlt,
      title: "Responsive and Performance-Optimized Systems",
      description:
        "Building systems that are fast, responsive, and optimized for performance across all devices.",
    },
    {
      icon: BiChat,
      title: "Transparent Communication and Reliable Delivery",
      description:
        "Committing to clear communication, regular updates, and dependable delivery timelines.",
    },
  ];

  return (
    <section className="w-full bg-background py-20 lg:py-24">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs mb-3 block">
              Why Work With Me
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight text-foreground mb-6">
              Why Businesses Choose Me
            </h2>
            <h6 className="font-medium text-lg/relaxed text-foreground/80 leading-relaxed">
              I bring a unique combination of technical expertise and business
              acumen to every project, ensuring that the solutions I deliver not
              only meet but exceed expectations.
            </h6>
          </div>

          {/* Right Column: Values Stack */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {whyChooseMe.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyBusiness;
