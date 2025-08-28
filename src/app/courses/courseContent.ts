// src/app/courses/courseContent.ts
import cover1 from "@/assets/images/Image.png";
import cover2 from "@/assets/images/person2.png";
import cover3 from "@/assets/images/person3.png";
import cover4 from "@/assets/images/person4.png";

export type CurriculumItem = {
  title: string;
  duration: string;
  locked?: boolean;
  completed?: boolean;
};

export type CurriculumSection = {
  title: string;
  items: CurriculumItem[];
};

export type Speaker = {
  name: string;
  title: string;
  avatar?: string;
};

export type CourseContent = {
  title: string;
  slug: string;
  author: string;

  heroImage: string;
  videoUrl?: string;

  summary: string;
  description?: string;
  whatYouWillLearn: string[];
  requirements?: string[];

  level?: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  studentsCount?: number;
  lecturesCount?: number;
  totalVideo?: string;
  language?: string;
  curriculum: CurriculumSection[];
  rating?: number;
  reviews?: number;
  duration?: string;
  progress?: number;
  status?: "continue" | "start-over" | "completed";
  lastUpdated?: string;
  speaker?: Speaker;
};

export const coursePages: CourseContent[] = [
  {
    title: "Sales Agent / Agency",
    slug: "sales-agent-agency",
    author: "Prof. Dr. Stefan Betzike",
    heroImage: cover1,
    summary:
      "Become a professional sales agent/agency partner. Learn client acquisition, outreach, and funnel basics tailored to FMV programs.",
    description:
      "This course focuses on practical, repeatable methods for outreach, qualification and closing. You’ll build scripts, run daily KPIs and learn to diagnose pipeline gaps.",
    whatYouWillLearn: [
      "Qualify and convert leads for FMV offers",
      "Create outreach scripts & follow-ups",
      "Track KPIs and improve weekly conversion",
    ],
    requirements: [
      "No prior sales experience required",
      "Willingness to practice",
    ],
    level: "All Levels",
    studentsCount: 38815,
    lecturesCount: 19,
    totalVideo: "1.5h",
    language: "English",
    curriculum: [
      {
        title: "Course Content",
        items: [
          { title: "Welcome to this course", duration: "2:41" },
          { title: "Watch before you start", duration: "4:10" },
          { title: "Basic design theory", duration: "5:39" },
          { title: "Basic fundamentals", duration: "3:08" },
          { title: "What is UI/UX", duration: "10:26" },
        ],
      },
      {
        title: "Web Design for Developers",
        items: [
          { title: "Layout & spacing", duration: "6:11" },
          { title: "Color & contrast", duration: "7:55" },
        ],
      },
      {
        title: "Build Beautiful Websites!",
        items: [
          { title: "Hero sections", duration: "9:08" },
          { title: "Pricing sections", duration: "8:45" },
        ],
      },
      {
        title: "Final Project",
        items: [{ title: "Capstone brief", duration: "4:44" }],
      },
    ],
    rating: 4.6,
    reviews: 1230,
    duration: "3h 20m",
    progress: 70,
    status: "continue",
    lastUpdated: "Aug 2025",
    speaker: {
      name: "Stefan Betzike",
      title: "CNO, Head of PR, Future Multiverse",
    },
  },
  {
    title: "Sales Manager",
    slug: "sales-manager",
    author: "Prof. Dr. Stefan Betzike",
    heroImage: cover2,
    summary:
      "Manage teams, coach reps, and design a simple compensation plan aligned to outcome goals.",
    whatYouWillLearn: [
      "Weekly pipelines & forecasting",
      "Coaching via call reviews",
      "Compensation and incentives",
    ],
    level: "Intermediate",
    studentsCount: 12424,
    lecturesCount: 16,
    totalVideo: "2.4h",
    language: "English",
    curriculum: [
      {
        title: "Team Foundations",
        items: [
          { title: "Manager mindset", duration: "7:50" },
          { title: "Pipeline hygiene", duration: "10:12" },
        ],
      },
    ],
    rating: 4.4,
    reviews: 424,
    duration: "2h 40m",
    progress: 60,
    status: "continue",
    lastUpdated: "Aug 2025",
    speaker: {
      name: "Stefan Betzike",
      title: "CNO, Head of PR, Future Multiverse",
    },
  },
  {
    title: "Key Account Manager",
    slug: "key-account-manager",
    author: "Prof. Dr. Stefan Betzike",
    heroImage: cover3,
    summary:
      "Grow strategic customers through relationship maps, QBRs, and joint success plans.",
    whatYouWillLearn: [
      "Stakeholder & influence maps",
      "Quarterly Business Reviews",
      "Joint value roadmaps",
    ],
    level: "Intermediate",
    studentsCount: 10634,
    lecturesCount: 12,
    totalVideo: "3.0h",
    language: "English",
    curriculum: [
      {
        title: "Account Strategy",
        items: [
          { title: "Discovery for existing accounts", duration: "9:41" },
          { title: "Relationship mapping", duration: "8:59" },
        ],
      },
    ],
    rating: 4.1,
    reviews: 634,
    duration: "3h 05m",
    progress: 45,
    status: "start-over",
    lastUpdated: "Aug 2025",
    speaker: {
      name: "Stefan Betzike",
      title: "CNO, Head of PR, Future Multiverse",
    },
  },
  {
    title: "Creative Sales Rep",
    slug: "creative-sales-rep",
    author: "Prof. Dr. Stefan Betzike",
    heroImage: cover4,
    summary:
      "Blend creativity with selling: hooks, storytelling, and demo tailoring for impact.",
    whatYouWillLearn: [
      "Story-driven demos",
      "Scroll-stopping hooks",
      "Visuals that close deals",
    ],
    level: "Beginner",
    studentsCount: 19100,
    lecturesCount: 14,
    totalVideo: "2.1h",
    language: "English",
    curriculum: [
      {
        title: "Creative Foundation",
        items: [
          { title: "Storytelling basics", duration: "7:33" },
          { title: "Designing hooks", duration: "6:50" },
        ],
      },
    ],
    rating: 4.5,
    reviews: 1100,
    duration: "2h 15m",
    progress: 50,
    status: "continue",
    lastUpdated: "Aug 2025",
    speaker: {
      name: "Stefan Betzike",
      title: "CNO, Head of PR, Future Multiverse",
    },
  },
  {
    title: "Strategic Partner",
    slug: "strategic-partner",
    author: "Prof. Dr. Stefan Betzike",
    heroImage: cover2,
    summary:
      "Identify, pitch, and structure win–win partnerships that expand revenue.",
    whatYouWillLearn: [
      "Partner discovery & qualification",
      "Co-marketing motions",
      "Revenue sharing & legal basics",
    ],
    level: "Advanced",
    studentsCount: 17912,
    lecturesCount: 18,
    totalVideo: "2.9h",
    language: "English",
    curriculum: [
      {
        title: "Partnering",
        items: [
          { title: "Finding the right partners", duration: "8:22" },
          { title: "Drafting joint proposals", duration: "10:01" },
        ],
      },
    ],
    rating: 4.0,
    reviews: 912,
    duration: "2h 55m",
    progress: 25,
    status: "continue",
    lastUpdated: "Aug 2025",
    speaker: {
      name: "Stefan Betzike",
      title: "CNO, Head of PR, Future Multiverse",
    },
  },
];
