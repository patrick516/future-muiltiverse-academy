import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import DashboardTopBar from "@/app/constants/DashboardTopBar";
import DashboardImage from "@/app/dashboard/DashboardImage";
import CourseDetail from "./CourseDetails";
// import CoursesCarousel from "@/app/academy/CoursesCarousel";
import { getCourses } from "@/app/api/academy";

type Tab = "trending" | "featured" | "all";

const CoursesPage = () => {
  const [active] = useState<Tab>("trending");
  const page = 1;
  const limit = 12;

  const qc = useQueryClient();

 
  useEffect(() => {
    if (active === "trending") {
      qc.prefetchQuery({
        queryKey: ["courses", { tag: "featured", page, limit }],
        queryFn: () => getCourses({ tag: "featured", page, limit }),
        staleTime: 1000 * 60 * 5,
      });
    } else if (active === "featured") {
      qc.prefetchQuery({
        queryKey: ["courses", { tag: "trending", page, limit }],
        queryFn: () => getCourses({ tag: "trending", page, limit }),
        staleTime: 1000 * 60 * 5,
      });
    }
  }, [active, qc]);

  return (
    <div className="flex flex-col gap-6 overflow-visible">
      <DashboardTopBar />
      <DashboardImage />
      <CourseDetail />
    </div>
  );
};

export default CoursesPage;
