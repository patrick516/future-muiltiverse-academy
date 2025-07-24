import CourseCard from "./CourseCard";
import person1 from "@/assets/images/person1.png";
import person2 from "@/assets/images/person2.png";
import person3 from "@/assets/images/person3.png";
import person4 from "@/assets/images/person4.png";

const courses = [
  {
    image: person1,
    tag: "UI/UX",
    rating: 4.4,
    reviews: "1.23k",
    title: "Sales Agent / Agency",
    subtitle: "Sales Agent / Agency Course",
    duration: "30 minutes",
    progress: 70,
    status: "continue",
  },
  {
    image: person2,
    tag: "UI/UX",
    rating: 4.2,
    reviews: "424",
    title: "Sales Manager",
    subtitle: "Sales Manager Course",
    duration: "16 minutes",
    progress: 60,
    status: "continue",
  },
  {
    image: person3,
    tag: "UI/UX",
    rating: 3.8,
    reviews: "634",
    title: "Key Account Manager",
    subtitle: "Key Account Manager Course",
    duration: "30 minutes",
    progress: 45,
    status: "start-over",
  },
  {
    image: person4,
    tag: "UI/UX",
    rating: 4.7,
    reviews: "34",
    title: "Key Account Director",
    subtitle: "Key Account Director Course",
    duration: "30 minutes",
    progress: 100,
    status: "completed",
  },
];

const CourseGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
      {courses.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
};

export default CourseGrid;
