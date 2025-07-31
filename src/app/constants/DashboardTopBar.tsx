import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Funnel } from "lucide-react";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-4 mt-4 bg-white rounded-lg">
      {/* Centered Search Input */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-md">
          <div className="relative">
            <span className="absolute -translate-y-1/2 left-3 top-1/2 text-muted-foreground">
              <Search className="w-4 h-4" />
            </span>
            <Input
              type="text"
              placeholder="Search GuideBook / Ask GraceAI"
              className="pl-10 text-sm border h-10 border-[#CFB16D] rounded-md"
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
  );
};

export default DashboardTopBar;
