const lessons = [
  {
    name: "Laravel",
    type: "PHP Framework",
    progress: 65,
    color: "#CFB16D",
    icon: "/images/laravel.svg",
  },
  {
    name: "Vue 3",
    type: "JS Framework",
    progress: 87,
    color: "#CFB16D",
    icon: "/images/vue.svg",
  },
  {
    name: "Bootstrap 5",
    type: "CSS Framework",
    progress: 44,
    color: "#CFB16D",
    icon: "/images/bootstrap.svg",
  },
  {
    name: "Angular 13",
    type: "JS Framework",
    progress: 70,
    color: "#CFB16D",
    icon: "/images/angular.svg",
  },
  {
    name: "Spring",
    type: "Java Framework",
    progress: 56,
    color: "#CFB16D",
    icon: "/images/spring.svg",
  },
  {
    name: "Django",
    type: "PHP Framework",
    progress: 82,
    color: "#CFB16D",
    icon: "/images/django.svg",
  },
];

const ActiveLessons = () => {
  return (
    <div className="w-full p-6 bg-white shadow-sm rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Active Lessons
          </h2>
          <p className="text-sm text-gray-500">Avg. 72% completed lessons</p>
        </div>
        <button className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-md">
          All Lessons
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {lessons.map((lesson, index) => (
          <div key={index}>
            <div className="flex items-center justify-between gap-3">
              {/* Icon + Info */}
              <div className="flex items-center w-1/2 gap-3">
                <img
                  src={lesson.icon}
                  alt={lesson.name}
                  className="object-contain w-6 h-6"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {lesson.name}
                  </p>
                  <p className="text-xs text-gray-500">{lesson.type}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="flex items-center flex-1 gap-2">
                <div className="w-full h-2 overflow-hidden bg-gray-100 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${lesson.progress}%`,
                      backgroundColor: lesson.color,
                    }}
                  />
                </div>
                <span className="w-10 text-sm text-right text-gray-600">
                  {lesson.progress}%
                </span>
              </div>
            </div>
            {index < lessons.length - 1 && (
              <div className="flex justify-end mt-4">
                <div className="w-3/4 border-b border-gray-300 border-dotted"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveLessons;
