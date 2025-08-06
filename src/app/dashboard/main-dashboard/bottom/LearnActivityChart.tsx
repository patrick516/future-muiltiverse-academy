import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

const data = [
  { day: "QA Analysis", hours: 54 },
  { day: "Marketing", hours: 42 },
  { day: "Web Dev", hours: 75 },
  { day: "Math", hours: 110 },
  { day: "Front-end Dev", hours: 23 },
  { day: "Physics", hours: 87 },
  { day: "Psylosophy", hours: 50 },
];

const LearnActivityChart = () => {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2023-01-04")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2023-02-02"));

  const handleDateChange = (dates: [Date | null, Date | null] | null) => {
    if (!dates) return;
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Learn Activity
          </h2>
          <p className="text-sm text-gray-500">Hours per course</p>
        </div>

        {/* Clean, visible date range filter */}
        <div className="relative z-40">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="d MMM yyyy"
            popperPlacement="bottom-end"
            calendarClassName="!text-xs !scale-75"
            customInput={
              <button className="flex items-center px-1 py-1 text-xs text-gray-700 bg-gray-100 rounded-md">
                {startDate && endDate ? (
                  <>
                    {format(startDate, "d MMM yyyy")} –{" "}
                    {format(endDate, "d MMM yyyy")}
                  </>
                ) : (
                  "Select date range"
                )}
                <CalendarDays className="w-4 h-4 ml-2 text-gray-400" />
              </button>
            }
          />
        </div>
      </div>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={24}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E5E7EB"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              tickFormatter={(value) => `${value}H`}
              axisLine={false}
              tickLine={false}
              width={36}
            />

            <Tooltip
              contentStyle={{ fontSize: "12px" }}
              labelStyle={{ color: "#4B5563", fontWeight: 500 }}
              cursor={{ fill: "transparent" }}
            />

            <Bar dataKey="hours" fill="#CFB16D" radius={[6, 6, 0, 0]}>
              <LabelList
                dataKey="hours"
                position="top"
                fill="#1F2937"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LearnActivityChart;
