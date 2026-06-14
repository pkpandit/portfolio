"use client";

import React, { useState } from "react";
import { 
  FaGear, 
  FaLock, 
  FaLink, 
  FaDatabase, 
  FaServer, 
  FaFloppyDisk, 
  FaTrash,
  FaCircleInfo,
  FaCheck
} from "react-icons/fa6";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<"general" | "security" | "integrations" | "system">("general");
  const [showToast, setShowToast] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [cacheCleared, setCacheCleared] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleClearCache = () => {
    setCacheCleared(true);
    setTimeout(() => {
      setCacheCleared(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 right-10 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-3 rounded-xl shadow-xl z-50 flex items-center space-x-2.5 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="p-1 bg-white/20 rounded-full">
            <FaCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold">Settings saved successfully!</span>
        </div>
      )}

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Settings</h1>
        <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Configure your portfolio site metadata, administrator credentials, external integrations, and systems.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Navigation Sidebar Tabs */}
        <div className="w-full lg:w-64 shrink-0 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/60 lg:pr-6 whitespace-nowrap">
          <button
            onClick={() => setActiveTab("general")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
              activeTab === "general"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            <FaGear className="w-4 h-4" />
            <span>General Settings</span>
          </button>
          
          <button
            onClick={() => setActiveTab("security")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
              activeTab === "security"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            <FaLock className="w-4 h-4" />
            <span>Security & Admin</span>
          </button>
          
          <button
            onClick={() => setActiveTab("integrations")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
              activeTab === "integrations"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            <FaLink className="w-4 h-4" />
            <span>Integrations & SEO</span>
          </button>
          
          <button
            onClick={() => setActiveTab("system")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
              activeTab === "system"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            <FaServer className="w-4 h-4" />
            <span>System & Status</span>
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-2xl p-6 transition-colors duration-300">
          <form onSubmit={handleSave} className="space-y-6">
            
            {/* GENERAL TAB */}
            {activeTab === "general" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800/60 pb-2 flex items-center space-x-2">
                    <FaGear className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <span>General Site Configurations</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-2 flex flex-col col-span-2">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Portfolio Title (HTML Title Tag)</label>
                    <input 
                      type="text" 
                      defaultValue="Jane Doe | Senior Full Stack Software Engineer Portfolio"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Site Logo Header Text</label>
                    <input 
                      type="text" 
                      defaultValue="Jane.dev"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Public Contact Email</label>
                    <input 
                      type="email" 
                      defaultValue="hello@janedoe.dev"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col col-span-2">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Global Footer Copyright Text</label>
                    <input 
                      type="text" 
                      defaultValue="© 2026 Jane Doe. All rights reserved."
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SECURITY TAB */}
            {activeTab === "security" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800/60 pb-2 flex items-center space-x-2">
                    <FaLock className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <span>Administrator Credentials</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Username</label>
                    <input 
                      type="text" 
                      defaultValue="janedoe_admin"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Admin Panel Email</label>
                    <input 
                      type="email" 
                      defaultValue="admin@janedoe.dev"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="col-span-2 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Update Password</h4>
                  </div>

                  <div className="space-y-2 flex flex-col col-span-2 md:col-span-1">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Current Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col col-span-2 md:col-span-1">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Confirm New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* INTEGRATIONS TAB */}
            {activeTab === "integrations" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800/60 pb-2 flex items-center space-x-2">
                    <FaLink className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <span>Social Media & Analytics Integrations</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">GitHub Profile URL</label>
                    <input 
                      type="url" 
                      defaultValue="https://github.com/janedoe"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">LinkedIn Profile URL</label>
                    <input 
                      type="url" 
                      defaultValue="https://linkedin.com/in/janedoe"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Twitter Profile URL</label>
                    <input 
                      type="url" 
                      defaultValue="https://twitter.com/janedoe"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Google Analytics Tracking ID</label>
                    <input 
                      type="text" 
                      defaultValue="G-HJ289KLSDN"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col col-span-2">
                    <label className="font-semibold text-slate-600 dark:text-slate-300">Dev.to API Integration Key (Mock)</label>
                    <input 
                      type="password" 
                      defaultValue="dev_api_mock_secret_key_12345"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SYSTEM & STATUS TAB */}
            {activeTab === "system" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800/60 pb-2 flex items-center space-x-2">
                    <FaServer className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <span>System Status & Operations</span>
                  </h3>
                </div>

                <div className="space-y-6 text-xs">
                  {/* Database Connections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg">
                          <FaDatabase className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 dark:text-slate-200">PostgreSQL Database</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500">Connected - host: local-pg-db</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 shrink-0">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">Active</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg">
                          <FaCircleInfo className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 dark:text-slate-200">Cache Engine</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500">Vercel Edge Memory Cache</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 shrink-0">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* System Parameters Table */}
                  <div className="border border-slate-200 dark:border-slate-800/60 rounded-xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[9px] border-b border-slate-200 dark:border-slate-800">
                          <th className="p-3">System Parameter</th>
                          <th className="p-3 text-right">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40 text-slate-600 dark:text-slate-300">
                        <tr>
                          <td className="p-3 font-semibold text-slate-700 dark:text-slate-200">Node.js Runtime Version</td>
                          <td className="p-3 text-right font-mono">v20.11.0</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-700 dark:text-slate-200">Next.js Version</td>
                          <td className="p-3 text-right font-mono">v14.2.3</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-700 dark:text-slate-200">Environment Mode</td>
                          <td className="p-3 text-right font-mono text-indigo-600 dark:text-indigo-400">production</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-700 dark:text-slate-200">Total Database Size</td>
                          <td className="p-3 text-right font-mono">4.2 MB</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Maintenance Mode & Operations */}
                  <div className="p-5 bg-rose-50/20 dark:bg-rose-950/5 border border-rose-500/20 dark:border-rose-950/40 rounded-xl space-y-4">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                      <span className="w-1.5 h-3.5 bg-rose-500 rounded"></span>
                      <span>Danger Zone / System Operations</span>
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-200">Enable Maintenance Mode</p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500">Redirects visitors to a static "Under Construction" page.</p>
                      </div>
                      
                      {/* Premium Custom Toggle Switch */}
                      <button
                        type="button"
                        onClick={() => setMaintenanceMode(!maintenanceMode)}
                        className={`relative w-11 h-6 rounded-full transition-colors duration-250 cursor-pointer ${
                          maintenanceMode ? "bg-indigo-600" : "bg-slate-200 dark:bg-slate-800"
                        }`}
                      >
                        <span className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-250 ${
                          maintenanceMode ? "translate-x-5" : "translate-x-0"
                        }`}></span>
                      </button>
                    </div>

                    <div className="h-px bg-rose-500/10 dark:bg-rose-950/20"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-200">Clear Runtime Site Cache</p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500">Purges server responses and static rendering caches immediately.</p>
                      </div>

                      <button
                        type="button"
                        onClick={handleClearCache}
                        disabled={cacheCleared}
                        className={`flex items-center space-x-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                          cacheCleared ? "bg-emerald-500 dark:bg-emerald-600 text-white hover:bg-emerald-500 dark:hover:bg-emerald-600 cursor-default" : ""
                        }`}
                      >
                        {cacheCleared ? (
                          <>
                            <FaCheck className="w-3 h-3" />
                            <span>Cache Cleared!</span>
                          </>
                        ) : (
                          <>
                            <FaTrash className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                            <span>Clear Cache</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Buttons panel (Hide for system status tab if no inputs are there, but keep for form submission) */}
            {activeTab !== "system" && (
              <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10"
                >
                  <FaFloppyDisk className="w-3.5 h-3.5" />
                  <span>Save Settings</span>
                </button>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
