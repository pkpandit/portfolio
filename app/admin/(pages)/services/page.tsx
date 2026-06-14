"use client";

import React, { useState } from "react";
import { 
  FaPlus, 
  FaCode, 
  FaPaintbrush, 
  FaMobileScreen, 
  FaChartLine, 
  FaTrash, 
  FaPenToSquare,
  FaXmark,
  FaFloppyDisk,
  FaDatabase,
  FaServer,
  FaCheck
} from "react-icons/fa6";

const ServicesPage = () => {
  const initialServices = [
    { id: 1, name: "Full Stack Web Development", desc: "Complete website and application development covering frontend, backend, APIs, databases, and deployment — tailored to business requirements.", iconType: "Code" },
    { id: 2, name: "Custom Website Development", desc: "Premium business websites designed to strengthen online presence, improve engagement, and generate measurable growth.", iconType: "Design" },
    { id: 3, name: "Frontend Development", desc: "Modern, responsive, and user-centric interfaces designed for seamless experiences across desktop, tablet, and mobile devices.", iconType: "Mobile" },
    { id: 4, name: "Backend Development & APIs", desc: "Secure backend systems, scalable architecture, database management, authentication, and API integrations engineered for performance.", iconType: "Server" },
    { id: 5, name: "E-commerce Development", desc: "Scalable e-commerce platforms with secure payments, product management, user authentication, and conversion-focused experiences.", iconType: "Database" },
    { id: 6, name: "Website Maintenance & Optimization", desc: "Ongoing website maintenance, performance optimization, security updates, and continuous improvement to ensure your site remains fast, secure, and up-to-date.", iconType: "Marketing" },
  ];

  const [services, setServices] = useState(initialServices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Form Field States
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [iconType, setIconType] = useState("Code");

  // Map icon strings to React elements
  const getIconElement = (type: string) => {
    switch (type) {
      case "Code":
        return <FaCode className="w-5 h-5 text-blue-400" />;
      case "Design":
        return <FaPaintbrush className="w-5 h-5 text-emerald-400" />;
      case "Mobile":
        return <FaMobileScreen className="w-5 h-5 text-purple-400" />;
      case "Marketing":
        return <FaChartLine className="w-5 h-5 text-amber-400" />;
      case "Database":
        return <FaDatabase className="w-5 h-5 text-rose-400" />;
      case "Server":
        return <FaServer className="w-5 h-5 text-indigo-400" />;
      default:
        return <FaCode className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !desc.trim()) return;

    const newService = {
      id: Date.now(),
      name,
      desc,
      iconType
    };

    setServices([newService, ...services]);
    setIsModalOpen(false);

    // Reset inputs
    setName("");
    setDesc("");
    setIconType("Code");

    // Show Success Toast
    setToastMessage(`Service "${newService.name}" added successfully!`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleDeleteService = (id: number, serviceName: string) => {
    setServices(services.filter((s) => s.id !== id));
    
    // Show Success Toast
    setToastMessage(`Service "${serviceName}" removed successfully!`);
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
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Services Offered</h1>
          <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">Manage the services that appear on your services section.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10"
        >
          <FaPlus className="w-3.5 h-3.5" />
          <span>Add Service</span>
        </button>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.length === 0 ? (
          <div className="col-span-2 py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl text-center text-slate-400 dark:text-slate-500 font-medium">
            No services configured. Click "Add Service" to create one.
          </div>
        ) : (
          services.map((srv) => (
            <div key={srv.id} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-xl flex items-start space-x-4 transition-colors duration-300">
              <div className="p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-100 dark:border-slate-800/40 shrink-0">
                {getIconElement(srv.iconType)}
              </div>
              <div className="flex-1 space-y-2 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{srv.name}</h3>
                  <div className="flex space-x-1 shrink-0">
                    <button title="Edit" className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800/40 rounded cursor-pointer transition-colors">
                      <FaPenToSquare className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => handleDeleteService(srv.id, srv.name)}
                      title="Delete" 
                      className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded cursor-pointer transition-colors"
                    >
                      <FaTrash className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">{srv.desc}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ADD SERVICE DIALOG MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 flex flex-col text-slate-800 dark:text-slate-100 transition-colors duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800/60 shrink-0">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Add Service Offering</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:text-slate-550 dark:hover:text-slate-300 p-1 rounded-lg transition-colors cursor-pointer"
              >
                <FaXmark className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddService} className="py-4 space-y-4 text-xs">
              {/* Service Name */}
              <div className="space-y-1.5 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Service Name *</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Cloud Architecture Setup" 
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              {/* Icon Type Selection */}
              <div className="space-y-1.5 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Representing Icon</label>
                <select 
                  value={iconType}
                  onChange={(e) => setIconType(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all cursor-pointer"
                >
                  <option value="Code">💻 Software Development (Code)</option>
                  <option value="Design">🎨 UI/UX & Brand Design (Paintbrush)</option>
                  <option value="Mobile">📱 Mobile App Development (Mobile)</option>
                  <option value="Marketing">📈 SEO & Marketing Strategy (Chart)</option>
                  <option value="Database">🗄️ Database Management (Database)</option>
                  <option value="Server">☁️ DevOps & Cloud Hosting (Server)</option>
                </select>
              </div>

              {/* Description */}
              <div className="space-y-1.5 flex flex-col">
                <label className="font-semibold text-slate-600 dark:text-slate-300">Service Description *</label>
                <textarea 
                  rows={4}
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Describe your service offering, methodology, and tools used..."
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                />
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
                  <span>Add Service</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
