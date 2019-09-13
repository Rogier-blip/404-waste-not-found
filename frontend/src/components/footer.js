import React from 'react';
import logo from '../images/jumbo-footer-logo.png';

const Footer = () => (
    <footer
        style={{
            background: "white",
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <div className={`d-flex justify-content-end`}>
                <div>
                    <img style={{ margin: 0, maxHeight: 200}} src={logo} alt="logo" />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
