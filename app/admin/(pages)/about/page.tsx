import React from "react";
import { FaFloppyDisk, FaPlus, FaTrash, FaUserTie } from "react-icons/fa6";

const page = () => {
  const skills = [
    "JavaScript (ES6+)", "HTML5", "CSS3",
    "React.js", "Next.js", "Sass", "Bootstrap", "Component Architecture",
    "Node.js", "REST APIs",
    "MongoDB", "PostgreSQL", "MySQL",
    "Git", "Docker", "VS Code", "Drizzle ORM",
    "Performance Optimization", "Responsive Design", "Cross-Browser Compatibility",
    "GitHub Copilot",
    "SharePoint Development", "Umbraco"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">About Me Editor</h1>
        <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Manage your professional bio, experience metrics, and list of skills.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Middle: Bio editor */}
        <div className="lg:col-span-2 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl space-y-6 transition-colors duration-300">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-2 pb-2 border-b border-slate-100 dark:border-slate-800/60">
            <FaUserTie className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>Profile Biography</span>
          </h2>

          <div className="space-y-4">
            <div className="space-y-2 flex flex-col">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Detailed Professional Bio</label>
              <textarea 
                rows={8}
                defaultValue="I’m a Freelance Full Stack Developer focused on building premium digital products that combine modern design, reliable engineering, and scalable architecture. I work with startups, entrepreneurs, agencies, and businesses to transform ideas into secure, high-performing, and future-ready digital solutions. With a commitment to excellence, attention to detail, and a focus on client success, I deliver web applications that drive growth and provide long-term value."
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2 flex flex-col">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Years of Experience</label>
                <input type="number" defaultValue="5" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Projects Completed</label>
                <input type="number" defaultValue="42" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">Happy Clients</label>
                <input type="number" defaultValue="15" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800/60">
            <button className="flex items-center space-x-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-550 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10">
              <FaFloppyDisk className="w-3.5 h-3.5" />
              <span>Save Biography</span>
            </button>
          </div>
        </div>

        {/* Right: Skills editor */}
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl space-y-4 transition-colors duration-300">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-100 dark:border-slate-800/60 flex justify-between items-center">
            <span>Skill Tags</span>
            <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">
              <FaPlus className="w-3.5 h-3.5" />
            </button>
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-700 dark:text-slate-300 font-semibold flex items-center space-x-2 transition-colors duration-300"
              >
                <span>{skill}</span>
                <button title="Remove" className="text-slate-400 hover:text-rose-600 dark:text-slate-500 dark:hover:text-rose-450 cursor-pointer transition-colors">
                  <FaTrash className="w-2.5 h-2.5" />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
