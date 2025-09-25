import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/app/sidebar/Sidebar";
import HomePage from "@/app/home/HomePage";
import DashboardPage from "@/app/dashboard/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import CoursesPage from "@/app/courses/page";
import OverviewPage from "@/app/dashboard/OverviewPage";
import AcademyDetail from "@/app/academy/AcademyDetail";
import QuickLinkPage from "@/app/quicklinks/QuickLinkPage";
import CatalogPage from "@/app/courses/CatalogPage";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="flex h-screen bg-white sm:h-screen sm:overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Desktop sidebar */}
      <aside className="hidden bg-white border-r border-gray-200 w-72 md:block">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="flex-1 bg-white">
        {/* Mobile top bar */}
        <div className="sticky top-0 z-40 flex items-center justify-between gap-2 p-4 border-b border-gray-200 md:hidden bg-white/95 backdrop-blur">
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="flex-1 font-medium text-center">Future Academy</div>
          <div className="w-10 h-10" />
        </div>

        {/* Page content */}
        <ScrollArea className="w-full h-[calc(100vh-0px)] md:h-full p-0 md:p-0">
          <div className="w-full max-w-screen-xl px-3 py-6 mx-auto overflow-x-hidden sm:px-4">
            <Routes>
              <Route path="/academy/item/:id" element={<AcademyDetail />} />
              <Route path="/courses" element={<OverviewPage />} />
              <Route path="/courses/overview" element={<CoursesPage />} />
              <Route path="/courses/:slug" element={<CoursesPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/quick/:slug" element={<QuickLinkPage />} />
              <Route path="/dashboard/overview" element={<OverviewPage />} />
              <Route path="/courses/all" element={<CatalogPage />} />
            </Routes>
          </div>
        </ScrollArea>
      </main>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 shadow-xl w-72">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-mono font-semibold text-gray-400">
                Future academy
              </span>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex items-center justify-center border border-gray-300 rounded-md h-9 w-9"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
