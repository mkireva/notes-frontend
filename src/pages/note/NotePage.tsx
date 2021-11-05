import React from "react";
import {Layout} from "../../components/layout/Layout";
import {Trans} from "react-i18next";

const ProductPage = () => (
  <Layout>
      <Trans tOptions={{page: 'NotePage'}}>{'Welcome to {{page}}'}</Trans>
  </Layout>
);

export default ProductPage;
