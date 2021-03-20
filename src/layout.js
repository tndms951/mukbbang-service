import React from 'react';
import { Reset } from 'styled-reset';

import Header from './components/service-main/header/header';
import Footer from './components/service-main/footer/footer';

// import SignUp from './components/sign-up/signup_content';

// eslint-disable-next-line react/prop-types
function LayOut({ children }) {
  return (
    <>
      <Reset />
      <Header />
      {children}
      {/* <SignUp /> */}
      <Footer />
    </>
  );
}

export default LayOut;
