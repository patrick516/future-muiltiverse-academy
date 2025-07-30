import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock, ArrowRight } from "lucide-react";
import { Check, RotateCcw } from "lucide-react";

export interface CourseCardProps {
  image: string;
  tag: string;
  rating: number;
  reviews: string;
  title: string;
  subtitle: string;
  duration: string;
  progress: number;
  status: "continue" | "start-over" | "completed";
  onStartOver?: () => void;
  onContinue?: () => void;
}

// const getStatusLabel = (status: CourseCardProps["status"]) => {
//   switch (status) {
//     case "completed":
//       return "Completed";
//     case "continue":
//       return "Continue";
//     case "start-over":
//       return "Start Over";
//     default:
//       return "";
//   }
// };

const CourseCard = ({
  image,
  tag,
  rating,
  reviews,
  title,
  subtitle,
  duration,
  progress,
  status,
  onStartOver,
  onContinue,
}: CourseCardProps) => {
  return (
    <Card className="p-1 bg-white border shadow-sm 00 rounded-xl">
      {/* Image inside a rounded container */}
      <div className="overflow-hidden rounded-lg">
        <img src={image} alt={title} className="object-cover w-full h-50" />
      </div>

      {/* Content below the image */}
      <div className="p-6 pt-4 pb-4 space-y-3">
        {/* Tag + Rating */}
        <div className="flex items-center justify-between text-xs">
          <span className="px-2 py-0.5  bg-[#f8b6d4] rounded-xl text-red-500 font-bold frounded-full">
            {tag}
          </span>
          <div className="flex items-center gap-1 font-semibold text-gray-500 ">
            <span>{rating.toFixed(1)}</span>
            <Star size={14} fill="currentColor" className="text-[#ffb400]" />
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>

        {/* Title + Subtitle */}
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>

          {status === "completed" && (
            <p className="flex items-center gap-1 pt-1 text-sm font-bold text-green-600">
              <Check size={16} /> Completed
            </p>
          )}
        </div>

        {/* Duration + Progress */}
        {/* Duration + Progress */}
        {status !== "completed" && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
        )}

        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${
              status === "completed" ? "bg-black" : "bg-black"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Buttons */}
        {status === "completed" ? (
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onStartOver}
              className="w-full flex border border-gray-500 items-center justify-center gap-2 px-6 py-2 text-sm font-medium rounded-md hover:bg-[#CFB16D]"
            >
              <RotateCcw size={16} /> Start Over
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between pt-2">
            <Button
              variant="outline"
              size="sm"
              className="px-6 py-2 border border-gray-500 text-sm font-medium rounded-sm hover:bg-[#CFB16D]"
              onClick={onStartOver}
            >
              <RotateCcw size={16} />
              Start Over
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center border-gray-500 gap-1 px-6 py-2 text-sm font-medium rounded-sm hover:bg-[#CFB16D] border"
              onClick={onContinue}
            >
              Continue <ArrowRight size={14} />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CourseCard;
