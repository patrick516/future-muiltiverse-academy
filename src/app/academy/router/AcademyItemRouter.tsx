import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { academyPageRegistry } from "@/app/academy/pages";
import AcademyDetail from "@/app/academy/AcademyDetail";

const Loader = () => (
  <div className="p-6 text-sm text-muted-foreground">Loading…</div>
);

const AcademyItemRouter = () => {
  const params = useParams();
  const id = params.id ?? "";

  const entry = academyPageRegistry[id];
  if (!entry) return <AcademyDetail />;

  const Page = entry.component;
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
};

export default AcademyItemRouter;
