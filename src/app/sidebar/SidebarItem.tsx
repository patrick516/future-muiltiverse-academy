import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import type { MenuItem } from "./Sidebar.types";

interface SidebarItemProps {
  item: MenuItem;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, collapsed }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = currentPath === item.path;
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  // SECTION HEADERS
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
              className="flex items-center gap-2 px-4 py-1.5 text-sm text-gray-700 hover:text-black rounded-sm hover:bg-[#CFB16D] transition"
            >
              {child.icon &&
                (typeof child.icon === "string" ? (
                  <img src={child.icon} alt={child.label} className="w-4 h-4" />
                ) : (
                  React.createElement(child.icon, {
                    className: "w-4 h-4 text-[#CFB16D]",
                  })
                ))}
              <span>{child.label}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-0.5">
      {/* Main nav item */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-sm transition group">
        <Link to={item.path!} className="flex items-center gap-2">
          {item.icon && (
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-md transition 
                ${isActive ? "bg-[#CFB16D]" : "bg-gray-100"} 
                group-hover:bg-[#CFB16D]`}
            >
              {typeof item.icon === "string" ? (
                <img
                  src={item.icon}
                  alt={item.label}
                  className={item.label === "GraceAI" ? "w-8 h-8" : "w-4 h-4"}
                />
              ) : (
                React.createElement(item.icon, {
                  className: `w-4 h-4 ${
                    item.label === "Tutorial Videos"
                      ? "text-red-600"
                      : isActive
                      ? "text-white"
                      : "text-[#CFB16D]"
                  } group-hover:text-white`,
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

        {/* Expand/Collapse toggle */}
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
        <div className="ml-2 space-y-[2px]">
          {item.children!.map((child) => {
            const isChildRoute = currentPath === child.path;

            return (
              <Link
                key={child.path}
                to={child.path!}
                className={`flex items-center gap-2 px-2.5 py-1 text-sm rounded-md transition ${
                  isChildRoute
                    ? "bg-gray-200 text-black"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
              >
                {child.icon &&
                  (typeof child.icon === "string" ? (
                    <img
                      src={child.icon}
                      alt={child.label}
                      className="w-4 h-4"
                    />
                  ) : (
                    React.createElement(child.icon, {
                      className: "w-4 h-4 text-[#CFB16D]",
                    })
                  ))}
                <span>{child.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
