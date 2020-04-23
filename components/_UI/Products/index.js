import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

const Products = ({ data = [] }) => {
  return (
    <div className="products__container">
      <ul className="row">
        {data &&
          data.map((product) => (
            <li className="product">
              <Link href={product.path}>
                <a className="product__wrap">
                  {Boolean(product.promo) && (
                    <span className="product__promo">{product.promo}%</span>
                  )}
                  <figcaption className="product__image">
                    <img
                      className="product__image"
                      src={product.image}
                      alt={product.name}
                    />
                  </figcaption>

                  <div className="product__details">
                    <h4 className="details__name">{product.name}</h4>
                    <span className="details__price">{product.price}</span>
                  </div>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      promo: PropTypes.number,
      path: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Products.defaultProps = {
  data: [],
};

export default Products;
