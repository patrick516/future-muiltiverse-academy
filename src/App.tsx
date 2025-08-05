import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/app/sidebar/Sidebar";
import HomePage from "@/app/home/HomePage";
import DashboardPage from "@/app/dashboard/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import CoursesPage from "@/app/courses/page";
import OverviewPage from "@/app/dashboard/OverviewPage";
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
            <Route path="/courses" element={<CoursesPage />} />
            {/* <Route path="/courses/:slug" element={<CourseDetailPage />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/overview" element={<OverviewPage />} />
          </Routes>
        </ScrollArea>
      </main>
    </div>
  );
}

export default App;
