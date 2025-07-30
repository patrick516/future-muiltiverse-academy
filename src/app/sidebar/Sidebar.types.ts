import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  label: string;
  path?: string;
  icon?: LucideIcon | string;
  type?: "section";
  children?: MenuItem[];
}
