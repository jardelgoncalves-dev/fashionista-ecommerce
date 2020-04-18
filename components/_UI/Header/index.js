import React from 'react';
import Link from 'next/link';
import { FiShoppingBag, FiHome, FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

import './style.css';
import logo from '../../../public/static/images/fashionista_logo.png';

const Header = ({ homePath, onSearch, onShoppingCart, productInCart }) => {
  return (
    <header className="header">
      <Link href="/">
        <a className="logo">
          <img src={logo} alt="Logo" />
        </a>
      </Link>
      <ul className="header__menu">
        <li>
          <div className="header__link">
            <Link href={homePath}>
              <a>
                <FiHome />
              </a>
            </Link>
          </div>
        </li>
        <li>
          <button type="button" onClick={onSearch}>
            <FiSearch />
          </button>
        </li>
        <li>
          <button type="button" onClick={onShoppingCart}>
            <FiShoppingBag />
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
  homePath: PropTypes.string,
  onSearch: PropTypes.func,
  onShoppingCart: PropTypes.func,
  productInCart: PropTypes.number,
};

Header.defaultProps = {
  homePath: '/',
  onSearch: () => null,
  onShoppingCart: () => null,
  productInCart: 0,
};

export default Header;
