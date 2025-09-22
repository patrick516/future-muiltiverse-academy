import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SidebarHeaderProps {
  value: string;
  onChange: (v: string) => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center px-6 pt-6 pb-3 space-y-2 text-center bg-white">
      <div className="w-full ml-2 text-left ">
        <h2 className="text-lg font-bold text-gray-700">Academy</h2>
        <p className="mb-2 text-sm text-gray-500">
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
      <div className="relative w-full px-2 pt-2 pb-1">
        <Search className="absolute w-4 h-4 mt-1 ml-10 text-gray-500 -translate-y-1/2 pointer-events-none top-1/2" />
        <Input
          type="search"
          placeholder="Search Academy"
          className="w-full h-8 py-1 pl-8 text-sm text-center
                    [&::-webkit-search-cancel-button]:filter
                    [&::-webkit-search-cancel-button]:invert
                    [&::-webkit-search-cancel-button]:sepia
                    [&::-webkit-search-cancel-button]:saturate-[10000%]
                    [&::-webkit-search-cancel-button]:hue-rotate-[800deg]
                    [&::-webkit-search-cancel-button]:cursor-pointer"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
