import React from 'react';
import Layout from  '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Welcome to your 404 Waste Not Found Project.</h1>
    <p>This is where the scanner will be placed</p>
    <Link
      className={`btn btn-primary`}
      style={{ background: '#FDC513', color: 'black', borderColor:'#FDC513'}}
      to='/details-page/'
    >
      Product Details
    </Link>
  </Layout>
);

export default IndexPage;
