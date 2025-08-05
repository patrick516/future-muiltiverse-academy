import DashboardTopBar from "@/app/constants/DashboardTopBar";
import DashboardSummaryCard from "@/app/dashboard/main-dashboard/top-section/DashboardSummaryCard";
import TodaysEventCard from "@/app/dashboard/main-dashboard/top-section/TodaysEventCard";
import TodaysCourseCard from "@/app/dashboard/main-dashboard/top-section/TodaysCourseCard";
import RecommendedCourses from "./middle/RecommendedCourses";
import ActiveLessons from "./middle/ActiveLessons";
import LearnActivityChart from "./bottom/LearnActivityChart";
import BottomPagination from "@/app/constants/BottomPagination";

const MainDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <DashboardTopBar />

      {/* Top Section */}
      <div className="flex justify-center w-full px-4">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col w-full gap-6">
            <DashboardSummaryCard
              data={{
                certificates: 6,
                courses: 37,
                hoursLearned: 822,
                averageScore: 4.7,
              }}
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full gap-4">
            <TodaysEventCard />
            <TodaysCourseCard />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex justify-center w-full px-4">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2">
          <RecommendedCourses />
          <ActiveLessons />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex justify-center w-full px-4">
        <div className="w-full max-w-6xl">
          <LearnActivityChart />
          <BottomPagination />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
