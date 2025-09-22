import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Funnel } from "lucide-react";

const DashboardTopBar = () => {
  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur">
      <div
        className="
          mt-4 bg-white rounded-lg
          flex flex-nowrap items-center justify-between
          gap-1 px-2 py-3
          md:gap-4 md:pl-4 md:pr-0 md:py-4
        "
      >
        {/* Centered Search Input */}
        <div className="flex justify-center flex-1 min-w-0">
          <div
            className="
              min-w-0
              w-[200px] sm:w-[240px] md:w-[300px]
            "
          >
            <div className="relative">
              {/* Input first (as the peer) */}
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

              {/* Centered overlay: icon + text */}
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
            className="
              shrink-0
              h-9 px-2 md:px-3
              text-xs md:text-sm
              bg-white border-none hover:bg-[#CFB16D]
              inline-flex items-center gap-1
            "
          >
            <Funnel className="w-4 h-4 text-gray-400" />
            <span className="whitespace-nowrap">Filter</span>
          </Button>

          <Button
            size="sm"
            className="
              shrink-0
              h-9 px-3
              text-xs md:text-sm
              font-semibold text-white
              bg-[#CFB16D] hover:bg-[#CFB16D]
              whitespace-nowrap
            "
          >
            VIP Area
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
