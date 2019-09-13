import React from 'react';
import Layout from  '../components/layout';
import SEO from '../components/seo';
import ScanProductComponent from "../components/scan-product/scanProduct";
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ScanProductComponent></ScanProductComponent>
  </Layout>
);

export default IndexPage;

