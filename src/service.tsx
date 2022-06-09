import React from "react";
import { createContext } from "react";

const SERVICES = {
  api: {},
};

export const Services = createContext(SERVICES);

export const ServiceProvider = (props: any) => (
  <Services.Provider value={SERVICES}>{props.children}</Services.Provider>
);

if (process.env.NODE_ENV !== "production") {
  console.groupCollapsed("Services registered");
  console.info(SERVICES);
  console.groupEnd();
}
