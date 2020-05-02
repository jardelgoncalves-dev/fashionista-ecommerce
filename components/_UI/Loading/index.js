import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ className }) => {
  return (
    <div className={`loading__container ${className}`}>
      <div className="loading">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
};

export default Loading;
