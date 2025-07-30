"use client";
import CourseHeader from "./CourseHeader";
import CourseGrid from "./CourseGrid";

const CourseSection = () => {
  return (
    <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.03),_0_2px_8px_rgba(0,0,0,0.04)]">
      <CourseHeader />
      <CourseGrid />
    </div>
  );
};

export default CourseSection;
