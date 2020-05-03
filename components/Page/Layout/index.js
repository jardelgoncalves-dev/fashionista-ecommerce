import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <section className="container">{children}</section>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
