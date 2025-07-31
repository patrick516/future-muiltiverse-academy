"use client";
import CourseHeader from "./CourseHeader";
import CourseGrid from "./CourseGrid";

const CourseSection = () => {
  return (
    <div
      className="p-6  bg-white border border-gray-200 rounded-lg shadow-[0_0_24px_rgba(0,0,0,0.05)]
"
    >
      <CourseHeader />
      <CourseGrid />
    </div>
  );
};

export default CourseSection;
