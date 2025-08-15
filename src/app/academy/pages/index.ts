import { lazy, type LazyExoticComponent, type ComponentType } from "react";

// React.lazy returns LazyExoticComponent<ComponentType<any>>
export type LazyPage = LazyExoticComponent<ComponentType<any>>;

export const academyPageRegistry: Record<string, { component: LazyPage }> = {
  "fmv-sales-agent-agency": {
    component: lazy(() => import("./fmv-sales-agent-agency")),
  },
  "fmv-sales-leader": {
    component: lazy(() => import("./fmv-sales-leader")),
  },
  "fmv-sales-manager": {
    component: lazy(() => import("./fmv-sales-manager")),
  },
};
