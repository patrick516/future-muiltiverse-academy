// src/app/dashboard/MiddlePart.tsx
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import blueAvatar from "@/assets/images/certificate-logo.png";
import pinkAvatar from "@/assets/images/courses.png";

const MiddlePart = () => {
  const navigate = useNavigate();

  // View all available courses (currently hardcoded list; later from API)
  const onViewCourses = () => {
    navigate("/courses/all");
  };

  // Placeholder for Programs – will be replaced with real API soon
  const onViewPrograms = async () => {
    // TODO: replace with real API call
    // await api.get("/api/programs?status=active");
    toast.loading("Opening Programs…", { id: "programs" });
    navigate("/programs"); // temporary route until the Programs page/API exists
    toast.dismiss("programs");
    toast.success("Programs (placeholder)");
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Earn a Certificate */}
        <div className="flex items-center justify-between rounded-xl border border-[#EBDDBF] bg-[#ECEBF6] p-5 shadow-sm">
          <div className="flex w-[24ch] flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-800">
                Earn a Certificate
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                Get the right professional certificate program for you.
              </p>
            </div>

            <button
              onClick={onViewPrograms}
              className="mt-6 h-10 w-fit rounded-md bg-[#1A1A2E] px-4 text-sm font-medium text-white shadow-sm hover:opacity-95"
              aria-label="View Programs"
              title="View Programs"
            >
              View Programs
            </button>
          </div>

          <img
            src={blueAvatar}
            alt="certificate"
            className="self-start object-contain -mt-2 h-36 w-36"
          />
        </div>

        {/* Best Rated Courses */}
        <div className="flex items-center justify-between rounded-xl border border-[#EBDDBF] bg-[#FFF1F1] p-5 shadow-sm">
          <div className="flex w-[24ch] flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-800">
                Best Rated Courses
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                Enroll now in the most popular and best rated courses.
              </p>
            </div>

            <button
              onClick={onViewCourses}
              className="mt-6 h-10 w-fit rounded-md bg-[#CFB16D] px-4 text-sm font-medium text-white shadow-sm hover:opacity-95"
              aria-label="View Courses"
              title="View Courses"
            >
              View Courses
            </button>
          </div>

          <img
            src={pinkAvatar}
            alt="courses"
            className="self-start object-contain -mt-2 h-36 w-36"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
