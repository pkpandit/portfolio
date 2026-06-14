import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "../component/common/header/Header";
import Footer from "../component/common/footer/Footer";
import LeftNav from "../component/common/leftNav/LeftNav";
import { AdminThemeProvider } from "../component/common/theme/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Admin Panel - Portfolio",
  description: "Administrative panel for portfolio management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${poppins.className} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="h-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased overflow-hidden transition-colors duration-300">
        <AdminThemeProvider>
          <div className="flex h-screen w-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <LeftNav />

            {/* Main Workspace (Header + Content + Footer) */}
            <div className="flex flex-col flex-1 min-w-0 h-full relative">
              {/* Top Navigation */}
              <Header />

              {/* Content Area */}
              <main className="flex-1 overflow-y-auto bg-slate-100/50 dark:bg-slate-900/30 p-6 md:p-8 flex flex-col justify-between transition-colors duration-300">
                <div className="flex-1 pb-12">{children}</div>
                <Footer />
              </main>
            </div>
          </div>
        </AdminThemeProvider>
      </body>
    </html>
  );
}
