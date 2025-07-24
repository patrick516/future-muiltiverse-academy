import CourseHeader from "./CourseHeader";
import CourseGrid from "./CourseGrid";

const CourseSection = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md shadow-xl">
      <CourseHeader />
      <CourseGrid />
    </div>
  );
};

export default CourseSection;
