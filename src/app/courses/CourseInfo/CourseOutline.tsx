import React from "react";
import type { CourseContent, CurriculumSection, CurriculumItem } from "../courseContent";

type CourseOutlineProps = {
  course: CourseContent;
};

const CourseOutline: React.FC<CourseOutlineProps> = ({ course }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>

      {course.curriculum?.map((section: CurriculumSection, idx: number) => (
        <div key={idx} className="mb-4">
          <h3 className="font-semibold mb-2">{section.title}</h3>
          <ul className="list-disc ml-6 space-y-1">
            {section.items?.map((item: CurriculumItem, lIdx: number) => (
              <li key={lIdx} className="text-sm">
                {item.title}{" "}
                <span className="text-gray-500">({item.duration})</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseOutline;
