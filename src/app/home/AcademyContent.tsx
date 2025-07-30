import { Link } from "react-router-dom";
import fvmAgency from "@/assets/images/fvm-agency.png";
import fvmLeaders from "@/assets/images/fvm-leaders.png";
import fvmManage from "@/assets/images/fvm-manage.png";

const fmvCourses = [
  {
    title: "FMV Sales Agent / Agency",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Enter & Experience →",
    image: fvmAgency,
  },
  {
    title: "FMV Sales Leader",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Explore →",
    image: fvmLeaders,
  },
  {
    title: "FMV Sales Manager",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Explore →",
    image: fvmManage,
  },
];

const academySections = [
  {
    title: "Info Material Package",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Learn More →",
    image: fvmAgency,
  },
  {
    title: "Official News & Updates",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Learn More →",
    image: fvmLeaders,
  },
  {
    title: "Tutorials",
    description: "Metronic theme covers only the frontend part issues.",
    cta: "Learn More →",
    image: fvmManage,
  },
];

const AcademyContent = () => {
  return (
    <div className="mt-10 space-y-10">
      {/* FMV Courses */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">FMV Courses</h3>
          <div className="flex gap-3 text-sm text-gray-400">
            <span className="text-[#CFB16D] font-medium">Trending</span>
            <span>Featured</span>
            <span className="cursor-pointer hover:underline">View All</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {fmvCourses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden bg-white border rounded-md shadow-sm"
            >
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-40"
              />
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-gray-900">{course.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {course.description}
                </p>
                <p className="text-sm font-medium text-[#CFB16D]">
                  {course.cta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academy Sections */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">Academy Sections</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {academySections.map((section) => (
            <div
              key={section.title}
              className="overflow-hidden bg-white border rounded-md shadow-sm"
            >
              <img
                src={section.image}
                alt={section.title}
                className="object-cover w-full h-40"
              />
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-gray-900">{section.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
                <p className="text-sm font-medium text-[#CFB16D]">
                  {section.cta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Footer */}

      <div className="flex flex-col justify-between gap-4 mt-10 md:flex-row">
        {/* Previous */}
        <Link
          to="/graceai"
          className="flex items-center w-full px-6 py-4 transition bg-white border shadow-sm md:w-1/2 rounded-xl hover:bg-gray-50"
        >
          <span className="mr-3 text-lg text-gray-400">←</span>
          <div className="flex flex-col ml-auto text-right">
            <span className="text-xs text-muted-foreground">Previous</span>
            <span className="text-sm font-medium text-gray-900">GraceAI</span>
          </div>
        </Link>

        {/* Next */}
        <Link
          to="/academy/news"
          className="flex justify-between w-full md:w-1/2 border rounded-xl px-6 py-4 shadow-sm bg-[#FAFAFA] transition hover:bg-gray-50"
        >
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Next</span>
            <span className="text-sm font-medium text-[#CFB16D]">
              Official News & Updates
            </span>
          </div>
          <span className="text-lg text-[#CFB16D] ml-3">→</span>
        </Link>
      </div>
    </div>
  );
};

export default AcademyContent;
