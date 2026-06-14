import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-6 border-t border-slate-200 dark:border-slate-800/40 text-slate-400 dark:text-slate-500 text-xs flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mt-auto transition-colors duration-300">
      <p>© 2026 Portfolio Admin. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer">Documentation</a>
        <span className="text-slate-200 dark:text-slate-700">•</span>
        <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer">Support</a>
        <span className="text-slate-200 dark:text-slate-700">•</span>
        <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer">System Status</a>
      </div>
    </footer>
  );
};

export default Footer;

