import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import cameraLogo from '../images/camera.png';
import "../components/index.css"

const IndexPage = () => (
  <Layout>
    <Link className="link-container" to="/scanProduct"><img style={{ margin: 0 }} src={cameraLogo} alt="logo" width="150px" height="150px" />
    </Link>
  </Layout >
);

export default IndexPage;
