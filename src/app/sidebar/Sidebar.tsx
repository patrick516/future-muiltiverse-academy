import React, { useMemo, useState } from "react";
import { menuItems as baseMenu } from "./menuConfig";
import SidebarItem from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";
import type { MenuItem } from "./Sidebar.types";
import { allCourses } from "@/app/dashboard/data/courses";
import { slugify } from "@/lib/utils";
import BookGlyph from "./BookGlyph";

const Sidebar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const startedChildren: MenuItem[] = useMemo(() => {
    const started = allCourses.filter(
      (c) => c.status !== "completed" && (c.progress ?? 0) < 100
    );

    return started.map((c) => ({
      label: c.title,
      path: `/courses/${slugify(c.title)}`,
      icon: BookGlyph,
    }));
  }, []);

  // Combine base menu and started children
  const combinedMenu = useMemo<MenuItem[]>(
    () =>
      baseMenu.map((item) =>
        item.label === "My Courses"
          ? { ...item, children: startedChildren }
          : item
      ),
    [startedChildren]
  );

  // Filter menu items based on search
  const filteredMenu = useMemo<MenuItem[]>(() => {
    if (!searchTerm.trim()) return combinedMenu;

    const filterItems = (items: MenuItem[]): MenuItem[] => {
      return items
        .map((item) => {
          let filteredChildren: MenuItem[] | undefined;
          if (item.children) {
            filteredChildren = filterItems(item.children);
          }

          if (
            item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (filteredChildren && filteredChildren.length)
          ) {
            return { ...item, children: filteredChildren };
          }

          return null;
        })
        .filter(Boolean) as MenuItem[];
    };

    return filterItems(combinedMenu);
  }, [searchTerm, combinedMenu]);

  return (
    <div className="flex flex-col h-screen text-black transition-all duration-300 bg-white w-72">
      {/* Pinned header */}
      <div className="sticky top-0 z-20 bg-white">
        <SidebarHeader value={searchTerm} onChange={setSearchTerm} />
      </div>

      {/* Scrollable menu items with hidden scrollbar */}
      <nav className="flex-1 px-2 pt-2 pb-6 overflow-y-auto hide-scrollbar">
        <ul className="flex flex-col gap-2">
          {filteredMenu.map((item) => (
            <SidebarItem key={item.label} item={item} collapsed={false} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
