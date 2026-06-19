import React from "react";
import { FaTrash, FaEnvelope, FaEnvelopeOpen, FaClock, FaUser } from "react-icons/fa6";

const page = () => {
  const messages = [
    { 
      id: 1, 
      name: "John Doe", 
      email: "john@example.com", 
      subject: "Collaboration Proposal", 
      body: "Hi Jane, I saw your portfolio and was really impressed by your projects. I have an upcoming e-commerce SaaS project and would love to collaborate with you. Let me know if you are free for a quick call next week.", 
      time: "2 hours ago", 
      status: "unread" 
    },
    { 
      id: 2, 
      name: "Alice Smith", 
      email: "alice@design.co", 
      subject: "UI Design Inquiry", 
      body: "Hello! We are looking for a freelance frontend developer who can convert our designs into high-quality Next.js code. Our design system uses Tailwind CSS. Do you have availability starting this month?", 
      time: "5 hours ago", 
      status: "read" 
    },
    { 
      id: 3, 
      name: "Robert Johnson", 
      email: "robert@tech.com", 
      subject: "Job Opportunity", 
      body: "Dear Jane, I am a recruiter at TechSolutions. We have an open position for a Senior React Developer and we'd love to chat. Please see the attached job details and send over your resume when possible.", 
      time: "1 day ago", 
      status: "read" 
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Contact Inbox</h1>
        <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Review and manage form submissions sent by visitors from your portfolio site.</p>
      </div>

      {/* Messages Feed */}
      <div className="space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`p-5 bg-white dark:bg-slate-900 border rounded-xl flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0 md:space-x-6 transition-all duration-150 ${
              msg.status === "unread" 
                ? "border-indigo-500/40 bg-indigo-50/20 dark:bg-indigo-950/5 shadow-md shadow-indigo-600/[0.02]" 
                : "border-slate-200 dark:border-slate-800/60"
            }`}
          >
            {/* Left/Main message details */}
            <div className="space-y-3 flex-1 min-w-0">
              <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <FaUser className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{msg.name}</span>
                  <span>({msg.email})</span>
                </div>
                {msg.status === "unread" && (
                  <span className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[8px] font-bold uppercase tracking-wider">
                    Unread
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">{msg.subject}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">{msg.body}</p>
              </div>

              <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 dark:text-slate-500">
                <FaClock className="w-2.5 h-2.5" />
                <span>{msg.time}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2 shrink-0 md:self-center">
              <button 
                title={msg.status === "unread" ? "Mark as Read" : "Mark as Unread"} 
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-lg cursor-pointer transition-colors border border-slate-200 dark:border-slate-800"
              >
                {msg.status === "unread" ? (
                  <FaEnvelopeOpen className="w-3.5 h-3.5" />
                ) : (
                  <FaEnvelope className="w-3.5 h-3.5" />
                )}
              </button>
              <button 
                title="Delete Message" 
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-lg cursor-pointer transition-colors border border-slate-200 dark:border-slate-800"
              >
                <FaTrash className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
