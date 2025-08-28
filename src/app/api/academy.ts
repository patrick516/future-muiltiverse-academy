export type Course = {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  category: string;
  tag?: "trending" | "featured";
  isEnrolled?: boolean;
};

export type GetCoursesParams = {
  tag?: "trending" | "featured";
  page?: number;
  limit?: number;
  sort?: "rating" | "duration";
};

const BASE = import.meta.env.VITE_BASE_URL ?? "";
const API_PATH = "/academy/courses";

type ApiItemsResponse = {
  status?: number;
  data?: { items?: unknown };
  msg?: string;
};
type ApiArrayResponse = { status?: number; data?: unknown; msg?: string };

function isCourseArray(value: unknown): value is Course[] {
  return Array.isArray(value);
}

function isItemsResponse(value: unknown): value is ApiItemsResponse {
  return typeof value === "object" && value !== null && "data" in value!;
}

function isArrayResponse(value: unknown): value is ApiArrayResponse {
  return typeof value === "object" && value !== null && "data" in value!;
}

export async function getCourses(
  params: GetCoursesParams = {}
): Promise<Course[]> {
  const qs = new URLSearchParams();
  if (params.tag) qs.set("tag", params.tag);
  if (typeof params.page === "number") qs.set("page", String(params.page));
  if (typeof params.limit === "number") qs.set("limit", String(params.limit));
  if (params.sort) qs.set("sort", params.sort);

  const url = `${BASE}${API_PATH}?${qs.toString()}`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`Failed to fetch courses (${res.status})`);
  }

  const json: unknown = await res.json();

  if (
    isItemsResponse(json) &&
    typeof json.data === "object" &&
    json.data !== null &&
    "items" in (json.data as { items?: unknown }) &&
    isCourseArray((json.data as { items?: unknown }).items)
  ) {
    return (json.data as { items: Course[] }).items;
  }

  if (
    isArrayResponse(json) &&
    isCourseArray((json as { data?: unknown }).data)
  ) {
    return (json as { data: Course[] }).data;
  }

  throw new Error("Unexpected courses response shape");
}
