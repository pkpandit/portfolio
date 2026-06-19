"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FaEye, 
  FaEnvelope, 
  FaFolder, 
  FaNewspaper, 
  FaArrowUp, 
  FaClock, 
  FaPlus,
  FaXmark,
  FaFloppyDisk,
  FaChevronRight
} from "react-icons/fa6";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { name: "Total Views", value: "12,480", change: "+12.3%", icon: <FaEye className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />, trend: "up" },
    { name: "Messages", value: "18", change: "3 unread", icon: <FaEnvelope className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />, trend: "neutral" },
    { name: "Active Projects", value: "8", change: "2 this month", icon: <FaFolder className="w-5 h-5 text-blue-500 dark:text-blue-400" />, trend: "up" },
    { name: "Blog Posts", value: "24", change: "+4 new", icon: <FaNewspaper className="w-5 h-5 text-purple-500 dark:text-purple-400" />, trend: "up" },
  ];

  const recentMessages = [
    { id: 1, name: "John Doe", email: "john@example.com", subject: "Collaboration Proposal", time: "2 hours ago", status: "unread" },
    { id: 2, name: "Alice Smith", email: "alice@design.co", subject: "UI Design Inquiry", time: "5 hours ago", status: "read" },
    { id: 3, name: "Robert Johnson", email: "robert@tech.com", subject: "Job Opportunity", time: "1 day ago", status: "read" },
  ];

  const recentProjects = [
    { id: 1, title: "E-Commerce Dashboard", category: "Web Development", tech: "Next.js, Tailwind, Prisma", status: "Completed" },
    { id: 2, title: "Weather Forecast Application", category: "React App", tech: "React, OpenWeather API", status: "Completed" },
    { id: 3, title: "Finance Tracking SaaS Portal", category: "SaaS Platform", tech: "Next.js, Stripe, Supabase", status: "In Progress" },
  ];

  const recentBlogs = [
    { id: 1, title: "Getting Started with Next.js 16 App Router", status: "Published", date: "May 12, 2026" },
    { id: 2, title: "Understanding Tailwind CSS v4's Engine changes", status: "Published", date: "June 2, 2026" },
    { id: 3, title: "A Complete Guide to Prisma and PostgreSQL relationships", status: "Draft", date: "Pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Welcome Back, Admin</h1>
          <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Here is what's happening with your portfolio today.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10"
        >
          <FaPlus className="w-3.5 h-3.5" />
          <span>Quick Add Project</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.name} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl flex items-center justify-between transition-colors duration-300">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{stat.name}</span>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</p>
              <div className="flex items-center space-x-1">
                {stat.trend === "up" && <FaArrowUp className="w-2.5 h-2.5 text-emerald-500 dark:text-emerald-400" />}
                <span className={`text-[10px] font-semibold ${stat.trend === "up" ? "text-emerald-500 dark:text-emerald-400" : "text-slate-400 dark:text-slate-500"}`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-100 dark:border-slate-800/40">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column Area (lg:col-span-2) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Recent Messages Card */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl space-y-4 transition-colors duration-300">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800/60">
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                <span className="w-1.5 h-3.5 bg-emerald-500 rounded-sm"></span>
                <span>Recent Messages</span>
              </h2>
              <Link 
                href="/admin/contact" 
                className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold flex items-center space-x-0.5 transition-colors cursor-pointer"
              >
                <span>View all</span>
                <FaChevronRight className="w-2 h-2" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/40">
              {recentMessages.map((msg) => (
                <div key={msg.id} className="py-3 flex items-start justify-between space-x-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{msg.name}</span>
                      {msg.status === "unread" && (
                        <span className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[8px] font-bold uppercase tracking-wider">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 truncate mt-1">{msg.subject}</p>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-0.5">{msg.email}</span>
                  </div>
                  <div className="text-right shrink-0 flex items-center space-x-1.5 text-[10px] text-slate-400 dark:text-slate-500">
                    <FaClock className="w-2.5 h-2.5 text-slate-400" />
                    <span>{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Projects Card */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl space-y-4 transition-colors duration-300">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800/60">
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-sm"></span>
                <span>Recent Projects</span>
              </h2>
              <Link 
                href="/admin/project" 
                className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold flex items-center space-x-0.5 transition-colors cursor-pointer"
              >
                <span>View all</span>
                <FaChevronRight className="w-2 h-2" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/40">
              {recentProjects.map((proj) => (
                <div key={proj.id} className="py-3 flex items-center justify-between space-x-4">
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block truncate">{proj.title}</span>
                    <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 block mt-0.5">{proj.tech}</span>
                  </div>
                  <div className="flex items-center space-x-3 shrink-0">
                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider ${
                      proj.status === "Completed" 
                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
                        : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
                    }`}>
                      {proj.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column Area (lg:col-span-1) */}
        <div className="space-y-6">
          
          {/* Shortcuts / Activity Feed */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl space-y-4 transition-colors duration-300">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-100 dark:border-slate-800/60 flex items-center space-x-2">
              <span className="w-1.5 h-3.5 bg-indigo-500 rounded-sm"></span>
              <span>System Actions</span>
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/admin/blogs" className="w-full p-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-950/80 border border-slate-200 dark:border-slate-850 rounded-lg text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all flex items-center space-x-3 cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Publish a Blog Post</span>
              </Link>
              <Link href="/admin/home" className="w-full p-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-950/80 border border-slate-200 dark:border-slate-850 rounded-lg text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all flex items-center space-x-3 cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Update Hero Info</span>
              </Link>
              <Link href="/admin/settings" className="w-full p-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-950/80 border border-slate-200 dark:border-slate-850 rounded-lg text-left text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all flex items-center space-x-3 cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span>Manage configurations</span>
              </Link>
            </div>
          </div>

          {/* Recent Blogs Card */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl space-y-4 transition-colors duration-300">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800/60">
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                <span className="w-1.5 h-3.5 bg-purple-500 rounded-sm"></span>
                <span>Recent Blogs</span>
              </h2>
              <Link 
                href="/admin/blogs" 
                className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold flex items-center space-x-0.5 transition-colors cursor-pointer"
              >
                <span>View all</span>
                <FaChevronRight className="w-2 h-2" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/40 text-xs">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="py-3 space-y-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block truncate leading-snug">{blog.title}</span>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                    <span>{blog.date}</span>
                    <span className={`px-1.5 py-0.2 rounded font-bold uppercase tracking-wider text-[8px] ${
                      blog.status === "Published" 
                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}>
                      {blog.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Quick Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 space-y-4 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800/60">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Quick Add Project</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 p-1 rounded-lg transition-colors cursor-pointer"
              >
                <FaXmark className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Project Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Portfolio Builder" 
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Category</label>
                <select className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-850 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all cursor-pointer">
                  <option value="web-dev">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Tech Stack</label>
                <input 
                  type="text" 
                  placeholder="e.g. Next.js, Tailwind, React" 
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Status</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="status" defaultChecked className="text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-slate-600 dark:text-slate-300">Completed</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="status" className="text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-slate-600 dark:text-slate-300">In Progress</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                <FaFloppyDisk className="w-3 h-3" />
                <span>Save Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
