import { MoreHorizontal, ChevronRight } from "lucide-react";

const TodaysEventCard = () => {
  return (
    <div className="w-full p-5 bg-white shadow-sm xl:p-5 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Today’s Events
          </h2>
          <p className="text-sm text-gray-500">24 events on all activities</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-1 bg-[#CFB16D] rounded-full" />
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Image + Content */}
      <div className="grid grid-cols-[3.5rem_1fr] gap-4 items-start">
        <img
          src="/images/Visual.png"
          alt="Event icon"
          className="object-cover bg-gray-100 rounded-full w-14 h-14"
        />

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-800">Creative Meeting</h3>

          {/* Meta Info (2x2 grid) */}
          <div className="grid grid-cols-2 mt-1 text-sm text-gray-600 gap-x-6 gap-y-3">
            {/* Row 1 */}
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

            {/* Row 2 */}
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-4 h-4 bg-gray-100 rounded-md">
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </span>
              1 Speaker
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-4 h-4 bg-gray-100 rounded-md ">
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </span>
              72 students
            </div>
          </div>
        </div>
      </div>

      {/* Buttons aligned with header */}
      <div className="flex gap-3 mt-6">
        <button className="px-4 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700">
          Details
        </button>
        <button className="px-4 py-1.5 rounded-md text-sm bg-[#CFB16D] text-white">
          Join Event
        </button>
      </div>
    </div>
  );
};

export default TodaysEventCard;
