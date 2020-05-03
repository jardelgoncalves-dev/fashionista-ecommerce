import React from 'react';
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

import { productNameToId, BRLPriceToNumber, formatPrice } from '../../../utils';

const Bag = ({
  data = [],
  isSearch,
  searchValue,
  onDecrement,
  onIncrement,
  onRemoveToCart,
  onSearch,
  toProductPage,
}) => {
  return (
    <div className={`bag ${isSearch ? 'bag--searchMode' : ''}`}>
      <div className="bag__search">
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={onSearch}
          placeholder="Buscar por produto"
          value={searchValue}
        />
      </div>
      {data.length ? (
        <ul className="bag__list">
          {data.map((prod) => (
            <li
              className="bag__list__item"
              key={prod.id || productNameToId(`${prod.name} ${prod.color}`)}
            >
              <div
                className="bag__item"
                onClick={() => {
                  if (isSearch) {
                    toProductPage(
                      productNameToId(`${prod.name} ${prod.color}`)
                    );
                  }
                }}
              >
                <div className="bag__item_product">
                  <figcaption>
                    <img src={prod.image} alt={prod.name} />
                    <button
                      type="button"
                      className="bag__remove"
                      onClick={() => onRemoveToCart(prod)}
                    >
                      Excluir item
                    </button>
                  </figcaption>
                  <div className="bag__item__col">
                    <h3>{prod.name}</h3>
                    <span>Tam.: {prod.size}</span>
                    <div className="bag__counter">
                      <button type="button" onClick={() => onDecrement(prod)}>
                        <FiMinus />
                      </button>
                      <h1>{prod.amount}</h1>
                      <button type="button" onClick={() => onIncrement(prod)}>
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bag__item__price">
                  <h3>{prod.actual_price}</h3>
                  <h4>{prod.installments}</h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="bag__empty">
          <div className="circle__cart">
            <FiShoppingCart />
          </div>
          <span>
            {isSearch ? 'Nenhum produto encontrado' : 'Sua sacola está vazia'}{' '}
            :/
          </span>
        </div>
      )}
      <div className="bag__total__amount">
        Subtotal -{' '}
        {formatPrice(
          data.reduce(
            (acc, p) => acc + p.amount * BRLPriceToNumber(p.actual_price),
            0
          )
        )}
      </div>
    </div>
  );
};

Bag.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
      image: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(
          PropTypes.shape({
            available: PropTypes.bool,
            size: PropTypes.string,
            sku: PropTypes.string,
          })
        ),
      ]),
      amount: PropTypes.number,
      actual_price: PropTypes.string,
      installments: PropTypes.string,
    })
  ),
  searchValue: PropTypes.string,
  isSearch: PropTypes.bool,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  onRemoveToCart: PropTypes.func,
  onSearch: PropTypes.func,
  toProductPage: PropTypes.func,
};

Bag.defaultProps = {
  data: [],
  searchValue: '',
  isSearch: false,
  onDecrement: () => null,
  onIncrement: () => null,
  onRemoveToCart: () => null,
  onSearch: () => null,
  toProductPage: () => null,
};

export default Bag;
