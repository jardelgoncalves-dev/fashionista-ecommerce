import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowLeft } from 'react-icons/fi';

const Drawer = ({ children, title, onClose, className }) => {
  return (
    <div className={`drawer ${className}`}>
      <div className="drawer__side">
        <header className="drawer__header">
          <button
            type="button"
            className="drawer__header__arrow"
            onClick={onClose}
          >
            <FiArrowLeft />
          </button>
          <h3 className="drawer__header__title">{title}</h3>
        </header>
        <section className="drawer__content">{children}</section>
      </div>
    </div>
  );
};
Drawer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  title: PropTypes.string,
  className: PropTypes.string,
  onClose: PropTypes.func,
};

Drawer.defaultProps = {
  children: null,
  title: '',
  className: '',
  onClose: () => {},
};
export default Drawer;
