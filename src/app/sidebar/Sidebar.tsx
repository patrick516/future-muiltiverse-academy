// src/app/sidebar/Sidebar.tsx
import React, { useMemo } from "react";
import { menuItems as baseMenu } from "./menuConfig";
import SidebarItem from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";
import type { MenuItem } from "./Sidebar.types";
import { allCourses } from "@/app/dashboard/data/courses";
import { slugify } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const startedChildren: MenuItem[] = useMemo(() => {
    const started = allCourses.filter(
      (c) => c.status !== "completed" && (c.progress ?? 0) < 100
    );

    return started.map((c) => ({
      label: c.title,
      path: `/courses/${slugify(c.title)}`, // <-- slug route
    }));
  }, []);

  const menuItems = useMemo<MenuItem[]>(
    () =>
      baseMenu.map((item) =>
        item.label === "My Courses"
          ? { ...item, children: startedChildren }
          : item
      ),
    [startedChildren]
  );

  return (
    <div className="flex flex-col text-black transition-all duration-300 bg-white w-72">
      <SidebarHeader />
      <nav className="flex flex-col gap-2 p-5 px-2 pl-5 mt-1">
        {menuItems.map((item) => (
          <SidebarItem key={item.label} item={item} collapsed={false} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
