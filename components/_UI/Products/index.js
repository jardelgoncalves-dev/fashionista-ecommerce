import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import PropTypes from 'prop-types';

import { productNameToId } from '../../../utils';

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
            <li className="product__item" key={product.name + product.color}>
              <Link
                href={`/product/${productNameToId(
                  `${product.name} ${product.color}`
                )}`}
              >
                <a className="product__wrap">
                  {product.on_sale && (
                    <span className="product__promo">
                      -{product.discount_percentage}
                    </span>
                  )}
                  <figcaption className="product__image">
                    <LazyLoadImage
                      className="product__image"
                      src={
                        product.image ||
                        'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
                      }
                      alt={product.name}
                    />
                  </figcaption>

                  <div className="product__details">
                    <h4 className="details__name">{product.name}</h4>
                    <div>
                      {product.on_sale && (
                        <span className="details__price--old">
                          {product.regular_price}
                        </span>
                      )}
                      <span className="details__price">
                        {product.actual_price}
                      </span>
                    </div>
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
      color: PropTypes.string,
      on_sale: PropTypes.bool,
      actual_price: PropTypes.string,
      regular_price: PropTypes.string,
      discount_percentage: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Products.defaultProps = {
  data: [],
};

export default Products;
