import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Funnel } from "lucide-react";

const DashboardTopBar = () => {
  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur">
      <div className="flex items-center justify-between gap-4 py-4 pl-4 pr-0 mt-4 bg-white rounded-lg">
        {/* Centered Search Input */}
        <div className="flex justify-center w-full">
          <div className="w-[300px]">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Search className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-400">
                  Search GuideBook / Ask GraceAI
                </span>
              </div>
              <Input
                type="text"
                placeholder=""
                className="h-10 text-sm text-center border border-[#CFB16D] rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Filter + VIP Area */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="flex hover:bg-[#CFB16D] items-center gap-2 bg-white border-none"
          >
            <Funnel className="w-4 h-4 text-gray-400" />
            Filter
          </Button>

          <Button
            size="sm"
            className="font-semibold text-white bg-[#CFB16D] hover:bg-[#CFB16D]"
          >
            VIP Area
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
