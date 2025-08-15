// src/data/academy.ts
export type AcademyItem = {
  id: string; // stable id for URLs
  kind: "course" | "section"; // for badges or filtering
  title: string;
  description: string;
  cta: string;
  image: string;
};

import fvmAgency from "@/assets/images/fvm-agency.png";
import fvmLeaders from "@/assets/images/fvm-leaders.png";
import fvmManage from "@/assets/images/fvm-manage.png";

// FMV Courses
export const fmvCourses: AcademyItem[] = [
  {
    id: "fmv-sales-agent-agency",
    kind: "course",
    title: "FMV Sales Agent / Agency",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Enter & Experience →",
    image: fvmAgency,
  },
  {
    id: "fmv-sales-leader",
    kind: "course",
    title: "FMV Sales Leader",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Explore →",
    image: fvmLeaders,
  },
  {
    id: "fmv-sales-manager",
    kind: "course",
    title: "FMV Sales Manager",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Explore →",
    image: fvmManage,
  },
];

// Academy Sections
export const academySections: AcademyItem[] = [
  {
    id: "info-material-package",
    kind: "section",
    title: "Info Material Package",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Learn More →",
    image: fvmAgency,
  },
  {
    id: "official-news-updates",
    kind: "section",
    title: "Official News & Updates",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Learn More →",
    image: fvmLeaders,
  },
  {
    id: "tutorials",
    kind: "section",
    title: "Tutorials",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Learn More →",
    image: fvmManage,
  },
];

export const allAcademyItems = [...fmvCourses, ...academySections];
export const getAcademyItem = (id: string) =>
  allAcademyItems.find((x) => x.id === id) || null;
