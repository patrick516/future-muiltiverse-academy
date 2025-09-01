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

// import CourseDetailPage from "@/app/courses/CourseDetailPage";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <aside className="bg-white w-72">
        <ScrollArea className="w-full h-full">
          <Sidebar />
        </ScrollArea>
      </aside>
      <main className="flex-1 p-6 bg-white">
        <ScrollArea className="w-full h-full">
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
        </ScrollArea>
      </main>
    </div>
  );
}

export default App;
