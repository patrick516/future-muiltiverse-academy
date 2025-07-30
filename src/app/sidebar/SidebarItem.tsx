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
  const hasChildren = !!item.children?.length;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  // Render section headers like "Welcome", "Resources & Knowledge"
  if (item.type === "section") {
    return (
      <div className="mt-5">
        <div className="px-4 text-sm font-semibold tracking-tight text-gray-700">
          {item.label}
        </div>
        <div className="mt-2 space-y-1">
          {item.children?.map((child) => (
            <Link
              key={child.path}
              to={child.path!}
              className="flex items-center justify-between px-4 py-1.5 text-sm text-gray-700 hover:text-black rounded-sm hover:bg-[#CFB16D] transition"
            >
              <span>{child.label}</span>
              <span className="text-xs text-gray-400">›</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-0.5">
      {/* Main nav item */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-[#CFB16D] transition-all">
        <Link to={item.path!} className="flex items-center gap-2">
          {item.icon && (
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md">
              {typeof item.icon === "string" ? (
                <img
                  src={item.icon}
                  alt={item.label}
                  className={item.label === "GraceAI" ? "w-8 h-8" : "w-4 h-4"}
                />
              ) : (
                React.createElement(item.icon, {
                  className: "w-4 h-4 text-gray-700",
                })
              )}
            </div>
          )}

          {!collapsed && (
            <span className="text-sm font-semibold text-gray-700">
              {item.label}
            </span>
          )}
        </Link>

        {/* Expand/Collapse button */}
        {!collapsed && hasChildren && (
          <button
            onClick={handleToggle}
            className="ml-1 text-gray-400 hover:text-[#181C32]"
          >
            {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
      </div>

      {/* Children items */}
      {!collapsed && hasChildren && open && (
        <div className="ml-6 space-y-[2px]">
          {item.children!.map((child) => (
            <Link
              key={child.path}
              to={child.path!}
              className="flex items-center justify-between px-2.5 py-1 text-sm text-gray-600 hover:text-black hover:bg-gray-100 transition"
            >
              <span>{child.label}</span>
              <span className="text-xs text-gray-400">›</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
