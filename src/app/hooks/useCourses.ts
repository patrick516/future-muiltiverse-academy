// src/app/hooks/useCourses.ts
import { useQuery } from "@tanstack/react-query";
import {
  getCourses,
  type GetCoursesParams,
  type Course,
} from "@/app/api/academy";

export function useCourses(params: GetCoursesParams) {
  return useQuery<Course[], Error>({
    queryKey: ["courses", params],
    queryFn: () => getCourses(params),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
}
