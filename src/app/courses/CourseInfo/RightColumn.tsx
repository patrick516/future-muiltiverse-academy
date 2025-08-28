import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { CourseContent } from "../courseContent";

// helper: sum lesson durations → "4.4 min"
function toMinutesLabel(durations: string[]): string {
  const totalMins = durations.reduce((sum, s) => {
    const parts = s.split(":").map((n) => Number(n));
    if (parts.length === 2 && !parts.some(Number.isNaN)) {
      const [m, sec] = parts;
      return sum + m + sec / 60;
    }
    const n = Number(String(s).replace(/[^\d.]/g, ""));
    return sum + (Number.isFinite(n) ? n : 0);
  }, 0);
  return `${(Math.round(totalMins * 10) / 10).toFixed(1)} min`;
}

type Props = { course: CourseContent };

export default function RightColumn({ course }: Props) {
  // Build sections (chapters) from the course
  const sections = useMemo(
    () =>
      course.curriculum.map((sec) => ({
        title: sec.title,
        total: sec.items.length,
        duration: toMinutesLabel(sec.items.map((it) => it.duration)),
        items: sec.items.map((it, i) => ({
          title: `${i + 1}. ${it.title}`,
          // display like "4.8 min"
          time: (() => {
            const [m, s] = it.duration.split(":").map((n) => Number(n));
            if (!Number.isNaN(m) && !Number.isNaN(s)) {
              const v = Math.round((m + s / 60) * 10) / 10;
              return `${v} min`;
            }
            return it.duration;
          })(),
          completed: !!it.completed,
        })),
      })),
    [course]
  );

  // One open section at a time — default to the first (chapter 1)
  const [openSection, setOpenSection] = useState<string | null>(
    sections[0]?.title ?? null
  );

  // Checkbox state per section
  const [checks, setChecks] = useState<boolean[][]>(
    sections.map((sec) => sec.items.map((it) => it.completed ?? false))
  );

  const toggleCheck = (secIdx: number, itemIdx: number) => {
    setChecks((prev) =>
      prev.map((row, i) =>
        i !== secIdx ? row : row.map((v, j) => (j === itemIdx ? !v : v))
      )
    );
  };

  return (
    // ⬇️ keep your exact Tailwind & structure
    <div className="w-full md:max-w-[320px] lg:max-w-[360px] mx-auto flex flex-col gap-[1px]">
      {sections.map((section, i) => {
        const isOpen = openSection === section.title;
        const completedCount = checks[i]?.filter(Boolean).length ?? 0;

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
              onClick={() => setOpenSection(isOpen ? null : section.title)}
              className="w-full text-left bg-[#CFB16D] px-4 py-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-700 text-md">
                    {section.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-700">
                    {completedCount} / {section.total} | {section.duration}
                  </p>
                </div>
                <div className="pt-1">
                  {isOpen ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </div>
              </div>
            </button>

            {/* Lessons for the OPEN chapter only (with checkboxes) */}
            {isOpen && (
              <div className="bg-white divide-y ">
                {section.items.map((lesson, idx) => (
                  <label
                    key={idx}
                    className="flex items-start gap-2 px-4 py-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={!!checks[i]?.[idx]}
                      onChange={() => toggleCheck(i, idx)}
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
