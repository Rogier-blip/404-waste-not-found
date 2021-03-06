import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import './layout.css';


const Layout = ({ children, title }) => {
  return (
    <>
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          minHeight: 400,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
