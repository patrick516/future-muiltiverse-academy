import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className="flex flex-col items-center p-4 mt-4 space-y-2 text-center">
      <div className="w-full p-1 text-left">
        <h2 className="text-lg font-bold">Academy</h2>
        <p className="mb-10 text-xs text-gray-500 text-muted-foreground">
          Future Trends Catalyst - Academy
        </p>
      </div>

      <img
        src="/images/enter_experience.svg"
        alt="Sub Account Avatar"
        className="object-cover w-12 h-12 rounded-full"
      />

      <p className="text-sm font-medium">Sub-Account XYZ</p>

      {/* Search Input with Icon */}
      <div className="relative w-full pl-5">
        <Search className="absolute w-4 h-4 ml-5 text-gray-500 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search Academy"
          className="w-full h-6 py-1 pl-10 text-sm"
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
