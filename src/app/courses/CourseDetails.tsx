import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Share2, Bookmark, BookmarkCheck } from "lucide-react";
import toast from "react-hot-toast";

import LeftColumn from "./CourseInfo/LeftColumn";
import RightColumn from "./CourseInfo/RightColumn";
import { coursePages, type CourseContent } from "./courseContent";

const DEFAULT_SLUG = "sales-agent-agency";

const CourseDetail = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [bookmarked, setBookmarked] = useState(false);

  const course: CourseContent = useMemo(() => {
    const bySlug = coursePages.find((c) => c.slug === slug);
    const fallback = coursePages.find((c) => c.slug === DEFAULT_SLUG);
    return bySlug ?? fallback ?? coursePages[0];
  }, [slug]);

  const onShare = async () => {
    try {
      const res = await fetch(course.heroImage);
      const blob = await res.blob();
      const file = new File([blob], "course-thumbnail.png", {
        type: blob.type,
      });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: course.title,
          text: "Check out this course on FMV Academy!",
          files: [file],
        });
      } else {
        toast.error("Sharing not supported on this device.");
      }
    } catch (e) {
      console.error(e);
      toast.success("Failed to share. Please try manually.");
    }
  };

  return (
    <div className="p-4 space-y-6 ">
      <div className="p-6 space-y-6 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-500">{course.title}</h2>
            <p className="text-gray-400 text-md">{course.author}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 text-xs font-medium text-white bg-[#CFB16D] rounded-full">
              {course.title}
            </div>

            <button
              onClick={onShare}
              className="text-gray-600 transition hover:text-black"
              title="Share"
            >
              <Share2 size={18} />
            </button>

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

        {/* Media */}
        <div className="relative p-1 overflow-hidden">
          {course.videoUrl?.endsWith(".mp4") ? (
            <video controls className="object-cover w-full rounded-lg h-96">
              <source src={course.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <img
              src={course.heroImage}
              alt={course.title}
              className="object-cover w-full rounded-lg h-96"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full opacity-90">
              <Play className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Content grid: LEFT main + RIGHT gold outline */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6">
          {/* LEFT */}
          <LeftColumn course={course} />

          {/* RIGHT */}
          <div className="space-y-4">
            <RightColumn course={course} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
