import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import logo from '../../../public/static/images/fashionista_logo.png';

const Header = ({ onSearch, onShoppingCart, productInCart }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="header__menu">
        <li>
          <button type="button" onClick={onSearch}>
            <i className="fa fa-home" />
          </button>
        </li>
        <li>
          <button type="button" onClick={onSearch}>
            <i className="fa fa-search" />
          </button>
        </li>
        <li>
          <button type="button" onClick={onShoppingCart}>
            <i className="fa fa-shopping-bag" />
            {Boolean(productInCart) && (
              <div className="badges">{productInCart}</div>
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
  onShoppingCart: PropTypes.func,
  productInCart: PropTypes.number,
};

Header.defaultProps = {
  onSearch: () => null,
  onShoppingCart: () => null,
  productInCart: 0,
};

export default Header;
