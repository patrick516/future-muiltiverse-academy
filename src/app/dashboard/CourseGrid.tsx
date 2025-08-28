"use client";

import { useEffect, useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import type { CourseCardProps } from "./CourseCard";
import toast from "react-hot-toast";
import { allCourses } from "./data/courses";
import CoursePagination from "./course-controls/CoursePagination";
import { coursePages } from "@/app/courses/courseContent";

// How many courses to show per page
const itemsPerPage = 4;

type GridProps = {
  hideCompleted?: boolean;
  selectedCourseSlug?: string; // "all" or a slug
};

const CourseGrid = ({
  hideCompleted = false,
  selectedCourseSlug = "all",
}: GridProps) => {
  const [courses, setCourses] = useState<CourseCardProps[]>(allCourses);
  const [currentPage, setCurrentPage] = useState(1);

  const isCompleted = (c: CourseCardProps) =>
    c.status === "completed" ||
    (typeof c.progress === "number" && c.progress >= 100);

  // Map slug -> title (so we can filter CourseCards by title)
  const selectedTitle = useMemo(() => {
    if (selectedCourseSlug === "all") return null;
    return (
      coursePages.find((c) => c.slug === selectedCourseSlug)?.title ?? null
    );
  }, [selectedCourseSlug]);

  // Handle reset
  const handleStartOver = (course: CourseCardProps) => {
    const courseIndex = courses.findIndex((c) => c.title === course.title);
    if (courseIndex === -1) return;
    const updated = [...courses];
    updated[courseIndex].progress = 0;
    updated[courseIndex].status = "start-over";
    setCourses(updated);
  };

  // Handle continue
  const handleContinue = (course: CourseCardProps) => {
    toast.success(`Continuing course: ${course.title}`);
  };

  // Apply filtering BEFORE pagination
  const visibleCourses = courses.filter((c) => {
    const passHide = hideCompleted ? !isCompleted(c) : true;
    const passCourse = selectedTitle ? c.title === selectedTitle : true;
    return passHide && passCourse;
  });

  // Pagination calculations based on filtered list
  const totalPages = Math.max(
    1,
    Math.ceil(visibleCourses.length / itemsPerPage)
  );
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = visibleCourses.slice(start, start + itemsPerPage);

  // Keep currentPage in range
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [hideCompleted, selectedCourseSlug, totalPages, currentPage]);

  // Snap to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [hideCompleted, selectedCourseSlug]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
        {paginatedCourses.map((course) => (
          <CourseCard
            key={course.title}
            {...course}
            onStartOver={() => handleStartOver(course)}
            onContinue={() => handleContinue(course)}
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
