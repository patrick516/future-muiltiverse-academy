const MainDashboardSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {/* Example mockup boxes for now */}
      <div className="p-4 bg-white rounded-lg shadow-sm">📜 6 Certificates</div>
      <div className="p-4 bg-white rounded-lg shadow-sm">📚 37 Courses</div>
      <div className="p-4 bg-white rounded-lg shadow-sm">
        ⏱ 822 Hours Learned
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm">⭐ 4.7 Avg Score</div>

      {/* You can later add: events, charts, active lessons etc. */}
    </div>
  );
};

export default MainDashboardSection;
