"use client";

import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { coursePages, type CourseContent } from "./courseContent";
import CourseCard, { type CourseCardProps } from "@/app/dashboard/CourseCard";
import CoursePagination from "@/app/dashboard/course-controls/CoursePagination";

// ===== helpers =====
const ITEMS_PER_PAGE = 6;

const clamp = (n?: number) => Math.max(0, Math.min(100, Math.round(n ?? 0)));

const statusFromProgress = (p?: number): CourseCardProps["status"] => {
  const v = clamp(p);
  if (v >= 100) return "completed";
  if (v <= 0) return "start-over";
  return "continue";
};

const formatReviews = (n?: number) => {
  const v = n ?? 0;
  if (v >= 1000) {
    const k = v / 1000;
    return Number.isInteger(k) ? `${k}k` : `${k.toFixed(2)}k`;
  }
  return `${v}`;
};

const mapToCard = (c: CourseContent): CourseCardProps & { slug: string } => ({
  image: c.heroImage,
  tag: c.level ?? "All Levels",
  rating: c.rating ?? 0,
  reviews: formatReviews(c.reviews),
  title: c.title,
  subtitle: c.summary,
  duration: c.duration ?? c.totalVideo ?? "—",
  progress: clamp(c.progress),
  status: c.status ?? statusFromProgress(c.progress),
  slug: c.slug,
});

const isCompleted = (card: CourseCardProps) =>
  card.status === "completed" || (card.progress ?? 0) >= 100;

// ===== UI =====
export default function AllCoursesPanel() {
  const navigate = useNavigate();

  // derive once from coursePages
  const [cards, setCards] = useState<(CourseCardProps & { slug: string })[]>(
    () => coursePages.map(mapToCard)
  );

  // controls
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const [sortBy, setSortBy] = useState<
    "featured" | "rating" | "students" | "updated"
  >("featured");
  const [hideCompleted, setHideCompleted] = useState(false);

  // pagination
  const [page, setPage] = useState(1);

  // level options
  const levels = useMemo(() => {
    const s = new Set<string>();
    coursePages.forEach((c) => s.add(c.level ?? "All Levels"));
    return ["all", ...Array.from(s)];
  }, []);

  // filter + sort
  const filtered = useMemo(() => {
    let list = [...cards];

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((c) =>
        [c.title, c.subtitle].some((t) => t?.toLowerCase().includes(q))
      );
    }

    if (level !== "all") {
      list = list.filter((c) => (c.tag ?? "All Levels") === level);
    }

    if (hideCompleted) {
      list = list.filter((c) => !isCompleted(c));
    }

    switch (sortBy) {
      case "rating":
        list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case "students":
        const toNum = (r: string) =>
          r.endsWith("k") ? Number(r.replace("k", "")) * 1000 : Number(r);
        list.sort((a, b) => toNum(b.reviews) - toNum(a.reviews));
        break;
      case "updated":
        // optional: bring lastUpdated onto the card and sort by it later
        break;
      case "featured":
      default:
        break;
    }

    return list;
  }, [cards, query, level, sortBy, hideCompleted]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [page, totalPages, query, level, hideCompleted, sortBy]);

  // card actions
  const handleStartOver = (title: string) => {
    setCards((prev) =>
      prev.map((c) =>
        c.title === title ? { ...c, progress: 0, status: "start-over" } : c
      )
    );
  };

  const handleContinue = (slug: string) => {
    navigate(`/courses/${slug}`);
  };

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          {/* <h1 className="text-2xl font-semibold text-gray-800 ">All Courses</h1>
          <p className="text-sm text-gray-500">
            Showing {filtered.length} of {cards.length} course(s)
          </p> */}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Input
            placeholder="Search courses"
            className="w-64 h-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger className="h-9 w-44 text-sm bg-white border border-[#EBDDBF] shadow-sm focus:ring-2 focus:ring-[#CFB16D]">
              <SelectValue placeholder="All levels" />
            </SelectTrigger>

            <SelectContent className="z-50 bg-white border border-[#CFB16D] rounded-lg p-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              {levels.map((lvl) => (
                <SelectItem
                  key={lvl}
                  value={lvl}
                  className="px-3 py-2 text-sm text-gray-700 rounded-md
                   data-[highlighted]:bg-[#CFB16D]
                   data-[state=checked]:bg-[#CFB16D]/15 data-[state=checked]:text-gray-900
                   focus:bg-[#CFB16D]/10 cursor-pointer"
                >
                  {lvl === "all" ? "All levels" : lvl}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={sortBy}
            onValueChange={(v) => setSortBy(v as typeof sortBy)}
          >
            <SelectTrigger className="h-9 w-44 text-sm bg-white border border-[#EBDDBF] shadow-sm focus:ring-2 focus:ring-[#CFB16D]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>

            <SelectContent className="z-50 bg-white border border-[#EBDDBF] rounded-lg p-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <SelectItem
                value="featured"
                className="px-3 py-2 text-sm text-gray-700 rounded-md data-[highlighted]:bg-[#CFB16D] data-[state=checked]:bg-[#CFB16D]/15 data-[state=checked]:text-gray-900"
              >
                Featured
              </SelectItem>
              <SelectItem
                value="rating"
                className="px-3 py-2 text-sm text-gray-700 rounded-md data-[highlighted]:bg-[#CFB16D] data-[state=checked]:bg-[#CFB16D]/15 data-[state=checked]:text-gray-900"
              >
                Highest rated
              </SelectItem>
              <SelectItem
                value="students"
                className="px-3 py-2 text-sm text-gray-700 rounded-md data-[highlighted]:bg-[#CFB16D] data-[state=checked]:bg-[#CFB16D]/15 data-[state=checked]:text-gray-900"
              >
                Most students
              </SelectItem>
              <SelectItem
                value="updated"
                className="px-3 py-2 text-sm text-gray-700 rounded-md data-[highlighted]:bg-[#CFB16D] data-[state=checked]:bg-[#CFB16D]/15 data-[state=checked]:text-gray-900"
              >
                Recently updated
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2 pl-1">
            <Switch
              id="hide-completed-all"
              checked={hideCompleted}
              onCheckedChange={setHideCompleted}
              className="data-[state=checked]:bg-gray-800"
            />
            <Label htmlFor="hide-completed-all" className="text-sm">
              Hide completed
            </Label>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {pageItems.map((c) => (
          <CourseCard
            key={c.slug}
            image={c.image}
            tag={c.tag}
            rating={c.rating}
            reviews={c.reviews}
            title={c.title}
            subtitle={c.subtitle}
            duration={c.duration}
            progress={c.progress}
            status={c.status}
            onStartOver={() => handleStartOver(c.title)}
            onContinue={() => handleContinue(c.slug)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-2">
        <CoursePagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </section>
  );
}
