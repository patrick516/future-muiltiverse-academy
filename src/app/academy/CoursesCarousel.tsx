import { memo, useMemo } from "react";
import { useCourses } from "@/app/hooks/useCourses";
import type { Course } from "@/app/api/academy";

type Props = {
  tag?: "trending" | "featured";
  page?: number;
  limit?: number;
  clientSort?: "ratingDesc" | "durationAsc";
  levelFilter?: Array<Course["level"]>;
};

export default function CoursesCarousel({
  tag = "trending",
  page = 1,
  limit = 12,
  clientSort = "ratingDesc",
  levelFilter,
}: Props) {
  const { data, isLoading, isError, error } = useCourses({ tag, page, limit });

  const filtered = useMemo(() => {
    if (!data) return [];
    if (!levelFilter?.length) return data;
    const set = new Set(levelFilter);
    return data.filter((c) => set.has(c.level));
  }, [data, levelFilter]);

  const sorted = useMemo(() => {
    if (!filtered.length) return filtered;
    if (clientSort === "ratingDesc") {
      return [...filtered].sort((a, b) => b.rating - a.rating);
    }
    if (clientSort === "durationAsc") {
      const toMin = (d: string) => {
        const m = d.match(/(\d+)h\s*(\d+)?m?/i);
        if (!m) return 0;
        const h = parseInt(m[1] || "0", 10);
        const mm = parseInt(m[2] || "0", 10);
        return h * 60 + mm;
      };
      return [...filtered].sort(
        (a, b) => toMin(a.duration) - toMin(b.duration)
      );
    }
    return filtered;
  }, [filtered, clientSort]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="p-3 border rounded-2xl animate-pulse">
            <div className="w-full bg-gray-200 h-36 rounded-xl" />
            <div className="w-3/4 h-4 mt-3 bg-gray-200 rounded" />
            <div className="w-1/2 h-3 mt-2 bg-gray-200 rounded" />
            <div className="w-1/3 h-3 mt-2 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="p-4 text-red-700 border rounded bg-red-50">
        Failed to load courses: {error?.message ?? "Unknown error"}
      </div>
    );
  }

  // Empty
  if (!sorted.length) {
    return (
      <div className="p-4 text-gray-600 border rounded bg-gray-50">
        No courses found.
      </div>
    );
  }

  // Grid
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {sorted.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  );
}

const CourseCard = memo(function CourseCard({ course }: { course: Course }) {
  return (
    <div className="p-3 transition border rounded-2xl hover:shadow-sm">
      <img
        loading="lazy"
        src={course.thumbnail}
        alt={course.title}
        className="object-cover w-full h-36 rounded-xl"
      />
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-semibold line-clamp-2">{course.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {course.excerpt}
        </p>
        <div className="flex items-center justify-between mt-2 text-xs">
          <span>{course.level}</span>
          <span>
            ⭐{" "}
            {typeof course.rating === "number"
              ? course.rating.toFixed(1)
              : course.rating}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span>{course.duration}</span>
          <span className="px-2 py-0.5 rounded bg-gray-100">
            {course.category}
          </span>
        </div>
        <button className="w-full py-2 mt-2 text-sm border rounded-xl hover:bg-gray-50">
          {course.isEnrolled ? "Continue" : "Enroll"}
        </button>
      </div>
    </div>
  );
});
