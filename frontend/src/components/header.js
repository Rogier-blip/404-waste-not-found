import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/jumbo-logo.png';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "#FDC513",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div className={`row`}>
        <div className={`col-10`}>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className={`col-2`}>
          <img style={{ margin: 0 }} src={logo} alt="logo" />
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
