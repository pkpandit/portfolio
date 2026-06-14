"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  FaUserTie, 
  FaBell, 
  FaMagnifyingGlass, 
  FaChevronRight, 
  FaSun,
  FaMoon,
  FaUser,
  FaGear,
  FaClock,
  FaArrowRightFromBracket,
  FaEnvelope,
  FaCommentDots,
  FaCircleExclamation
} from "react-icons/fa6";
import { useAdminTheme } from "../theme/ThemeContext";

const notifications = [
  {
    id: 1,
    text: "John Doe sent a new message regarding your projects.",
    time: "2 mins ago",
    icon: <FaEnvelope className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />,
    bgClass: "bg-blue-500/10 border border-blue-500/20",
  },
  {
    id: 2,
    text: "Sarah commented on your 'Next.js 16 Features' blog post.",
    time: "10 mins ago",
    icon: <FaCommentDots className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />,
    bgClass: "bg-emerald-500/10 border border-emerald-500/20",
  },
  {
    id: 3,
    text: "System Alert: Server bandwidth usage exceeded 85%.",
    time: "1 hour ago",
    icon: <FaCircleExclamation className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />,
    bgClass: "bg-amber-500/10 border border-amber-500/20",
  },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useAdminTheme();

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="h-16 px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/60 text-slate-800 dark:text-slate-100 flex justify-between items-center z-10 transition-colors duration-300">
      {/* Left side: Breadcrumb & Search */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
          <span>Admin</span>
          <FaChevronRight className="w-2.5 h-2.5 text-slate-300 dark:text-slate-600" />
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">Dashboard</span>
        </div>

        {/* Search Input Bar */}
        <div className="relative max-w-xs hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaMagnifyingGlass className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
          </span>
          <input
            type="text"
            className="w-48 lg:w-64 pl-9 pr-4 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-lg text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Right side: Actions & User Info */}
      <div className="flex items-center space-x-4">
        {/* Theme indicator */}
        <button 
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
        >
          {theme === "dark" ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            title="Notifications"
            className="p-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors relative cursor-pointer focus:outline-none"
            aria-expanded={isNotificationOpen}
            aria-haspopup="true"
          >
            <FaBell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-white dark:ring-slate-900"></span>
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-2xl py-2 z-50 text-sm overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
              {/* Header */}
              <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-800/60 flex justify-between items-center bg-slate-50 dark:bg-slate-950/20">
                <span className="font-semibold text-slate-700 dark:text-slate-200 text-xs">Notifications</span>
                <button className="text-[10px] text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium cursor-pointer">
                  Mark all as read
                </button>
              </div>

              {/* Items */}
              <div className="max-h-64 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/40">
                {notifications.map((notif) => (
                  <div 
                    key={notif.id} 
                    className="p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors flex items-start space-x-3 cursor-pointer"
                  >
                    <div className={`p-1.5 rounded-lg shrink-0 ${notif.bgClass}`}>
                      {notif.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {notif.text}
                      </p>
                      <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-1 flex items-center">
                        <FaClock className="w-2.5 h-2.5 mr-1" />
                        {notif.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 dark:border-slate-800/60 pt-2 px-4 pb-1 text-center bg-slate-50 dark:bg-slate-950/10">
                <a 
                  href="#" 
                  className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium inline-block w-full py-1 cursor-pointer"
                >
                  View all notifications
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>

        {/* User Info with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-3 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-all cursor-pointer focus:outline-none"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <div className="hidden sm:block text-right">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Administrator</p>
              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">Super User</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-600/30 border border-indigo-200 dark:border-indigo-500/50 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
              <FaUserTie className="h-4 w-4" />
            </div>
          </button>

          {/* Dropdown Options */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-2xl py-2 z-50 text-sm overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
              {/* Header profile info for quick check */}
              <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800/60 sm:hidden">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Administrator</p>
                <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">Super User</p>
              </div>

              <Link 
                href="/admin/profile" 
                className="flex items-center space-x-3 px-4 py-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                <FaUser className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>My Profile</span>
              </Link>
              <Link 
                href="/admin/settings" 
                className="flex items-center space-x-3 px-4 py-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                <FaGear className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>Account Settings</span>
              </Link>
              <a 
                href="#" 
                className="flex items-center space-x-3 px-4 py-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                <FaClock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>Activity Log</span>
              </a>

              <div className="h-px bg-slate-100 dark:bg-slate-800/60 my-1"></div>

              <Link 
                href="/admin/signout" 
                className="flex items-center space-x-3 px-4 py-2.5 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:text-rose-700 dark:hover:text-rose-300 transition-colors cursor-pointer animate-in fade-in"
              >
                <FaArrowRightFromBracket className="w-4 h-4 text-rose-500/80" />
                <span>Sign Out</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


