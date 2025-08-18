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
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="max-w-3xl text-2xl font-bold md:text-3xl lg:text-4xl">
          Education, talents, and career opportunities.{" "}
          <span className="text-[#CFB16D]">All in one place.</span>
        </h1>

        <p className="max-w-xl mt-3 text-sm md:text-base">
          Grow your skill with the most reliable online courses and
          certifications in marketing.
        </p>

        <div className="relative mt-6 w-[200px] md:w-[250px]">
          <div className="absolute inset-y-0 flex items-center pointer-events-none left-3">
            <Search className="w-5 h-5 ml-6 text-gray-400" />
          </div>

          <input
            type="text"
            placeholder="Search Courses"
            className="w-full h-8 md:h-8 pl-10 pr-3 rounded-md shadow-md text-center text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#CFB16D]"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardImage;
