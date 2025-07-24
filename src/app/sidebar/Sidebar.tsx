import React from "react";
import { menuItems } from "./menuConfig";
import SidebarItem from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-64 h-screen text-black transition-all duration-300 bg-white">
      <SidebarHeader />

      <nav className="flex flex-col gap-2 px-2 mt-1">
        {menuItems.map((item) => (
          <SidebarItem key={item.label} item={item} collapsed={false} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
