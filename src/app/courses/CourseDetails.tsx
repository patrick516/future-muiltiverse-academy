import React from "react";
import courseImage from "@/assets/images/Image.png";
import personImage from "@/assets/images/Avatar.png";
import { Play } from "lucide-react";
import { CheckSquare, Square } from "lucide-react";

const CourseDetail = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Course Info Card */}
      <div className="p-6 space-y-6 bg-white border shadow-sm rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              FMV Sales Agent / Agency
            </h2>
            <p className="text-sm text-muted-foreground">
              Prof. Dr. Stefan Betzike
            </p>
          </div>
          <div className="px-3 py-1 text-xs font-medium text-[#CFB16D] bg-yellow-100 rounded">
            FMV Sales Agent / Agency
          </div>
        </div>

        {/* Video Preview */}
        <div className="relative overflow-hidden rounded-md">
          <img
            src={courseImage}
            alt="Course Video"
            className="object-cover w-full h-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
              <Play className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 md:col-span-2">
            {/* About this course */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 text-md">
                About this course
              </h4>
              <p className="text-sm text-gray-600">
                Learn web design in 1 hour with 25+ simple-to-use rules and
                guidelines — tons of amazing web design resources included!
              </p>

              {/* By the numbers */}
              <div className="flex flex-wrap gap-4 pt-4 text-sm text-gray-600 border-t">
                <p>✅ Skill level: All Levels</p>
                <p>📘 Lectures: 19</p>
                <p>👥 Students: 38,815</p>
                <p>⏱️ Video: 1.5h</p>
                <p>🌍 Language: English</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 text-md">
                Description
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                The material of this course is also covered in my other course
                about web design and development with HTML5 & CSS3. Scroll to
                the bottom of this page to check out that course too! If you're
                already taking my other course, you already have all it takes to
                start designing beautiful websites today!
              </p>

              <p className="pl-4 mt-2 text-sm italic text-gray-600 border-l-2">
                “Best web design course: If you're interested in web design but
                want more than just a ‘how to use WordPress’ course, I highly
                recommend this one.” — Florian Giusti
              </p>
            </div>

            {/* Speaker */}
            <div className="flex items-center gap-3 pt-4">
              <img
                src={personImage}
                alt="Speaker"
                className="object-cover w-10 h-10 rounded-full"
              />
              <div className="text-sm">
                <p className="font-medium text-gray-800">Stefan Betzike</p>
                <p className="text-xs text-muted-foreground">
                  CMO, Head of PR, Future Multiverse
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Course Content */}
          <div className="p-4 space-y-6 bg-[#CFB16D]/10 rounded-md border border-[#CFB16D]">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-gray-900">
                Course Content
              </h4>
              <p className="mb-4 text-xs text-muted-foreground">
                2 / 5 | 4.4 min
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-900">
                    <CheckSquare size={16} />
                    <span>1. Welcome to this course</span>
                  </div>
                  <span className="text-xs text-muted-foreground">2.4 min</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-900">
                    <CheckSquare size={16} />
                    <span>2. Watch before you start</span>
                  </div>
                  <span className="text-xs text-muted-foreground">4.8 min</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Square size={16} />
                    <span>3. Basic design theory</span>
                  </div>
                  <span className="text-xs text-muted-foreground">5.9 min</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Square size={16} />
                    <span>4. Basic fundamentals</span>
                  </div>
                  <span className="text-xs text-muted-foreground">3.6 min</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Square size={16} />
                    <span>5. What is ui/ux</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    10.6 min
                  </span>
                </div>
              </div>
            </div>

            {/* Other Sections */}
            <div className="space-y-4">
              {[
                "Web Design for Developers",
                "Build Beautiful Websites!",
                "Final Project",
              ].map((section, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-3 text-sm bg-[#CFB16D] text-white font-medium rounded hover:bg-[#d1b156] transition"
                >
                  <span>{section}</span>
                  <span className="text-xs">0 / 4 | 4.4 min</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
