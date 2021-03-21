import React from 'react';
import { Reset } from 'styled-reset';
import PropTypes from 'prop-types';

import Header from './components/service-main/header/header';
import Footer from './components/service-main/footer/footer';

function Layout({ children }) {
  return (
    <>
      <Reset />
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
