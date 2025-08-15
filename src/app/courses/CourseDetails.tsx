import { useState } from "react";
import courseImage from "@/assets/images/Image.png";
import { Play, Share2, Bookmark, BookmarkCheck } from "lucide-react";
import LeftColumn from "./CourseInfo/LeftColumn";
import RightColumn from "./CourseInfo/RightColumn";
import toast from "react-hot-toast";

const CourseDetail = () => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="p-4 space-y-6 ">
      <div className="p-6 space-y-6 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-500">
              FMV Sales Agent / Agency
            </h2>
            <p className="text-gray-400 text-md">Prof. Dr. Stefan Betzike</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 text-xs font-medium text-white bg-[#CFB16D] rounded-full">
              FMV Sales Agent / Agency
            </div>

            <button
              onClick={async () => {
                try {
                  const response = await fetch(courseImage);
                  const blob = await response.blob();
                  const file = new File([blob], "course-thumbnail.png", {
                    type: blob.type,
                  });

                  if (
                    navigator.canShare &&
                    navigator.canShare({ files: [file] })
                  ) {
                    await navigator.share({
                      title: "FMV Sales Agent / Agency",
                      text: "Check out this course on FMV Academy!",
                      files: [file],
                    });
                    console.log(
                      "canShare:",
                      navigator.canShare?.({ files: [file] })
                    );
                  } else {
                    toast.error("Sharing not supported on this device.");
                  }
                } catch (error) {
                  console.error("Sharing failed:", error);
                  toast.success("Failed to share. Please try manually.");
                }
              }}
              className="text-gray-600 transition hover:text-black"
              title="Share"
            >
              <Share2 size={18} />
            </button>

            {/* Bookmark Toggle */}
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className="text-gray-600 transition hover:text-black"
              title="Bookmark"
            >
              {bookmarked ? (
                <BookmarkCheck size={18} />
              ) : (
                <Bookmark size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="relative p-1 overflow-hidden ">
          <img
            src={courseImage}
            alt="Course Video"
            className="object-cover w-full rounded-lg h-96"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
              <Play className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Course Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 p-4 border rounded-md">
          {/* LEFT COLUMN */}
          <div className="min-w-0">
            <LeftColumn />
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
