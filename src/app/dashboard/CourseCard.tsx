import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock, ArrowRight } from "lucide-react";

interface CourseCardProps {
  image: string;
  tag: string;
  rating: number;
  reviews: string;
  title: string;
  subtitle: string;
  duration: string;
  progress: number;
  status: "continue" | "start-over" | "completed";
}

const getStatusLabel = (status: CourseCardProps["status"]) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "continue":
      return "Continue";
    case "start-over":
      return "Start Over";
    default:
      return "";
  }
};

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
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
      {/* Top Image */}
      <div>
        <img src={image} alt={title} className="object-cover w-full h-40" />
      </div>

      {/* Inner bordered content section */}
      <div className="p-4 space-y-3 border-t border-gray-200">
        {/* Tag + Rating */}
        <div className="flex items-center justify-between text-xs">
          <span className="px-2 py-0.5 bg-pink-100 text-pink-600 rounded-full font-medium">
            {tag}
          </span>
          <div className="flex items-center gap-1 font-semibold text-yellow-500">
            <span>{rating.toFixed(1)}</span>
            <Star size={14} fill="currentColor" />
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>

        {/* Title + Subtitle */}
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>

        {/* Duration + Progress */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="text-xs">
            Start Over
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-xs"
          >
            Continue <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
