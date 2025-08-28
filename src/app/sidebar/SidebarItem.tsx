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

  const hasChildren = !!item.children?.length;
  const isActive = currentPath === item.path;

  // Helper: does currentPath match any child (exact or deeper)?
  const childTreeMatches = (nodes?: MenuItem[]) =>
    nodes?.some((n) => {
      const p = n.path || "";
      if (!p) return false;
      return currentPath === p || currentPath.startsWith(p + "/");
    }) ?? false;

  // Only auto-open when:
  // - it has children, AND
  // - currentPath is inside this item's subtree (but NOT for "/")
  const initialOpen =
    hasChildren &&
    ((item.path &&
      item.path !== "/" &&
      (currentPath === item.path || currentPath.startsWith(item.path + "/"))) ||
      childTreeMatches(item.children));

  const [open, setOpen] = useState<boolean>(!!initialOpen);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  if (item.type === "section") {
    const SectionRow: React.FC<{ node: MenuItem }> = ({ node }) => {
      const rowHasChildren = !!node.children?.length;
      const isRowActive = node.path && currentPath === node.path;

      const rowInitialOpen =
        rowHasChildren &&
        ((node.path &&
          node.path !== "/" &&
          (currentPath === node.path ||
            currentPath.startsWith(node.path + "/"))) ||
          childTreeMatches(node.children));

      const [rowOpen, setRowOpen] = useState<boolean>(!!rowInitialOpen);

      const toggleRow = (e: React.MouseEvent) => {
        if (rowHasChildren) {
          e.preventDefault();
          setRowOpen((o) => !o);
        }
      };

      return (
        <div className="rounded-sm">
          <div className="flex items-center justify-between">
            {rowHasChildren ? (
              <button
                onClick={toggleRow}
                className="flex items-center gap-2 w-full px-4 py-1.5 text-sm text-gray-700 rounded-sm hover:text-[#CFB16D] transition text-left"
                aria-expanded={rowOpen}
              >
                {node.icon &&
                  (typeof node.icon === "string" ? (
                    <img src={node.icon} alt={node.label} className="w-4 h-4" />
                  ) : (
                    React.createElement(node.icon as React.ElementType, {
                      className: "w-4 h-4",
                      stroke: "#CFB16D",
                      color: "#CFB16D",
                      strokeWidth: 1.5,
                    })
                  ))}
                <span>{node.label}</span>
              </button>
            ) : (
              <Link
                to={node.path!}
                className={`flex items-center gap-2 px-4 py-1.5 text-sm rounded-sm transition ${
                  isRowActive
                    ? "text-[#CFB16D]"
                    : "text-gray-700 hover:text-[#CFB16D]"
                }`}
              >
                {node.icon &&
                  (typeof node.icon === "string" ? (
                    <img src={node.icon} alt={node.label} className="w-4 h-4" />
                  ) : (
                    React.createElement(node.icon as React.ElementType, {
                      className: `w-4 h-4 ${
                        isRowActive ? "text-[#CFB16D]" : ""
                      }`,
                      stroke: "#CFB16D",
                      color: "#CFB16D",
                      strokeWidth: 1.5,
                    })
                  ))}
                <span>{node.label}</span>
              </Link>
            )}

            <button
              onClick={rowHasChildren ? toggleRow : undefined}
              className="mr-2 text-gray-300  hover:text-[#CFB16D]"
              aria-label={
                rowHasChildren ? (rowOpen ? "Collapse" : "Expand") : "Navigate"
              }
              aria-hidden={!rowHasChildren}
            >
              {rowHasChildren && rowOpen ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
          </div>

          {!collapsed && rowHasChildren && rowOpen && (
            <div className="mt-1  ml-6 space-y-[2px]">
              {node.children!.map((leaf) => {
                const isLeafActive = leaf.path && currentPath === leaf.path;
                return (
                  <Link
                    key={leaf.path}
                    to={leaf.path!}
                    className={`flex items-center gap-2 px-3  py-1 text-sm rounded-md transition ${
                      isLeafActive
                        ? "text-[#CFB16D]"
                        : "text-gray-600 hover:text-[#CFB16D]"
                    }`}
                  >
                    {leaf.icon &&
                      (typeof leaf.icon === "string" ? (
                        <img
                          src={leaf.icon}
                          alt={leaf.label}
                          className="w-4 h-4"
                        />
                      ) : (
                        React.createElement(leaf.icon as React.ElementType, {
                          className: `w-4 h-4 ${
                            isLeafActive ? "text-[#CFB16D]" : "text-gray-600"
                          }`,
                        })
                      ))}
                    <span>{leaf.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    };

    return (
      <div className="mt-5">
        <div className="px-4 text-sm font-semibold tracking-tight text-gray-700">
          {item.label}
        </div>

        <div className="mt-2 space-y-1">
          {item.children?.map((child) => (
            <SectionRow key={`${child.label}-${child.path}`} node={child} />
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
                React.createElement(item.icon as React.ElementType, {
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
            className="ml-1 text-gray-400 hover:text-[#CFB16D]"
            aria-expanded={open}
          >
            {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
      </div>

      {/* Children items */}
      {!collapsed && hasChildren && open && (
        <div className="ml-5   space-y-[2px]">
          {item.children!.map((child) => {
            const isChildRoute = currentPath === child.path;

            return (
              <Link
                key={child.path}
                to={child.path!}
                className={`flex items-center gap-2 px-2.5 py-1 text-sm rounded-md transition ${
                  isChildRoute
                    ? "text-[#CFB16D]"
                    : "text-gray-600 hover:text-[#CFB16D]"
                }`}
              >
                {child.icon &&
                  (typeof child.icon === "string" ? (
                    <img
                      src={child.icon}
                      alt={child.label}
                      className={`w-4 h-4 ${
                        isChildRoute ? "filter brightness-0 saturate-100" : ""
                      }`}
                    />
                  ) : (
                    React.createElement(child.icon as React.ElementType, {
                      className: `w-4 h-4 ${
                        isChildRoute ? "text-[#CFB16D]" : "text-gray-600"
                      }`,
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
