import React, { lazy } from "react";
import { IPageBundle } from "../../types/IPageBundle";

// lazy loading helps with performance in the long run
const LazyPage = lazy(
  () => import(/* webpackChunkName: "pages/notePage" */ "./NotePage")
);

// wrap lazy loading
const PageBundle = (props: any) => <LazyPage {...props} />;

// map path to render() fn
export const bundle: IPageBundle = {
  path: ["/", "/product"],
  render: PageBundle,
};
