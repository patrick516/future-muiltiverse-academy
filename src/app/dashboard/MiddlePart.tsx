import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import blueAvatar from "@/assets/images/certificate-logo.png";
import pinkAvatar from "@/assets/images/courses.png";

const MiddlePart = () => {
  const navigate = useNavigate();

  const onViewCourses = () => navigate("/courses/all");
  const onViewPrograms = async () => {
    toast.loading("Opening Programs…", { id: "programs" });
    navigate("/programs");
    toast.dismiss("programs");
    toast.success("Programs will be displayed here soon!", { id: "programs" });
  };

  return (
    <div className="w-full">
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {/* Card 1 */}
        <section className="w-full overflow-hidden rounded-xl border border-[#EBDDBF] bg-[#ECEBF6] p-4 sm:p-5 shadow-sm">
          <div className="flex min-w-0 flex-col gap-4 lg:flex-row">
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-gray-800">
                Earn a Certificate
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                Get the right professional certificate program for you.
              </p>
              <button
                onClick={onViewPrograms}
                className="mt-6 h-10 w-full sm:w-auto rounded-md bg-[#1A1A2E] px-4 text-sm font-medium text-white shadow-sm hover:opacity-95"
              >
                View Programs
              </button>
            </div>
            <img
              src={blueAvatar}
              alt="certificate"
              className="flex-shrink-0 max-w-full h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 object-contain"
            />
          </div>
        </section>

        {/* Card 2 */}
        <section className="w-full overflow-hidden rounded-xl border border-[#EBDDBF] bg-[#FFF1F1] p-4 sm:p-5 shadow-sm">
          <div className="flex min-w-0 flex-col gap-4 lg:flex-row">
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-gray-800">
                Best Rated Courses
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                Enroll now in the most popular and best rated courses.
              </p>
              <button
                onClick={onViewCourses}
                className="mt-6 h-10 w-full sm:w-auto rounded-md bg-[#CFB16D] px-4 text-sm font-medium text-white shadow-sm hover:opacity-95"
              >
                View Courses
              </button>
            </div>
            <img
              src={pinkAvatar}
              alt="courses"
              className="flex-shrink-0 max-w-full h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MiddlePart;
