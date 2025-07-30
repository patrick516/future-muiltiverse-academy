"use client";
import { SkipBack, SkipForward, ChevronLeft, ChevronRight } from "lucide-react";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CoursePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: CoursePaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2 py-6">
      {/* First Page */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded-full bg-[#eee1be] text-xs flex items-center justify-center hover:opacity-90 disabled:opacity-50"
      >
        <SkipBack size={14} />
      </button>

      {/* Previous Page */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded-full bg-[#eee1be] text-xs flex items-center justify-center hover:opacity-90 disabled:opacity-50"
      >
        <ChevronLeft size={14} />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center ${
            currentPage === page
              ? "bg-[#1c1c34] text-white"
              : "bg-[#eee1be] text-black"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Page */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded-full bg-[#eee1be] text-xs flex items-center justify-center hover:opacity-90 disabled:opacity-50"
      >
        <ChevronRight size={14} />
      </button>

      {/* Last Page */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded-full bg-[#eee1be] text-xs flex items-center justify-center hover:opacity-90 disabled:opacity-50"
      >
        <SkipForward size={14} />
      </button>
    </div>
  );
};

export default CoursePagination;
