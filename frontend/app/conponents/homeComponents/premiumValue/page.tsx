const PremiumValue = () => {
  return (
    <section className="w-full bg-slate-50/50 dark:bg-zinc-900/10 border-y border-neutral-100 dark:border-neutral-800/40 py-20 lg:py-24">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24 max-w-5xl">
        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs mb-3 block">
          Core Value
        </span>
        <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
          Premium Value Proposition
        </h2>
        <h6 className="font-medium text-lg md:text-xl text-foreground/80 mb-6">
          Trusted Full Stack Development for Modern Businesses
        </h6>
        <p className="text-foreground/75 text-base md:text-lg/relaxed leading-relaxed font-light">
          From elegant user experiences to robust backend systems, I develop
          reliable digital products tailored to business goals, performance, and
          scalability. With a focus on modern development practices, I help
          startups and businesses build powerful web applications that drive
          growth and deliver long-term value.
        </p>
      </div>
    </section>
  );
};

export default PremiumValue;
