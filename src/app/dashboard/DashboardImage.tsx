import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import fvmAgency from "@/assets/images/fvm-agency.png";

const DashboardImage = () => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[360px] lg:h-[420px] rounded-md overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${fvmAgency})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="max-w-3xl text-2xl font-bold md:text-3xl lg:text-4xl">
          Education, talents, and career opportunities.{" "}
          <span className="text-[#CFB16D]">All in one place.</span>
        </h1>

        <p className="max-w-xl mt-3 text-sm md:text-base">
          Grow your skill with the most reliable online courses and
          certifications in marketing.
        </p>
        <Button className="mt-6 bg-white text-gray-600 hover:bg-gray-200 w-[300px] h-8 md:w-[400px] md:h-10 flex items-center justify-center gap-3 rounded-lg shadow-md">
          <Search className="w-5 h-5" />
          <span className="text-base font-medium">Search Courses</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardImage;
