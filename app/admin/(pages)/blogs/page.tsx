"use client";

import React, { useState } from "react";
import { 
  FaPlus, 
  FaTrash, 
  FaPenToSquare, 
  FaNewspaper, 
  FaEye, 
  FaComment,
  FaXmark,
  FaFloppyDisk,
  FaCheck
} from "react-icons/fa6";

const BlogsPage = () => {
  const initialBlogs = [
    { id: 1, title: "Full Stack Development", status: "Published", views: 2450, comments: 12, date: "May 12, 2026", body: "Building end-to-end web applications with modern frontend frameworks, scalable backends, and databases." },
    { id: 2, title: "Frontend Engineering", status: "Published", views: 1890, comments: 8, date: "June 2, 2026", body: "Crafting highly responsive, interactive, and user-centric interfaces focused on smooth animations and accessibility." },
    { id: 3, title: "Backend Systems & APIs", status: "Draft", views: 0, comments: 0, date: "Pending", body: "Engineering secure databases, robust server architectures, and high-performance RESTful/GraphQL APIs." },
    { id: 4, title: "Performance Optimization", status: "Published", views: 320, comments: 3, date: "June 7, 2026", body: "Maximizing lighthouse scores, page speed, core web vitals, and asset management for optimal UX." },
    { id: 5, title: "Web Architecture", status: "Published", views: 410, comments: 5, date: "May 28, 2026", body: "Designing reliable development environments, microservices, serverless components, and DevOps flows." },
    { id: 6, title: "Freelancing & Digital Growth", status: "Published", views: 980, comments: 14, date: "May 20, 2026", body: "Insights on managing technical projects, scope definition, building brands, and launching products successfully." },
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Form Field States
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Published");
  const [body, setBody] = useState("");

  const handleWriteArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    // Get current date formatted
    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = status === "Published" 
      ? new Date().toLocaleDateString("en-US", options)
      : "Pending";

    const newBlog = {
      id: Date.now(),
      title,
      status,
      views: 0,
      comments: 0,
      date: formattedDate,
      body
    };

    setBlogs([newBlog, ...blogs]);
    setIsModalOpen(false);

    // Reset inputs
    setTitle("");
    setStatus("Published");
    setBody("");

    // Show Success Toast
    setToastMessage(`Article "${newBlog.title}" saved successfully!`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleDeleteBlog = (id: number, blogTitle: string) => {
    setBlogs(blogs.filter((b) => b.id !== id));
    
    // Show Success Toast
    setToastMessage(`Article "${blogTitle}" deleted successfully!`);
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
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Blogs & Articles</h1>
          <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Write, edit, and organize posts published on your portfolio blog page.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10"
        >
          <FaPlus className="w-3.5 h-3.5" />
          <span>Write Article</span>
        </button>
      </div>

      {/* Blogs Table */}
      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl overflow-hidden transition-colors duration-300">
        <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm font-semibold pb-4 mb-4 border-b border-slate-100 dark:border-slate-800/60">
          <FaNewspaper className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          <span>Articles List ({blogs.length})</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800/60">
                <th className="pb-3 font-semibold">Article Title</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold">Views</th>
                <th className="pb-3 font-semibold">Comments</th>
                <th className="pb-3 font-semibold">Publish Date</th>
                <th className="pb-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40 text-slate-600 dark:text-slate-300">
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400 dark:text-slate-500 font-medium">
                    No articles found. Click "Write Article" to draft one.
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50 dark:hover:bg-slate-950/20 transition-colors">
                    <td className="py-4 pr-3 font-semibold text-slate-800 dark:text-slate-200 max-w-xs sm:max-w-sm">
                      <div className="space-y-1">
                        <span className="truncate block font-semibold">{blog.title}</span>
                        {blog.body && (
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-normal line-clamp-1 max-w-sm">{blog.body}</p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 pr-3">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        blog.status === "Published" 
                          ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
                          : "bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-4 pr-3 text-slate-500 dark:text-slate-400">
                      <span className="flex items-center space-x-1">
                        <FaEye className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                        <span>{blog.views}</span>
                      </span>
                    </td>
                    <td className="py-4 pr-3 text-slate-500 dark:text-slate-400">
                      <span className="flex items-center space-x-1">
                        <FaComment className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                        <span>{blog.comments}</span>
                      </span>
                    </td>
                    <td className="py-4 pr-3 text-slate-500 dark:text-slate-400 whitespace-nowrap">{blog.date}</td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <button title="Edit Article" className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded cursor-pointer transition-colors">
                          <FaPenToSquare className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteBlog(blog.id, blog.title)}
                          title="Delete Article" 
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

      {/* WRITE ARTICLE DIALOG MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl w-full max-w-2xl p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[90vh] text-slate-800 dark:text-slate-100 transition-colors duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800/60 shrink-0">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Write New Article</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:text-slate-550 dark:hover:text-slate-300 p-1 rounded-lg transition-colors cursor-pointer"
              >
                <FaXmark className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleWriteArticle} className="flex-1 overflow-y-auto py-4 space-y-4 text-xs pr-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Title */}
                <div className="space-y-1.5 flex flex-col md:col-span-2">
                  <label className="font-semibold text-slate-600 dark:text-slate-300">Article Title *</label>
                  <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Master Clean Code Principles in TypeScript" 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                {/* Status */}
                <div className="space-y-1.5 flex flex-col">
                  <label className="font-semibold text-slate-600 dark:text-slate-300">Status</label>
                  <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all cursor-pointer"
                  >
                    <option value="Published">Published (Public)</option>
                    <option value="Draft">Draft (Internal)</option>
                  </select>
                </div>

                {/* Description Body */}
                <div className="space-y-1.5 flex flex-col md:col-span-3">
                  <div className="flex justify-between items-center">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Article Content *</label>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">{body.length} characters</span>
                  </div>
                  <textarea 
                    rows={12}
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write your blog post article body here. Supports standard textual layout and paragraphs..."
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none font-sans leading-relaxed"
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
                  <span>Publish Article</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
