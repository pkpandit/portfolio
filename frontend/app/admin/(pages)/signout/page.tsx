"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  FaArrowRightFromBracket, 
  FaSpinner, 
  FaCircleCheck, 
  FaArrowLeft, 
  FaHouse,
  FaArrowRightToBracket 
} from "react-icons/fa6";

const SignOutPage = () => {
  const router = useRouter();
  const [status, setStatus] = useState<"confirm" | "signing_out" | "signed_out">("confirm");

  const handleSignOut = () => {
    setStatus("signing_out");
    // Simulate API call to clear session / cookies
    setTimeout(() => {
      setStatus("signed_out");
    }, 1500);
  };

  const handleMockSignIn = () => {
    setStatus("confirm");
    router.push("/admin");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      {/* State: CONFIRM SIGN OUT */}
      {status === "confirm" && (
        <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-6 text-center animate-in fade-in zoom-in-95 duration-200 transition-colors">
          <div className="mx-auto w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 flex items-center justify-center">
            <FaArrowRightFromBracket className="w-5 h-5" />
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Confirm Sign Out</h2>
            <p className="text-xs text-slate-500 dark:text-slate-300 max-w-xs mx-auto leading-relaxed">
              Are you sure you want to sign out of the Admin panel? You will need to log in again to manage your site configuration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => router.back()}
              className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold cursor-pointer transition-colors flex items-center justify-center space-x-2"
            >
              <FaArrowLeft className="w-3 h-3" />
              <span>No, Cancel</span>
            </button>
            <button
              onClick={handleSignOut}
              className="flex-1 px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors shadow-lg shadow-rose-600/10 flex items-center justify-center space-x-2"
            >
              <FaArrowRightFromBracket className="w-3 h-3" />
              <span>Yes, Sign Out</span>
            </button>
          </div>
        </div>
      )}

      {/* State: SIGNING OUT SPINNER */}
      {status === "signing_out" && (
        <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-8 shadow-xl text-center space-y-4 animate-in fade-in duration-200 transition-colors">
          <FaSpinner className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin mx-auto" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Signing Out</h3>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Clearing secure session tokens and local caches safely...
            </p>
          </div>
        </div>
      )}

      {/* State: SIGNED OUT CONFIRMATION */}
      {status === "signed_out" && (
        <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-6 text-center animate-in fade-in zoom-in-95 duration-200 transition-colors">
          <div className="mx-auto w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <FaCircleCheck className="w-5 h-5" />
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Successfully Signed Out</h2>
            <p className="text-xs text-slate-500 dark:text-slate-300 max-w-xs mx-auto leading-relaxed">
              Your administrative session has been securely closed. All local caching of analytics has been cleared.
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2 text-xs">
            <Link
              href="/"
              className="w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold cursor-pointer transition-colors shadow-lg shadow-indigo-600/10 flex items-center justify-center space-x-2"
            >
              <FaHouse className="w-3.5 h-3.5" />
              <span>Go to Public Portfolio Site</span>
            </Link>
            
            <button
              onClick={handleMockSignIn}
              className="w-full px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold cursor-pointer transition-colors flex items-center justify-center space-x-2"
            >
              <FaArrowRightToBracket className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span>Sign Back In (Mock Dashboard)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignOutPage;
