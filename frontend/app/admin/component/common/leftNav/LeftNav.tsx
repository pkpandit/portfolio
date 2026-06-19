"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaUserTie, 
  FaGaugeHigh, 
  FaHouse,
  FaBriefcase, 
  FaHandshake,
  FaUser,
  FaNewspaper, 
  FaEnvelope, 
  FaGear, 
  FaArrowRightFromBracket,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa6";

const LeftNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: <FaGaugeHigh className="w-4 h-4" /> },
    { name: "Home", href: "/admin/home", icon: <FaHouse className="w-4 h-4" /> },
    { name: "Project", href: "/admin/project", icon: <FaBriefcase className="w-4 h-4" /> },
    { name: "Services", href: "/admin/services", icon: <FaHandshake className="w-4 h-4" /> },
    { name: "About", href: "/admin/about", icon: <FaUser className="w-4 h-4" /> },
    { name: "Blogs", href: "/admin/blogs", icon: <FaNewspaper className="w-4 h-4" /> },
    { name: "Contact", href: "/admin/contact", icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  return (
    <aside className={`bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800/60 flex flex-col h-full text-slate-800 dark:text-slate-100 z-20 shrink-0 relative transition-all duration-300 ease-in-out ${isCollapsed ? "w-16" : "w-64"}`}>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        className="absolute top-20 -right-3 w-6 h-6 bg-indigo-600 rounded-full border border-slate-200 dark:border-slate-800 text-white flex items-center justify-center cursor-pointer hover:bg-indigo-500 transition-colors shadow-lg z-30"
      >
        {isCollapsed ? <FaChevronRight className="w-3 h-3" /> : <FaChevronLeft className="w-3 h-3" />}
      </button>

      {/* Brand Header */}
      <div className={`h-16 flex items-center border-b border-slate-100 dark:border-slate-800/60 transition-all duration-300 ${isCollapsed ? "justify-center px-2" : "justify-between px-6"}`}>
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="p-2 bg-indigo-600 rounded-lg text-white shrink-0">
            <FaUserTie className="w-5 h-5" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent transition-opacity duration-300 whitespace-nowrap">
              PORTFOLIO
            </span>
          )}
        </div>
      </div>

      {/* Nav Menu */}
      <nav className={`flex-1 py-6 space-y-1.5 overflow-y-auto transition-all duration-300 ${isCollapsed ? "px-2" : "px-4"}`}>
        {!isCollapsed ? (
          <p className="px-3 text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Management
          </p>
        ) : (
          <div className="h-px bg-slate-100 dark:bg-slate-800/60 my-2 mx-2"></div>
        )}
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              title={isCollapsed ? item.name : undefined}
              className={`flex items-center rounded-lg text-sm font-medium transition-all duration-200 group cursor-pointer ${
                isCollapsed ? "justify-center p-2.5" : "space-x-3 px-3 py-2.5"
              } ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <span className={`${isActive ? "text-white" : "text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"} shrink-0`}>
                {item.icon}
              </span>
              {!isCollapsed && (
                <span className="transition-opacity duration-300 whitespace-nowrap">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Profile Settings Section */}
      <div className={`p-4 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/55 dark:bg-slate-950/20 transition-all duration-300 ${isCollapsed ? "px-2" : "p-4"}`}>
        <div className="flex flex-col space-y-3">
          <Link
            href="/admin/settings"
            title={isCollapsed ? "Settings" : undefined}
            className={`flex items-center rounded-lg text-sm font-medium transition-all duration-200 group cursor-pointer ${
              isCollapsed ? "justify-center p-2.5" : "space-x-3 px-3 py-2.5"
            } ${
              pathname === "/admin/settings"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            <FaGear className={`w-4 h-4 shrink-0 transition-colors ${
              pathname === "/admin/settings"
                ? "text-white"
                : "text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
            }`} />
            {!isCollapsed && <span className="whitespace-nowrap">Settings</span>}
          </Link>
          <Link
            href="/admin/signout"
            title={isCollapsed ? "Sign Out" : undefined}
            className={`flex items-center rounded-lg text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:text-rose-700 dark:hover:text-rose-300 transition-colors group cursor-pointer ${
              isCollapsed ? "justify-center p-2" : "space-x-3 px-3 py-2"
            }`}
          >
            <FaArrowRightFromBracket className="w-4 h-4 text-rose-500 group-hover:text-rose-400 transition-colors shrink-0" />
            {!isCollapsed && <span className="whitespace-nowrap">Sign Out</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default LeftNav;


