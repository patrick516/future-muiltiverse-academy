import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import type { MenuItem } from "./Sidebar.types";

interface SidebarItemProps {
  item: MenuItem;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, collapsed }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <div className="">
      {/* Main Item */}
      <div className="flex items-center  justify-between px-2.5 py-1 rounded hover:bg-gray-600/20 transition-all">
        <Link to={item.path} className="flex items-center gap-2.5">
          <img src={item.icon} alt={`${item.label} icon`} className="w-5 h-5" />
          {!collapsed && (
            <span className="text-sm font-medium text-black">{item.label}</span>
          )}
        </Link>

        {!collapsed && hasChildren && (
          <button
            onClick={handleToggle}
            className="ml-1 text-gray-400 hover:text-white"
          >
            {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
      </div>

      {/* Submenu */}
      {!collapsed && hasChildren && open && (
        <div className="ml-6 space-y-[2px]">
          {item.children!.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className="block px-2.5 py-1 text-sm text-gray-400 rounded hover:text-white hover:bg-gray-600/30 transition"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
