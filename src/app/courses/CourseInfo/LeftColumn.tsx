import React from "react";
import personImage from "@/assets/images/Avatar.png";
import { Check, BookOpen, Users, Clock, Globe } from "lucide-react";

const LeftColumn = () => {
  return (
    <div className="space-y-6 text-sm text-gray-700">
      {/* About */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-gray-600">
          About this course
        </h4>
        <p className="leading-relaxed">
          Learn web design in 1 hour with 25+ simple-to-use rules and guidelines
          — tons of amazing web design resources included!
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* By the numbers */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-gray-600">By the numbers</h4>
        <div className="grid grid-cols-2 text-gray-600 text-md gap-y-3 gap-x-4">
          <div className="flex items-center gap-2 ">
            <Check size={16} /> Skill level:{" "}
            <span className="ml-1 font-medium">All Levels</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen size={16} /> Lectures:{" "}
            <span className="ml-1 font-medium">19</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} /> Students:{" "}
            <span className="ml-1 font-medium">38,815</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} /> Video:{" "}
            <span className="ml-1 font-medium">1.5h</span>
          </div>
          <div className="flex items-center col-span-2 gap-2">
            <Globe size={16} /> Languages:{" "}
            <span className="ml-1 font-medium">English</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Description */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-gray-600">Description</h4>
        <p className="leading-relaxed text-gray-600">
          The material of this course is also covered in my other course about
          web design and development with HTML5 & CSS3. Scroll to the bottom of
          this page to check out that course, too! If you're already taking my
          other course, you already have all it takes to start designing
          beautiful websites today!
        </p>
        <p className="pl-4 mt-2 italic text-gray-600 border-l-2 border-gray-300">
          “Best web design course: If you're interested in web design, but want
          more than just a ‘how to use WordPress’ course, I highly recommend
          this one.” — Florian Giusti
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />
      {/* Speaker */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-gray-600">Speaker</h4>
        <div className="flex items-center gap-3">
          <img
            src={personImage}
            alt="Speaker"
            className="object-cover w-10 h-10 rounded-full"
          />
          <div className="leading-tight">
            <p className="font-medium text-gray-800">Stefan Breitzke</p>
            <p className="text-xs text-gray-500">
              CMO, Head of PR, Future Multiverse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
