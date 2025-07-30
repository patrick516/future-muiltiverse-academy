import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CourseHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 ">
      {/* Left Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-700">My Courses</h2>
        <p className="text-sm text-gray-500 text-muted-foreground">
          Total 6 course you have started
        </p>
      </div>

      {/* Right Filters */}
      <div className="flex items-center gap-4">
        {/* Dropdown */}
        <Select>
          <SelectTrigger className="w-[150px] h-8 text-sm ">
            <SelectValue placeholder="All Courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="uiux">UI/UX</SelectItem>
            <SelectItem value="webdev">Web Development</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>

        {/* Toggle */}
        <div className="flex items-center gap-2 ">
          <Switch
            id="hide-completed"
            className="data-[state=checked]:bg-black"
          />
          <Label htmlFor="hide-completed" className="text-sm ">
            Hide completed
          </Label>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
