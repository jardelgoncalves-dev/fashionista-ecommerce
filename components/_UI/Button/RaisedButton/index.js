import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const RaisedButton = ({ text, className, disabled, loading, ...restProps }) => {
  return (
    <button
      {...restProps}
      disabled={disabled || loading}
      type="button"
      className={`button ${className}`}
    >
      {text} {loading && <i className="fa fa-spinner" />}
    </button>
  );
};

RaisedButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

RaisedButton.defaultProps = {
  disabled: false,
  loading: false,
  className: '',
};

export default RaisedButton;
