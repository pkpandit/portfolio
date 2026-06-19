"use client";

import PageTitle from "@/app/conponents/common/pageTitle/page";
import Link from "next/link";
import { BiEnvelope, BiMap } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="py-12 w-full bg-background">
      <PageTitle
        title="Let’s Build Something Exceptional"
        description="Looking for a trusted freelance developer to build a premium website, scalable web application, or business-focused digital solution? Let’s discuss your vision and create something powerful, reliable, and built for growth."
      />

      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h5 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h5>
              <p className="text-foreground/80 leading-relaxed font-light">
                Whether you have a project idea, want to discuss your technical
                needs, or just want to say hello, I’m here to help. I work with
                startups, entrepreneurs, agencies, and businesses to build
                innovative digital solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <BiEnvelope size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider block">Email Me</span>
                  <span className="text-sm font-bold text-foreground/90">hello@developer.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-2xl">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <BiMap size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider block">Based In</span>
                  <span className="text-sm font-bold text-foreground/90">Remote / Global</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/80 rounded-3xl p-8 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-foreground/90 text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-neutral-200 dark:border-neutral-800/80 bg-slate-50/50 dark:bg-zinc-950/50 text-foreground rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-foreground/90 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-neutral-200 dark:border-neutral-800/80 bg-slate-50/50 dark:bg-zinc-950/50 text-foreground rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-foreground/90 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-neutral-200 dark:border-neutral-800/80 bg-slate-50/50 dark:bg-zinc-950/50 text-foreground rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-y"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5 text-sm"
                >
                  Schedule a Consultation
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Google Map Section */}
        <div className="mt-16 w-full">
          <div className="w-full h-80 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800/80 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0863920959086!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d6d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623100000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="grayscale dark:invert dark:opacity-80 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
