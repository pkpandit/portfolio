"use client";

import React, { useState } from "react";
import { 
  FaPlus, 
  FaTrash, 
  FaPenToSquare, 
  FaFolderOpen, 
  FaUpRightFromSquare,
  FaXmark,
  FaFloppyDisk,
  FaGithub,
  FaGlobe,
  FaCheck
} from "react-icons/fa6";

const ProjectPage = () => {
  const initialProjects = [
    { id: 1, title: "Enterprise Business Website", category: "Web Development", tech: "Next.js, Tailwind v4, React", status: "Completed", url: "#", github: "#", desc: "A modern, responsive digital presence designed to improve brand credibility and customer engagement." },
    { id: 2, title: "Scalable E-commerce Platform", category: "Web Development", tech: "Next.js, Node.js, Stripe", status: "Completed", url: "#", github: "#", desc: "Built with secure payment systems, product management, responsive design, and optimized performance." },
    { id: 3, title: "SaaS & Dashboard Systems", category: "SaaS Platform", tech: "React, Go, PostgreSQL", status: "Completed", url: "#", github: "#", desc: "Data-driven dashboards with secure authentication, APIs, analytics, and scalable backend infrastructure." },
    { id: 4, title: "Custom Client Platforms", category: "Other", tech: "React, Node.js, Firebase", status: "Completed", url: "#", github: "#", desc: "Tailored web solutions developed to streamline operations and enhance user experience." },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Form Field States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Web Development");
  const [tech, setTech] = useState("");
  const [status, setStatus] = useState("Completed");
  const [url, setUrl] = useState("");
  const [github, setGithub] = useState("");
  const [desc, setDesc] = useState("");

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newProject = {
      id: Date.now(),
      title,
      category,
      tech: tech || "Not Specified",
      status,
      url: url || "#",
      github: github || "",
      desc: desc || "No description provided."
    };

    setProjects([newProject, ...projects]);
    setIsModalOpen(false);
    
    // Reset inputs
    setTitle("");
    setCategory("Web Development");
    setTech("");
    setStatus("Completed");
    setUrl("");
    setGithub("");
    setDesc("");

    // Trigger Success Toast
    setToastMessage(`Project "${newProject.title}" added successfully!`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleDeleteProject = (id: number, projectTitle: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    
    setToastMessage(`Project "${projectTitle}" removed successfully!`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="space-y-6 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 right-10 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-3 rounded-xl shadow-xl z-50 flex items-center space-x-2.5 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="p-1 bg-white/20 rounded-full">
            <FaCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Projects Management</h1>
          <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Manage, add, or customize your portfolio projects showcased to users.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10"
        >
          <FaPlus className="w-3.5 h-3.5" />
          <span>Create Project</span>
        </button>
      </div>

      {/* Projects Table Container */}
      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl overflow-hidden transition-colors duration-300">
        <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm font-semibold pb-4 mb-4 border-b border-slate-100 dark:border-slate-800/60">
          <FaFolderOpen className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          <span>Active Project Showcase ({projects.length})</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800/60">
                <th className="pb-3 font-semibold">Project Title</th>
                <th className="pb-3 font-semibold">Category</th>
                <th className="pb-3 font-semibold">Tech Stack</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40 text-slate-600 dark:text-slate-300">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400 dark:text-slate-500 font-medium">
                    No projects found. Click "Create Project" to add one.
                  </td>
                </tr>
              ) : (
                projects.map((proj) => (
                  <tr key={proj.id} className="hover:bg-slate-50 dark:hover:bg-slate-950/20 transition-colors">
                    <td className="py-4 pr-3 font-semibold text-slate-800 dark:text-slate-200">
                      <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                          <span>{proj.title}</span>
                          {proj.url && proj.url !== "#" && (
                            <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                              <FaUpRightFromSquare className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </span>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-normal line-clamp-1 max-w-xs">{proj.desc}</p>
                      </div>
                    </td>
                    <td className="py-4 pr-3 text-slate-500 dark:text-slate-400">{proj.category}</td>
                    <td className="py-4 pr-3 font-mono text-[10px] text-indigo-600 dark:text-indigo-400">{proj.tech}</td>
                    <td className="py-4 pr-3">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        proj.status === "Completed" 
                          ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
                          : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
                      }`}>
                        {proj.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end space-x-1">
                        {proj.github && (
                          <a 
                            href={proj.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="GitHub Repository" 
                            className="p-1.5 text-slate-450 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded transition-colors"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <button title="Edit Project" className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded cursor-pointer transition-colors">
                          <FaPenToSquare className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProject(proj.id, proj.title)}
                          title="Delete Project" 
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded cursor-pointer transition-colors"
                        >
                          <FaTrash className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE PROJECT DIALOG MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[90vh] text-slate-800 dark:text-slate-100 transition-colors duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800/60 shrink-0">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Create Project Record</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 p-1 rounded-lg transition-colors cursor-pointer"
              >
                <FaXmark className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form Container (Scrollable) */}
            <form onSubmit={handleCreateProject} className="flex-1 overflow-y-auto py-4 space-y-4 text-xs pr-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div className="space-y-1.5 flex flex-col md:col-span-2">
                  <label className="font-semibold text-slate-600 dark:text-slate-300">Project Name *</label>
                  <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Finance API Hub" 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1.5 flex flex-col">
                  <label className="font-semibold text-slate-600 dark:text-slate-300">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all cursor-pointer"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="React App">React App</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Tech Stack */}
                <div className="space-y-1.5 flex flex-col">
                  <label className="font-semibold text-slate-600 dark:text-slate-300">Tech Stack</label>
                  <input 
                    type="text" 
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                    placeholder="e.g. Next.js, Go, Redis" 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                {/* Project URL */}
                <div className="space-y-1.5 flex flex-col">
                  <label className="font-semibold text-slate-600 dark:text-slate-300 flex items-center space-x-1">
                    <FaGlobe className="w-3 h-3 text-slate-450" />
                    <span>Demo Link URL</span>
                  </label>
                  <input 
                    type="url" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="e.g. https://myproject.com" 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                {/* GitHub URL */}
                <div className="space-y-1.5 flex flex-col">
                  <label className="font-semibold text-slate-600 dark:text-slate-300 flex items-center space-x-1">
                    <FaGithub className="w-3 h-3 text-slate-450" />
                    <span>GitHub Repository URL</span>
                  </label>
                  <input 
                    type="url" 
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder="e.g. https://github.com/username/project" 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                {/* Status */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="font-semibold text-slate-600 dark:text-slate-300">Status</label>
                  <div className="flex items-center space-x-4 pt-1">
                    <label className="flex items-center space-x-2 cursor-pointer text-xs">
                      <input 
                        type="radio" 
                        name="project-status"
                        checked={status === "Completed"}
                        onChange={() => setStatus("Completed")}
                        className="text-indigo-600 focus:ring-indigo-500" 
                      />
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Completed</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer text-xs">
                      <input 
                        type="radio" 
                        name="project-status"
                        checked={status === "In Progress"}
                        onChange={() => setStatus("In Progress")}
                        className="text-indigo-600 focus:ring-indigo-500" 
                      />
                      <span className="text-slate-600 dark:text-slate-300 font-medium">In Progress</span>
                    </label>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5 flex flex-col md:col-span-2">
                  <label className="font-semibold text-slate-600 dark:text-slate-300">Description</label>
                  <textarea 
                    rows={3}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Provide a brief summary detailing the key features, architectural choices, or design principles of this project..."
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end space-x-2 pt-4 border-t border-slate-100 dark:border-slate-800/60 shrink-0">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10"
                >
                  <FaFloppyDisk className="w-3.5 h-3.5" />
                  <span>Create Project</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
