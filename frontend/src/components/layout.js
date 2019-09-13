import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import './layout.css';


const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Groenie Generator" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
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
