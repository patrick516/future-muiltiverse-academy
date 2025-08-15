import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import DashboardTopBar from "@/app/constants/DashboardTopBar";
import { QUICK_LINKS_BY_SLUG } from "./data";

const IFrameBox: React.FC<{ src: string; title: string }> = ({
  src,
  title,
}) => (
  <div className="p-6">
    <div className="mx-auto overflow-hidden bg-white border shadow-sm max-w-7xl rounded-xl">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-semibold">{title}</h1>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="text-[#CFB16D] text-sm"
          title="Open in new tab"
        >
          Open in new tab →
        </a>
      </div>
      <div className="w-full h-[78vh]">
        <iframe
          className="w-full h-full"
          src={src}
          title={title}
          style={{ border: 0 }}
        />
      </div>
    </div>
  </div>
);

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="p-6">
    <div className="max-w-3xl p-6 mx-auto bg-white border shadow-sm rounded-xl">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-muted-foreground">Not wired yet.</p>
      <Link to="/" className="mt-4 inline-block text-[#CFB16D]">
        ← Back to Home
      </Link>
    </div>
  </div>
);

const QuickLinkPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? QUICK_LINKS_BY_SLUG.get(slug) : undefined;

  if (!item) {
    return (
      <>
        <DashboardTopBar />
        <Placeholder title="Not Found" />
      </>
    );
  }

  if (item.type === "external") {
    return (
      <>
        <DashboardTopBar />
        <IFrameBox src={item.url} title={item.label} />
      </>
    );
  }

  if (item.type === "internal") {
    return <Navigate to={item.path} replace />;
  }

  return (
    <>
      <DashboardTopBar />
      <Placeholder title={item.label} />
    </>
  );
};

export default QuickLinkPage;
