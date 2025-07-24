import React from "react";
import Sidebar from "@/app/sidebar/Sidebar";
import DashboardTopBar from "@/app/dashboard/DashboardTopBar";
// import DashboardImage from "@/app/dashboard/DashboardImage";
// import CourseSection from "./app/dashboard/CourseSection";
import AcademyOverviewCard from "@/app/dashboard/AcademyOverviewCard";
function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <DashboardTopBar />
        {/* <DashboardImage /> */}
        <AcademyOverviewCard />
        {/* <div className="mt-5">
          <CourseSection />
        </div> */}

        {/* Future content goes below */}
        <div className="mt-10">
          {/* You can replace this with cards, filters, etc. later */}
        </div>
      </main>
    </div>
  );
}

export default App;
