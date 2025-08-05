import { MoreHorizontal, ChevronRight } from "lucide-react";

const TodaysCourseCard = () => {
  return (
    <div className="w-full p-5 bg-white shadow-sm xl:p-5 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Today’s Course
          </h2>
          <p className="text-sm text-gray-500">4 lessons, 3 hours 45 minutes</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1 bg-[#CFB16D] rounded-full" />
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Body: Progress + Content */}
      <div className="grid grid-cols-[3.5rem_1fr] gap-4 items-start">
        {/* Circular progress */}
        <div className="relative w-14 h-14">
          <svg className="transform -rotate-90" viewBox="0 0 36 36">
            <circle
              className="text-gray-200"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
            <circle
              className="text-[#CFB16D]"
              strokeWidth="3"
              strokeDasharray="100"
              strokeDashoffset="28"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-700"></div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-800">Ruby on Rails</h3>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 mt-1 text-sm text-gray-600 gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-4 h-4 bg-gray-100 rounded-md">
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </span>
              3 Topics
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-4 h-4 bg-gray-100 rounded-md">
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </span>
              50 mins
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-4 h-4 bg-gray-100 rounded-md">
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </span>
              1 Speaker
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-4 h-4 bg-gray-100 rounded-md">
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </span>
              72 students
            </div>
          </div>
        </div>
      </div>

      {/* Buttons aligned to left */}
      <div className="flex gap-3 mt-6">
        <button className="px-4 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700">
          Skip This
        </button>
        <button className="px-4 py-1.5 rounded-md text-sm bg-[#CFB16D] text-white">
          Continue
        </button>
      </div>
    </div>
  );
};

export default TodaysCourseCard;
