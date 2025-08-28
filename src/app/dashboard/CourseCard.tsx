import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Star,
  Clock,
  ArrowRight,
  Check,
  RotateCcw,
  BookOpen,
} from "lucide-react";

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

const clampPercent = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

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
  const pct = clampPercent(progress ?? 0);
  const isCompleted = status === "completed" || pct >= 100;
  const isInProgress =
    status === "continue" || (!isCompleted && pct > 0 && pct < 100);

  return (
    <Card className="bg-white border border-gray-300 shadow-sm rounded-xl">
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img src={image} alt={title} className="object-cover w-full h-50" />
      </div>

      {/* Content */}
      <div className="p-6 pt-4 pb-4 space-y-3">
        {/* Tag + Rating */}
        <div className="flex items-center justify-between text-xs">
          <span className="px-2 py-0.5 bg-[#f8b6d4] rounded-full text-red-500 font-bold">
            {tag}
          </span>
          <div className="flex items-center gap-1 font-semibold text-gray-500">
            <span>{rating.toFixed(1)}</span>
            <Star size={14} fill="currentColor" className="text-[#ffb400]" />
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>

        {/* Title + Subtitle (+ dynamic in-progress icon) */}
        <div>
          <div className="flex items-center gap-2">
            {isInProgress && (
              <BookOpen
                className="w-4 h-4 text-gray-800"
                aria-hidden="true"
                strokeWidth={2}
              />
            )}
            <h3 className="text-sm font-semibold">{title}</h3>
          </div>

          <p className="text-xs text-muted-foreground">{subtitle}</p>

          {isCompleted && (
            <p className="flex items-center gap-1 pt-1 text-sm font-bold text-green-600">
              <Check size={16} aria-hidden="true" /> Completed
            </p>
          )}
        </div>

        {/* Duration (hide when completed) */}
        {!isCompleted && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock size={14} aria-hidden="true" />
            <span>{duration}</span>
          </div>
        )}

        {/* Progress */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all bg-black"
            style={{ width: `${pct}%` }}
            aria-label={`Progress ${pct}%`}
          />
        </div>

        {/* Actions */}
        {isCompleted ? (
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onStartOver}
              className="w-full flex border border-gray-500 items-center justify-center gap-2 px-6 py-2 text-sm font-medium rounded-md hover:bg-[#CFB16D]"
            >
              <RotateCcw size={16} aria-hidden="true" /> Start Over
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
              <RotateCcw size={16} aria-hidden="true" />
              Start Over
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 px-6 py-2 text-sm font-medium rounded-sm hover:bg-[#CFB16D] border border-gray-500"
              onClick={onContinue}
            >
              Continue <ArrowRight size={14} aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CourseCard;
