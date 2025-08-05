import { Link } from "react-router-dom";

const BottomPagination = () => {
  return (
    <div className="flex flex-col justify-between gap-4 mt-10 md:flex-row">
      {/* Previous */}
      <Link
        to="/graceai"
        className="flex items-center w-full px-6 py-4 transition bg-white border shadow-sm md:w-1/2 rounded-xl hover:bg-gray-50"
      >
        <span className="mr-3 text-lg text-gray-400">←</span>
        <div className="flex flex-col ml-auto text-right">
          <span className="text-xs text-muted-foreground">Previous</span>
          <span className="font-semibold text-gray-900 text-md">GraceAI</span>
        </div>
      </Link>

      {/* Next */}
      <Link
        to="/academy/news"
        className="flex justify-between w-full md:w-1/2 border rounded-xl px-6 py-4 shadow-sm bg-[#FAFAFA] transition hover:bg-gray-50"
      >
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Next</span>
          <span className="text-md font-semibold text-[#CFB16D]">
            Official News & Updates
          </span>
        </div>
        <span className="text-lg text-[#CFB16D] ml-3">→</span>
      </Link>
    </div>
  );
};

export default BottomPagination;
