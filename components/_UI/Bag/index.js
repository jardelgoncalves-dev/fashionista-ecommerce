import React from 'react';
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

const Bag = ({
  data = [],
  total = 'R$ 0,00',
  isSearch,
  onMinusProduct,
  onPlusProduct,
  onRemoveProduct,
  onSearch,
}) => {
  return (
    <div className={`bag ${isSearch ? 'bag--searchMode' : ''}`}>
      <div className="bag__search">
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={onSearch}
          placeholder="Buscar por produto"
        />
      </div>
      {data.length ? (
        <ul className="bag__list">
          {data.map((prod) => (
            <li className="bag__list__item" key={prod.name}>
              <div className="bag__item">
                <div className="bag__item_product">
                  <figcaption>
                    <img src={prod.image} alt={prod.name} />
                    <button
                      type="button"
                      className="bag__remove"
                      onClick={() => onRemoveProduct(prod)}
                    >
                      Excluir item
                    </button>
                  </figcaption>
                  <div className="bag__item__col">
                    <h3>{prod.name}</h3>
                    <span>Tam.: {prod.size}</span>
                    <div className="bag__counter">
                      <button
                        type="button"
                        onClick={() => onMinusProduct(prod)}
                      >
                        <FiMinus />
                      </button>
                      <h1>{prod.quantity}</h1>
                      <button type="button" onClick={() => onPlusProduct(prod)}>
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
      <div className="bag__total__amount">Subtotal - {total}</div>
    </div>
  );
};

Bag.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      size: PropTypes.string,
      quantity: PropTypes.number,
      actual_price: PropTypes.string,
      installments: PropTypes.string,
    })
  ),
  total: PropTypes.string,
  isSearch: PropTypes.bool,
  onMinusProduct: PropTypes.func,
  onPlusProduct: PropTypes.func,
  onRemoveProduct: PropTypes.func,
  onSearch: PropTypes.func,
};

Bag.defaultProps = {
  data: [],
  total: 'R$ 0,00',
  isSearch: false,
  onMinusProduct: () => null,
  onPlusProduct: () => null,
  onRemoveProduct: () => null,
  onSearch: () => null,
};

export default Bag;
