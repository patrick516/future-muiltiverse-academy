import { Play, Gift } from "lucide-react";
import { videoItems } from "@/app/dashboard/data/videoItems";

const TodaySpecial = () => {
  return (
    <div className="flex flex-col gap-6 p-6 mt-10 border border-[#f1d288] shadow-xl rounded-xl md:flex-row">
      {/* Left Column - Icon and Text */}
      <div className="flex flex-col items-center justify-center flex-1 text-center md:items-center md:text-left">
        <div
          className="w-12 h-12 mb-4 bg-gray-100 rounded-md"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Gift
            className="w-6 h-6 text-gray-600"
            style={{ display: "block", margin: "auto" }}
          />
        </div>

        <h3 className="mb-2 text-2xl font-semibold text-gray-500">
          Today’s Special
        </h3>

        {/* Description */}
        <p className="max-w-sm mb-4 leading-relaxed text-gray-600 text-md">
          We offer 284 Free Online courses from top tutors and companies to help
          you start or advance your career skills. Learn online for free and
          fast today!
        </p>

        <button className="px-4 py-2 text-sm font-medium text-white transition bg-gray-900 rounded-md hover:bg-black">
          Get Premium Courses
        </button>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
        {videoItems.map((item) => (
          <div
            key={item.title}
            className="p-2 overflow-hidden bg-white border rounded-lg shadow-sm"
          >
            <div className="relative ">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-40 rounded-md "
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full">
                  <Play className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="font-semibold text-gray-700 text-md">
                {item.title}
              </h4>
              <p className="text-gray-600 text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySpecial;
