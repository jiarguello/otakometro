import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../globalStyles';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
