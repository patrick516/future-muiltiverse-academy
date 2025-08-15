import blueAvatar from "@/assets/images/certificate-logo.png";
import pinkAvatar from "@/assets/images/courses.png";

const MiddlePart = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Earn a Certificate */}
        <div className="flex justify-between items-start bg-gray-100 p-4 border border-[#CFB16D] rounded-lg shadow-sm">
          <div className="flex flex-col justify-between max-w-[60%]">
            <div>
              <h3 className="text-base font-semibold text-gray-800">
                Earn a Certificate
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Get the right professional certificate program for you.
              </p>
            </div>
            <button className="mt-12  w-fit px-4 py-2 text-sm font-medium text-white bg-[#1A1A2E] rounded-md">
              View Programs
            </button>
          </div>
          <img
            src={blueAvatar}
            alt="certificate"
            className="self-start object-contain -mt-2 w-36 h-36"
          />
        </div>

        {/* Best Rated Courses */}
        <div className="flex justify-between items-start p-4 rounded-lg border border-[#CFB16D] bg-[#fff1f1] shadow-sm">
          <div className="flex flex-col justify-between max-w-[60%]">
            <div>
              <h3 className="text-base font-semibold text-gray-800">
                Best Rated Courses
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enroll now in the most popular and best rated courses.
              </p>
            </div>
            <button className="mt-12 w-fit px-4 py-2 text-sm font-medium text-white bg-[#CFB16D] rounded-md">
              View Courses
            </button>
          </div>
          <img
            src={pinkAvatar}
            alt="courses"
            className="self-start object-contain -mt-2 w-36 h-36"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
