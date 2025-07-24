import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const DashboardImage = () => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[360px] lg:h-[420px] rounded-md overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/screen 1.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="max-w-3xl text-2xl font-bold md:text-3xl lg:text-4xl">
          Education, talents, and career opportunities. All in one place.
        </h1>
        <p className="max-w-xl mt-3 text-sm md:text-base">
          Grow your skill with the most reliable online courses and
          certifications in marketing.
        </p>
        <Button className="px-6 py-2 mt-6 text-black bg-white hover:bg-gray-200">
          <Search /> Search Courses
        </Button>
      </div>
    </div>
  );
};

export default DashboardImage;
