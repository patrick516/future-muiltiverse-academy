import React from "react";
import { useParams, Link } from "react-router-dom";
import { getAcademyItem } from "@/data/academy";
import DashboardTopBar from "@/app/constants/DashboardTopBar";

const AcademyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = id ? getAcademyItem(id) : null;

  if (!item) {
    return (
      <div className="p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We couldn’t find that Academy item.
          </p>
          <Link to="/" className="text-[#CFB16D] mt-4 inline-block">
            ← Back to Academy
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <DashboardTopBar />
      <div className="p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{item.title}</h1>
            <Link to="/" className="text-[#CFB16D]">
              ← Back
            </Link>
          </div>

          <div className="overflow-hidden bg-white border shadow-sm rounded-xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[360px] object-cover"
            />
            <div className="p-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs tracking-wide uppercase">
                <span className="px-2 py-1 border rounded-full">
                  {item.kind}
                </span>
                <span className="text-muted-foreground">ID:</span>
                <code className="text-xs">{item.id}</code>
              </div>

              <p className="text-gray-700">{item.description}</p>

              {/* Add any extra blocks you want here */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">Self‑paced</p>
                </div>
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-muted-foreground">Level</p>
                  <p className="font-medium">Beginner → Pro</p>
                </div>
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-muted-foreground">Format</p>
                  <p className="font-medium">Videos + Guides</p>
                </div>
              </div>

              <button className="inline-flex items-center px-4 py-2 mt-2 border rounded-md hover:bg-gray-50">
                {item.cta.replace(" →", "")}
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyDetail;
