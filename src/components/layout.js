import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

const Layout = ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1000px;
    `}
  >
    <SEO />
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
