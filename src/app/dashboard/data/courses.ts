import type { CourseCardProps } from "../CourseCard";
import person1 from "@/assets/images/person1.png";
import person2 from "@/assets/images/person2.png";
import person3 from "@/assets/images/person3.png";
import person4 from "@/assets/images/person4.png";
import person5 from "@/assets/images/person1.png";
import person6 from "@/assets/images/person2.png";

export const allCourses: CourseCardProps[] = [
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
  {
    image: person5,
    tag: "UI/UX",
    rating: 4.5,
    reviews: "1.1k",
    title: "Creative Sales Rep",
    subtitle: "Creative Sales Course",
    duration: "20 minutes",
    progress: 50,
    status: "continue",
  },
  {
    image: person6,
    tag: "UI/UX",
    rating: 4.0,
    reviews: "912",
    title: "Strategic Partner",
    subtitle: "Partnership & Sales Strategy",
    duration: "25 minutes",
    progress: 25,
    status: "continue",
  },
];
