import { Certificate, Clock, Star, CalendarDays } from "lucide-react";

const StatsCards = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
    <div className="flex items-center gap-4 p-5 bg-white rounded-lg shadow">
      <Certificate className="w-8 h-8 text-blue-600" />
      <div>
        <p className="text-sm text-gray-500">Certificates</p>
        <p className="text-lg font-bold">6</p>
      </div>
    </div>

    <div className="flex items-center gap-4 p-5 bg-white rounded-lg shadow">
      <Clock className="w-8 h-8 text-green-600" />
      <div>
        <p className="text-sm text-gray-500">Hours Learned</p>
        <p className="text-lg font-bold">822h</p>
      </div>
    </div>

    <div className="flex items-center gap-4 p-5 bg-white rounded-lg shadow">
      <Star className="w-8 h-8 text-yellow-500" />
      <div>
        <p className="text-sm text-gray-500">Average Score</p>
        <p className="text-lg font-bold">4.7</p>
      </div>
    </div>

    <div className="flex items-center gap-4 p-5 bg-white rounded-lg shadow">
      <CalendarDays className="w-8 h-8 text-purple-600" />
      <div>
        <p className="text-sm text-gray-500">Courses</p>
        <p className="text-lg font-bold">37</p>
      </div>
    </div>
  </div>
);

export default StatsCards;
