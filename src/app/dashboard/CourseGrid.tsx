"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import type { CourseCardProps } from "./CourseCard";
import toast from "react-hot-toast";
import { allCourses } from "./data/courses";
import CoursePagination from "./course-controls/CoursePagination";

// How many courses to show per page
const itemsPerPage = 4;

const CourseGrid = () => {
  const [courses, setCourses] = useState<CourseCardProps[]>(allCourses);
  const [currentPage, setCurrentPage] = useState(1);

  // Handle reset
  const handleStartOver = (index: number) => {
    const courseIndex = (currentPage - 1) * itemsPerPage + index;
    const updated = [...courses];
    updated[courseIndex].progress = 0;
    updated[courseIndex].status = "start-over";
    setCourses(updated);
  };

  // Handle continue
  const handleContinue = (index: number) => {
    const courseIndex = (currentPage - 1) * itemsPerPage + index;
    toast.success(`Continuing course: ${courses[courseIndex].title}`);
  };

  // Pagination calculations
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
        {paginatedCourses.map((course, i) => (
          <CourseCard
            key={course.title}
            {...course}
            onStartOver={() => handleStartOver(i)}
            onContinue={() => handleContinue(i)}
          />
        ))}
      </div>

      <CoursePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default CourseGrid;
