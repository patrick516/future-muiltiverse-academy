import { GraduationCap, FlaskConical, Clock, Trophy } from "lucide-react";

interface SummaryStats {
  certificates: number;
  courses: number;
  hoursLearned: number;
  averageScore: number;
}

interface Props {
  data: SummaryStats;
}

const DashboardSummaryCard = ({ data }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-gray-200 w-full max-w-[460px]">
      {/* Top: gold with background image */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center text-white h-72 rounded-xl"
        style={{
          backgroundColor: "#CFB16D",
          backgroundImage: "url('/images/Top.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "0.75rem",
          borderTopRightRadius: "0.75rem",
        }}
      >
        <h2 className="text-xl font-semibold">My Academy Dashboard</h2>
        <p className="mt-1 text-sm font-semibold">
          You have 4 tasks to complete
        </p>
      </div>

      {/* Inner floating grid */}
      <div className="relative z-20 grid grid-cols-2 gap-4 px-4 py-7 -mt-14">
        <div className="flex flex-col p-4 bg-white rounded-lg shadow w-full max-w-[200px] mx-auto items-center text-center">
          <GraduationCap
            className="w-4 h-4 mb-1"
            style={{ color: "#CFB16D" }}
          />

          <p className="text-2xl font-bold text-gray-800">
            {data.certificates}
          </p>
          <span className="text-sm text-gray-500">Certificates</span>
        </div>

        <div className="flex flex-col p-4 bg-white rounded-lg shadow w-full max-w-[200px] mx-auto items-center text-center">
          <FlaskConical className="w-4 h-4 mb-1" style={{ color: "#CFB16D" }} />

          <p className="text-2xl font-bold text-gray-800">{data.courses}</p>
          <span className="text-sm text-gray-500">Courses</span>
        </div>

        <div className="flex flex-col p-4 bg-white rounded-lg shadow w-full max-w-[200px] mx-auto items-center text-center">
          <Clock className="w-4 h-4 mb-1" style={{ color: "#CFB16D" }} />

          <p className="text-2xl font-bold text-gray-800">
            {data.hoursLearned}
          </p>
          <span className="text-sm text-gray-500">Hours Learned</span>
        </div>

        <div className="flex flex-col p-4 bg-white rounded-lg shadow w-full max-w-[200px] mx-auto items-center text-center">
          <Trophy className="w-4 h-4 mb-1" style={{ color: "#CFB16D" }} />

          <p className="text-2xl font-bold text-gray-800">
            {data.averageScore}
          </p>
          <span className="text-sm text-gray-500">Avg. Score</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummaryCard;
