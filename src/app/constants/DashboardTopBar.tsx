import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Funnel } from "lucide-react";

/**
 * Assumptions:
 * - Your left sidebar is 16rem (Tailwind w-64) on ≥lg screens.
 *   If yours is different, tweak `lg:left-64` below.
 */
const DashboardTopBar = () => {
  return (
    <>
      {/* FIXED header (stays on screen while scrolling) */}
      <div
        className="
          fixed top-0 z-30
          inset-x-0              /* full width on small screens */
          lg:left-64             /* leave room for sidebar on lg+ (assumes w-64) */
          bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80
         
          h-16 md:h-20
        "
      >
        <div className="flex items-center justify-between h-full gap-1 px-2 md:px-4">
          {/* Centered Search Input */}
          <div className="flex justify-center flex-1 min-w-0">
            <div className="min-w-0 w-[200px] sm:w-[240px] md:w-[300px]">
              <div className="relative">
                <Input
                  type="text"
                  placeholder=" "
                  aria-label="Search GuideBook or ask GraceAI"
                  className="
                    peer h-10 w-full text-center
                    text-xs sm:text-sm
                    border border-[#CFB16D] rounded-md
                  "
                />
                {/* Placeholder overlay */}
                <div
                  className="
                  pointer-events-none absolute inset-0
                  flex items-center justify-center
                  text-xs sm:text-sm text-gray-500
                  transition-opacity duration-150
                  peer-focus:opacity-0
                  peer-[&:not(:placeholder-shown)]:opacity-0
                "
                >
                  <span className="inline-flex items-center gap-1 sm:gap-2">
                    <Search className="w-4 h-4" />
                    <span className="whitespace-nowrap">
                      Search GuideBook / Ask GraceAI
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-3 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              className="shrink-0 h-9 px-2 md:px-3 text-xs md:text-sm bg-white border-none hover:bg-[#CFB16D] inline-flex items-center gap-1"
            >
              <Funnel className="w-4 h-4 text-gray-400" />
              <span className="whitespace-nowrap">Filter</span>
            </Button>

            <Button
              size="sm"
              className="shrink-0 h-9 px-3 text-xs md:text-sm font-semibold text-white bg-[#CFB16D] hover:bg-[#CFB16D] whitespace-nowrap"
            >
              VIP Area
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer to push content below the fixed bar */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
};

export default DashboardTopBar;
