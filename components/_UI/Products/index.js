import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';

const Products = ({ data = [] }) => {
  return (
    <div className="products__container">
      <div className="row">
        <span className="products__count">
          {data.length} item{data.length > 1 ? 's' : ''}
        </span>
      </div>
      <ul className="row">
        {data &&
          data.map((product) => (
            <li className="product__item" key={product.name}>
              <Link href={product.path}>
                <a className="product__wrap">
                  {Boolean(product.discount_percentage) && (
                    <span className="product__promo">
                      {product.discount_percentage}
                    </span>
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
                    <span className="details__price">
                      {product.actual_price}
                    </span>
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
      name: PropTypes.string,
      actual_price: PropTypes.string,
      discount_percentage: PropTypes.string,
      path: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Products.defaultProps = {
  data: [],
};

export default Products;
