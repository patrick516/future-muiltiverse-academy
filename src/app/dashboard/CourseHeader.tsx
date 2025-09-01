import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { coursePages } from "@/app/courses/courseContent";

type Props = {
  hideCompleted: boolean;
  onToggleHideCompleted: (checked: boolean) => void;
  selectedCourseSlug: string; // "all" or a course slug
  onChangeCourse: (slug: string) => void;
};

const CourseHeader = ({
  hideCompleted,
  onToggleHideCompleted,
  selectedCourseSlug,
  onChangeCourse,
}: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <div>
        <h2 className="text-xl font-bold text-gray-700">My Courses</h2>
        <p className="text-sm text-gray-500 text-muted-foreground">
          Total {coursePages.length} course(s) available
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Available courses dropdown */}
        <Select value={selectedCourseSlug} onValueChange={onChangeCourse}>
          <SelectTrigger className="w-[220px] h-8 text-sm bg-white border border-[#EBDDBF] shadow-sm focus:ring-2 focus:ring-[#CFB16D]">
            <SelectValue placeholder="All Courses" />
          </SelectTrigger>
          <SelectContent className="z-50 bg-white border border-[#EBDDBF] rounded-lg p-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <SelectItem
              value="all"
              className="px-3 py-2 text-sm text-gray-700 rounded-md
             data-[highlighted]:bg-[#CFB16D]/10
             data-[state=checked]:bg-[#CFB16D]/15 data-[state=checked]:text-gray-900
             cursor-pointer"
            >
              All Courses
            </SelectItem>
            {coursePages.map((c) => (
              <SelectItem
                key={c.slug}
                value={c.slug}
                className="px-3 py-2 text-sm text-gray-700 rounded-md
               data-[highlighted]:bg-[#CFB16D]
               data-[state=checked]:bg-[#CFB16D]/15 data-[state=checked]:text-gray-900
               cursor-pointer"
              >
                {c.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Hide completed toggle */}
        <div className="flex items-center gap-2">
          <Switch
            id="hide-completed"
            className="data-[state=checked]:bg-gray-800"
            checked={hideCompleted}
            onCheckedChange={onToggleHideCompleted}
          />
          <Label htmlFor="hide-completed" className="text-sm">
            Hide completed
          </Label>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
