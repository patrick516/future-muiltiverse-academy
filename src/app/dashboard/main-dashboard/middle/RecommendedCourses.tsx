import { ArrowRight } from "lucide-react";

const recommended = [
  { label: "UI/UX Design", courses: "40+ Courses", badge: "M" },
  { label: "QA Analysis", courses: "18 Courses", badge: "Q" },
  { label: "Web Development", courses: "120+ Courses", badge: "W" },
  { label: "Marketing", courses: "50+ Courses", badge: "M" },
  { label: "Philosophy", courses: "24+ Courses", badge: "P" },
  { label: "Mathematics", courses: "230+ Courses", badge: "M" },
];

const RecommendedCourses = () => {
  return (
    <div className="w-full p-6 bg-white shadow-sm rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Recommended for you
          </h2>
          <p className="text-sm text-gray-500">8k social visitors</p>
        </div>
        <button className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-md">
          All Courses
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {recommended.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#CFB16D] rounded-md flex items-center justify-center text-white font-semibold text-sm">
                  {item.badge}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500">{item.courses}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-600 bg-gray-200 rounded-sm" />
            </div>
            {index < recommended.length - 1 && (
              <div className="mt-4 border-b border-gray-300 border-dotted"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
