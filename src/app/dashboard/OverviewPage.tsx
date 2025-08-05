// src/app/dashboard/OverviewPage.tsx

import DashboardTopBar from "@/app/constants/DashboardTopBar";
import DashboardImage from "@/app/dashboard/DashboardImage";
import CourseSection from "@/app/dashboard/CourseSection";
import TodaySpecial from "@/app/dashboard/TodaySpecial";
import MiddlePart from "@/app/dashboard/MiddlePart";

const OverviewPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <DashboardTopBar />
      <DashboardImage />
      <MiddlePart />
      <div className="mt-2">
        <CourseSection />
        <TodaySpecial />
      </div>
    </div>
  );
};

export default OverviewPage;
