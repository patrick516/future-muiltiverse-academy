import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const lessons = [
  { title: "1. Welcome to this course", time: "2.4 min" },
  { title: "2. Watch before you start", time: "4.8 min" },
  { title: "3. Basic design theory", time: "5.9 min" },
  { title: "4. Basic fundamentals", time: "3.6 min" },
  { title: "5. What is ui/ux", time: "10.6 min" },
];

const sections = [
  {
    title: "Course Content",
    total: 5,
    duration: "4.4 min",
    isCollapsible: true,
  },
  {
    title: "Web Design for Developers",
    total: 4,
    duration: "4.4 min",
  },
  {
    title: "Build Beautiful Websites!",
    total: 6,
    duration: "4.4 min",
  },
  {
    title: "Build Beautiful Websites!",
    total: 6,
    duration: "4.4 min",
  },
  {
    title: "Final Project",
    total: 3,
    duration: "4.4 min",
  },
];

export default function RightColumn() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(lessons.length).fill(false)
  );
  const [openSection, setOpenSection] = useState<string | null>(
    "Course Content"
  );

  const toggleCheck = (i: number) => {
    setChecked((prev) => {
      const updated = [...prev];
      updated[i] = !updated[i];
      return updated;
    });
  };

  return (
    <div className="w-full md:max-w-[320px] lg:max-w-[360px] mx-auto flex flex-col gap-[1px]">
      {sections.map((section, i) => {
        const isOpen = openSection === section.title;

        return (
          <div
            key={i}
            className={`border border-[#CFB16D] overflow-hidden ${
              i === 0
                ? "rounded-t-md"
                : i === sections.length - 1
                ? "rounded-b-md"
                : "rounded-none"
            }`}
          >
            {/* Section Header */}
            <button
              onClick={() =>
                section.isCollapsible
                  ? setOpenSection(isOpen ? null : section.title)
                  : null
              }
              className="w-full text-left bg-[#CFB16D] px-4 py-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-700 text-md">
                    {section.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-700">
                    {checked.filter(Boolean).length} / {section.total} |{" "}
                    {section.duration}
                  </p>
                </div>
                <div className="pt-1">
                  {section.isCollapsible ? (
                    isOpen ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </div>
              </div>
            </button>

            {/* Lesson Items - only for open collapsible section */}
            {section.isCollapsible && isOpen && (
              <div className="bg-white divide-y ">
                {lessons.map((lesson, idx) => (
                  <label
                    key={idx}
                    className="flex items-start gap-2 px-4 py-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checked[idx]}
                      onChange={() => toggleCheck(idx)}
                      className="mt-1 w-4 h-4 accent-[#27231a] rounded-lg "
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {lesson.title}
                      </span>
                      <span className="text-xs text-gray-500">
                        {lesson.time}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
