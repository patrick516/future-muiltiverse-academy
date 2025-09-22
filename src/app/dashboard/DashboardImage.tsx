// src/app/dashboard/DashboardImage.tsx
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
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        {/* Responsive container that prevents overflow */}
        <div className="w-full max-w-[90vh] lg:w-[90vh] text-center">
          <h1 className="text-xl sm:text-2xl font-bold leading-snug text-white md:text-3xl lg:text-4xl">
            Education, talents, and career opportunities.{" "}
            <span className="text-[#CFB16D]">All in one place.</span>
          </h1>

          <div className="flex justify-center">
            <p className="mt-3 text-white/90 text-sm md:text-base max-w-[40rem] text-center">
              Grow your skill with the most reliable online courses and
              certifications in marketing.
            </p>
          </div>

          {/* Centered responsive search form */}
          <div className="flex justify-center mt-6">
            <form
              className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[80vh] lg:w-[80vh]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                {/* Real input (blank placeholder so overlay is visible until focus/type) */}
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full h-10 sm:h-12 rounded-md bg-white/95 text-center pr-4 pl-4 text-gray-700 placeholder-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-[#CFB16D] text-sm sm:text-base"
                  aria-label="Search Courses"
                />

                {/* Visible placeholder overlay: ICON first, then text */}
                <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center
                             text-gray-500 text-sm sm:text-base transition-opacity duration-150
                             peer-focus:opacity-0 peer-[&:not(:placeholder-shown)]:opacity-0"
                >
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Search Courses</span>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardImage;
