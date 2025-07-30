import React from "react";
import DashboardTopBar from "@/app/constants/DashboardTopBar";
import AcademyOverviewCard from "@/app/home/AcademyOverviewCard";
import AcademyContent from "@/app/home/AcademyContent";

const HomePage = () => {
  return (
    <>
      <DashboardTopBar />
      <AcademyOverviewCard />
      <AcademyContent />
    </>
  );
};

export default HomePage;
