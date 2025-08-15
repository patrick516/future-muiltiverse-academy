import React from "react";
import DashboardTopBar from "@/app/constants/DashboardTopBar";
import { getAcademyItem } from "@/data/academy";

const ITEM_ID = "fmv-sales-manager";

const SalesManagerPage: React.FC = () => {
  const item = getAcademyItem(ITEM_ID);

  if (!item) {
    return (
      <div className="p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We couldn’t find this Academy item: <code>{ITEM_ID}</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <DashboardTopBar />
      <div className="p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Hero */}
          <div className="overflow-hidden bg-white border shadow-sm rounded-xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[420px] object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          </div>

          {/* Manager-Specific Sections */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="p-4 bg-white border rounded-lg">
              <h3 className="font-semibold">Operations</h3>
              <ul className="pl-5 mt-2 space-y-1 text-sm list-disc">
                <li>Pipeline Health</li>
                <li>Resource Allocation</li>
                <li>Risk & Escalation</li>
              </ul>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <h3 className="font-semibold">Reporting</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Weekly/Monthly reporting templates and automation ideas.
              </p>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <h3 className="font-semibold">Actions</h3>
              <button className="inline-flex items-center px-4 py-2 mt-2 border rounded-md hover:bg-gray-50">
                View Ops Checklist →
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SalesManagerPage;
