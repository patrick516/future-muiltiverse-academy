import type { LucideIcon, LucideProps } from "lucide-react";
import type { ComponentType } from "react";

// props that BookGlyph accepts
export type BookGlyphProps = {
  size?: number;
  className?: string;
};

export type MenuItem = {
  label: string;
  path?: string;
  icon?: string | LucideIcon | ComponentType<LucideProps | BookGlyphProps>;
  type?: "section";
  children?: MenuItem[];
};
