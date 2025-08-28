import CourseHeader from "./CourseHeader";
import CourseGrid from "./CourseGrid";

type Props = {
  hideCompleted: boolean;
  onToggleHideCompleted: (checked: boolean) => void;
  selectedCourseSlug: string; // "all" or a slug
  onChangeCourse: (slug: string) => void;
};

const CourseSection = ({
  hideCompleted,
  onToggleHideCompleted,
  selectedCourseSlug,
  onChangeCourse,
}: Props) => {
  return (
    <div>
      <CourseHeader
        hideCompleted={hideCompleted}
        onToggleHideCompleted={onToggleHideCompleted}
        selectedCourseSlug={selectedCourseSlug}
        onChangeCourse={onChangeCourse}
      />
      <CourseGrid
        hideCompleted={hideCompleted}
        selectedCourseSlug={selectedCourseSlug}
      />
    </div>
  );
};

export default CourseSection;
