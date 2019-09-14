import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ScanProductComponent from "./scanProduct";
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <Link to="/scanProduct">
      Scan now.
    </Link>
  </Layout>
);

export default IndexPage;

// <ScanProductComponent></ScanProductComponent>
// 