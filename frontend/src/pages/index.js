import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ScanProductComponent from "../components/scanProduct";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to your 404 Waste Not Found Project.</h1>
    <p>This is where the scanner will be placed</p>
    <ScanProductComponent></ScanProductComponent>
  </Layout>
);

export default IndexPage;
