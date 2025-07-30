import DashboardTopBar from "@/app/constants/DashboardTopBar";
import DashboardImage from "@/app/dashboard/DashboardImage";
import CourseSection from "@/app/dashboard/CourseSection";
import TodaySpecial from "@/app/dashboard/TodaySpecial";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <DashboardTopBar />
      <DashboardImage />
      <div className="mt-2">
        <CourseSection />
        <TodaySpecial />
      </div>

      {/* Future dashboard widgets can go here */}
      <div className="mt-10">
        {/* Placeholder: e.g., Stats Cards, Charts, Tables */}
      </div>
    </div>
  );
};

export default DashboardPage;
