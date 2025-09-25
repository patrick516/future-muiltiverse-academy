import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BottomPagination = () => {
  return (
    <div className="flex flex-col justify-between gap-4 mt-10 md:flex-row">
      <Link
        to="/graceai"
        className="flex justify-between w-full px-6 py-4 transition bg-white border shadow-sm md:w-1/2 rounded-xl hover:bg-gray-50"
      >
        <span className="mr-3 text-lg text-gray-400">←</span>
        <div className="flex flex-col text-right">
          <span className="text-xs text-muted-foreground">Previous</span>
          <span className="font-semibold text-gray-900 text-md">GraceAI</span>
        </div>
      </Link>

      {/* Next */}
      <Link
        to="/academy/news"
        className="flex justify-between w-full md:w-1/2 px-6 py-4 bg-[#FAFAFA] border rounded-xl shadow-sm transition hover:bg-gray-50"
      >
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Next</span>
          <span className="text-md font-semibold text-[#CFB16D]">
            Official News & Updates
          </span>
        </div>
        <span className="text-sm text-[#CFB16D] ml-3">
          <ArrowRight className="w-4 h-4 text-sm" />
        </span>
      </Link>
    </div>
  );
};

export default BottomPagination;
