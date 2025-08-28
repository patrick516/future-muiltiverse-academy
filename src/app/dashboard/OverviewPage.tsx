// src/app/dashboard/OverviewPage.tsx

import { useState } from "react";
import DashboardTopBar from "@/app/constants/DashboardTopBar";
import DashboardImage from "@/app/dashboard/DashboardImage";
import CourseSection from "@/app/dashboard/CourseSection";
import TodaySpecial from "@/app/dashboard/TodaySpecial";
import MiddlePart from "@/app/dashboard/MiddlePart";

const OverviewPage = () => {
  // state for filters
  const [hideCompleted, setHideCompleted] = useState(false);
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>("all");

  return (
    <div className="flex flex-col gap-6">
      <DashboardTopBar />
      <DashboardImage />
      <MiddlePart />
      <div className="mt-2">
        <CourseSection
          hideCompleted={hideCompleted}
          onToggleHideCompleted={setHideCompleted}
          selectedCourseSlug={selectedCourseSlug}
          onChangeCourse={setSelectedCourseSlug}
        />
        <TodaySpecial />
      </div>
    </div>
  );
};

export default OverviewPage;
