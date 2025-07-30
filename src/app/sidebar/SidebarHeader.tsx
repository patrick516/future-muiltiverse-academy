import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className="flex flex-col items-center p-5 mt-4 space-y-2 text-center">
      <div className="w-full p-1 text-left">
        <h2 className="text-lg font-bold">Academy</h2>
        <p className="mb-8 text-xs text-gray-500 text-muted-foreground">
          Future Trends Catalyst - Academy
        </p>
      </div>

      <div className="relative flex items-center justify-center w-12 h-12 ">
        <div className="absolute inset-0 bg-[#CFB16D] rounded-md z-0" />
        <img
          src="/images/enter_experience.svg"
          alt="Sub Account Avatar"
          className="relative z-10 object-cover w-10 h-10 rounded-sm"
        />
      </div>

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
