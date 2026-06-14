import { FaFloppyDisk } from "react-icons/fa6";

const page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          Manage Home Hero
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
          Edit the hero banner section that appears on the homepage.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl max-w-3xl space-y-6 transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Headline */}
          <div className="space-y-2 col-span-1 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Hero Title / Headline
            </label>
            <input
              type="text"
              defaultValue="Building Premium Digital Experiences That Scale"
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Subtitle */}
          <div className="space-y-2 col-span-1 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Brief Intro / Subtitle
            </label>
            <textarea
              rows={4}
              defaultValue="Freelance Full Stack Developer delivering high-performance websites, scalable web applications, and modern digital solutions for startups, businesses, and growing brands."
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
            />
          </div>

          {/* Description */}
          <div className="space-y-2 col-span-1 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Description
            </label>
            <textarea
              rows={4}
              defaultValue="I help businesses transform ideas into powerful digital experiences through modern development, scalable systems, and performance-focused solutions designed for long-term growth."
              className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800/60">
          <button className="flex items-center space-x-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-550 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10">
            <FaFloppyDisk className="w-3.5 h-3.5" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
