import React from "react";

import DashboardTopBar from "@/app/constants/DashboardTopBar";
import DashboardImage from "@/app/dashboard/DashboardImage";
import CourseDetail from "./CourseDetails";

const CoursesPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <DashboardTopBar />
      <DashboardImage />
      <CourseDetail />
    </div>
  );
};

export default CoursesPage;
