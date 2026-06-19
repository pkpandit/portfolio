"use client";
import Image from "next/image";
import HeroImg from "@/public/img/Business_SVG.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24 border-b border-neutral-100 dark:border-neutral-800/40">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 dark:bg-indigo-600/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center mx-auto px-8 sm:px-10 xl:px-24 gap-12">
        <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <div className="max-w-2xl">
            <h1 className="font-extrabold text-4xl/tight sm:text-5xl/tight xl:text-6xl/tight tracking-tight text-foreground mb-6">
              Building Premium <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">Digital Experiences</span> That Scale
            </h1>
            <h5 className="mb-6 font-medium text-lg/relaxed md:text-xl/relaxed text-foreground/80">
              Freelance Full Stack Developer delivering high-performance
              websites, scalable web applications, and modern digital solutions
              for startups, businesses, and growing brands.
            </h5>
            <p className="mb-8 text-base text-foreground/60 leading-relaxed max-w-xl">
              I help businesses transform ideas into powerful digital
              experiences through modern development, scalable systems, and
              performance-focused solutions designed for long-term growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5"
            >
              Book a Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800/50 dark:hover:bg-neutral-800 text-foreground rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Work
            </Link>
          </div>
        </div>

        <figure className="lg:col-span-5 flex justify-center w-full animate-float">
          <Image
            src={HeroImg}
            alt="Digital Experience Development Illustration"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-[450px] w-auto drop-shadow-xl"
            priority
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
