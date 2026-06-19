"use client";

import React, { useState } from "react";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaFloppyDisk,
  FaCheck,
  FaUserTie,
  FaFolder,
  FaNewspaper,
  FaRegEnvelope
} from "react-icons/fa6";

const ProfilePage = () => {
  // Mock initial profile data
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    title: "Senior Full Stack Software Engineer",
    email: "admin@janedoe.dev",
    phone: "+1 (555) 019-2834",
    location: "San Francisco, CA",
    bio: "Passionate software engineer specializing in building high-performance web applications using React, Next.js, and Node.js. Focused on crafting clean code, designing robust APIs, and optimizing database architectures to deliver exceptional developer and user experiences."
  });

  const [editName, setEditName] = useState(profile.name);
  const [editTitle, setEditTitle] = useState(profile.title);
  const [editEmail, setEditEmail] = useState(profile.email);
  const [editPhone, setEditPhone] = useState(profile.phone);
  const [editLocation, setEditLocation] = useState(profile.location);
  const [editBio, setEditBio] = useState(profile.bio);

  const [showToast, setShowToast] = useState(false);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({
      name: editName,
      title: editTitle,
      email: editEmail,
      phone: editPhone,
      location: editLocation,
      bio: editBio
    });

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
          <span className="text-xs font-semibold">Profile updated successfully!</span>
        </div>
      )}

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">My Profile</h1>
        <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Configure your personal profile summary, public title, and biographical presence.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Visual Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-2xl p-6 text-center space-y-5 transition-colors duration-300">
            {/* Avatar Container */}
            <div className="relative w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-lg shadow-indigo-500/10">
              <div className="w-full h-full rounded-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-500 dark:text-slate-300">
                <FaUserTie className="w-14 h-14 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-indigo-600 text-white border border-white dark:border-slate-900 flex items-center justify-center text-[10px] shadow cursor-pointer hover:bg-indigo-500 transition-colors">
                📸
              </span>
            </div>

            {/* Profile Info */}
            <div className="space-y-1">
              <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">{profile.name}</h2>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{profile.title}</p>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800/40 text-center">
              <div className="space-y-1">
                <div className="flex justify-center text-slate-400 dark:text-slate-500">
                  <FaFolder className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">8</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Projects</p>
              </div>
              <div className="space-y-1">
                <div className="flex justify-center text-slate-400 dark:text-slate-500">
                  <FaNewspaper className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">24</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Blogs</p>
              </div>
              <div className="space-y-1">
                <div className="flex justify-center text-slate-400 dark:text-slate-500">
                  <FaRegEnvelope className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">3</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Unread</p>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-3 text-left text-xs text-slate-600 dark:text-slate-350">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="truncate">{profile.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaLocationDot className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Edit Profile Details Form */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-2xl p-6 transition-colors duration-300">
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800/60 pb-2 flex items-center space-x-2">
                <FaUser className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>Edit Profile Summary</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-2 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Professional Headline / Role</label>
                <input 
                  type="text" 
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Office / Display Email</label>
                <input 
                  type="email" 
                  required
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Display Phone Number</label>
                <input 
                  type="text" 
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2 flex flex-col col-span-2 md:col-span-1">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Base Location</label>
                <input 
                  type="text" 
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2 flex flex-col col-span-2">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Summary Biography</label>
                <textarea 
                  rows={6}
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-250 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none leading-relaxed font-light"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <button
                type="submit"
                className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10"
              >
                <FaFloppyDisk className="w-3.5 h-3.5" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
