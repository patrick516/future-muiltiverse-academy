import {
  Home,
  LayoutDashboard,
  BookOpen,
  ShieldCheck,
  Newspaper,
  MessageSquareMore,
  Youtube,
  BarChart,
  Blend,
} from "lucide-react";

import type { MenuItem } from "./Sidebar.types";

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    icon: Home,
    path: "/",
    children: [
      {
        label: "Overview",
        icon: BarChart,
        path: "/dashboard/overview",
      },
      {
        label: "Reports",
        icon: BarChart,
        path: "/dashboard/reports",
      },
    ],
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    children: [
      {
        label: "Overview",
        icon: Blend,
        path: "/dashboard/overview",
      },
      // {
      //   label: "Reports",
      //   icon: BarChart,
      //   path: "/dashboard/reports",
      // },
    ],
  },
  {
    label: "My Courses",
    icon: BookOpen,
    path: "/courses",
    children: [
      {
        label: "Overview",
        icon: BarChart,
        path: "/courses/overview",
      },
      {
        label: "Reports",
        icon: BarChart,
        path: "/courses/reports",
      },
    ],
  },
  {
    label: "VIP Member Area",
    icon: ShieldCheck,
    path: "/vip",
    children: [
      {
        label: "Overview",
        icon: BarChart,
        path: "/vip/overview",
      },
      {
        label: "Reports",
        icon: BarChart,
        path: "/vip/reports",
      },
    ],
  },
  {
    label: "Official News & Updates",
    icon: Newspaper,
    path: "/news-and-updates",
    children: [
      {
        label: "Overview",
        icon: BarChart,
        path: "/news/overview",
      },
      {
        label: "Reports",
        icon: BarChart,
        path: "/news/reports",
      },
    ],
  },
  {
    label: "Tutorial Videos",
    icon: Youtube,
    path: "/tutorial-videos",
    children: [
      {
        label: "Overview",
        icon: BarChart,
        path: "/tutorials/overview",
      },
      {
        label: "Reports",
        icon: BarChart,
        path: "/tutorials/reports",
      },
    ],
  },

  {
    label: "GraceAI",
    icon: "/images/grace.svg",
    path: "/graceai",
    children: [
      {
        label: "Add new chat",
        icon: MessageSquareMore,
        path: "/graceai/new",
      },
      {
        label: "Where do I find XYZ?",
        icon: MessageSquareMore,
        path: "/graceai/faq/1",
      },
      {
        label: "What is XYZ?",
        icon: MessageSquareMore,
        path: "/graceai/faq/2",
      },
      {
        label: "How does XYZ work?",
        icon: MessageSquareMore,
        path: "/graceai/faq/3",
      },
      {
        label: "Please tell me XYZ!",
        icon: MessageSquareMore,
        path: "/graceai/faq/4",
      },
    ],
  },

  {
    label: "Welcome",
    type: "section",
    children: [
      { label: "Welcome & Overview", path: "/academy/welcome" },
      { label: "Official News & Updates", path: "/academy/news" },
      { label: "FAQ / Q&A", path: "/academy/faq" },
      { label: "Mission & Movement", path: "/academy/mission" },
      { label: "Launch", path: "/academy/launch" },
      { label: "FMRA", path: "/academy/fmra" },
    ],
  },

  {
    label: "Future Multiverse & EXPO Ecosystem",
    type: "section",
    children: [
      {
        label: "Future Multiverse Overview",
        path: "/academy/ecosystem/overview",
      },
      { label: "Info Material Package", path: "/academy/ecosystem/info" },
    ],
  },

  {
    label: "Resources & Knowledge",
    type: "section",
    children: [
      { label: "Tutorials", path: "/resources/tutorials" },
      { label: "General Information", path: "/resources/general-info" },
      { label: "Market Research & Trends", path: "/resources/market-research" },
      { label: "Compliance & Regulations", path: "/resources/compliance" },
    ],
  },
];
