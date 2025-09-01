import { Search } from "lucide-react";
import fvmAgency from "@/assets/images/fvm-agency.png";

const DashboardImage = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[360px] lg:h-[420px] rounded-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${fvmAgency})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      {/* Center the block; left-align inside */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* This is the ONE container that sets the left edge for all children */}
        <div className=" w-[90vh] px-6 text-left">
          <h1 className="text-2xl font-bold leading-snug text-white md:text-3xl lg:text-4xl">
            Education, talents, and career opportunities.{" "}
            <span className="text-[#CFB16D]">All in one place.</span>
          </h1>

          <div className="flex justify-center pl-2">
            <p className="mt-3 text-white/90 text-sm md:text-base max-w-[40rem] text-center">
              Grow your skill with the most reliable online courses and
              certifications in marketing.
            </p>
          </div>

          {/* Search shares same container width, so left edges match */}
          <form className="w-[80vh] mt-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 pointer-events-none left-4 top-1/2" />
              <input
                type="text"
                placeholder="Search Courses"
                className="w-full h-10 rounded-md bg-white/95 pl-11 pr-4 text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-[#CFB16D]"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DashboardImage;
