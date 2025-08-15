import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-6 pb-2 mt-4 space-y-2 text-center">
      <div className="w-full p-1 text-left">
        <h2 className="text-lg font-bold text-gray-700">Academy</h2>
        <p className="mb-3 text-sm text-gray-500 text-muted-foreground">
          Future Trends Catalyst - Academy
        </p>
      </div>

      <div className="grid place-items-center w-12 h-12 rounded-md bg-[#CFB16D] overflow-hidden">
        <img
          src="/images/enter_experience.svg"
          alt="Sub Account Avatar"
          className="block w-10 h-10 object-contain translate-x-[1px] translate-y-[1px]"
        />
      </div>

      <p className="text-sm font-medium">Sub-Account XYZ</p>

      {/* Search Input with Icon */}
      <div className="relative w-full px-2 pt-2 pb-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Search className="w-4 h-4 mr-2 text-gray-500 text-muted-foreground" />
          <span className="text-sm text-gray-500">Search Academy</span>
        </div>
        <Input
          type="search"
          placeholder=""
          className="w-full h-8 py-1 text-sm text-center"
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
