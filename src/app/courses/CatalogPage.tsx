// src/app/courses/CatalogPage.tsx
import AllCoursesPanel from "./AllCoursesPanel";
import DashboardTopBar from "../constants/DashboardTopBar";

const CatalogPage = () => {
  return (
    <div className="flex flex-col gap-6 overflow-visible">
      <DashboardTopBar />
      <AllCoursesPanel />
    </div>
  );
};

export default CatalogPage;
