import type { MenuItem } from "./Sidebar.types";

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    icon: "/images/home.svg",
    path: "/",
  },
  {
    label: "Dashboard",
    icon: "/images/dashboard.svg",
    path: "/dashboard",
    children: [
      {
        label: "Overview",
        icon: "/images/dashboard.svg",
        path: "/dashboard/overview",
      },
      {
        label: "Reports",
        icon: "/images/dashboard.svg",
        path: "/dashboard/reports",
      },
    ],
  },
  { label: "My Courses", icon: "/images/courses.svg", path: "/courses" },
  { label: "VIP Member Area", icon: "/images/vip.svg", path: "/vip" },
  {
    label: "Official News & Updates",
    icon: "/images/news.svg",
    path: "/news-and-updates",
  },
  {
    label: "Tutorial Videos",
    icon: "/images/tutorial.svg",
    path: "/tutorial-videos",
  },
];
