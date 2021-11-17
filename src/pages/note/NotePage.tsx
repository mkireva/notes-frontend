import React from "react";
import { Layout } from "../../components/layout/Layout";
import { getNSTrans } from "../../functions/getNsTrans";

const Trans = getNSTrans("translation");

export const NotePage = () => (
  <Layout>
    <Trans tOptions={{ page: "BeinsaNotes" }}>{"Welcome to {{page}}"}</Trans>
  </Layout>
);

//lazy import need default export
export default NotePage;
