import { bundle as notePageBundle } from "./pages/note/NotePage.bundle";

// add page bundles here to be dynamically added to <Switch> of routes
export const ROUTES = {
  product: notePageBundle,
};

if (process.env.NODE_ENV !== "production") {
  console.groupCollapsed("Routes registered");
  console.info(ROUTES);
  console.groupEnd();
}
