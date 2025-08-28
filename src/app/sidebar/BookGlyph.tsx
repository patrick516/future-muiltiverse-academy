import { BookOpenText } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  size?: number; // icon size (14 for children, 16 for parent)
  className?: string; // optional extra classes for the wrapper
};

export default function BookGlyph({ size = 16, className }: Props) {
  // Wrapper is slightly larger than the icon for padding
  const wrapper = size + 8;

  return (
    <span
      aria-hidden="true"
      className={cn(
        // book body (no left spine anymore)
        "relative inline-flex items-center justify-center rounded-[4px] bg-white border border-gray-300 shadow-sm",
        // dog-ear (folded page corner)
        "after:content-[''] after:absolute after:right-0 after:top-0 after:border-t-[6px] after:border-r-[6px] after:border-t-gray-300 after:border-r-transparent",
        className
      )}
      style={{ width: wrapper, height: wrapper }}
    >
      <BookOpenText size={size} strokeWidth={2.25} className="text-[#CFB16D]" />
    </span>
  );
}
