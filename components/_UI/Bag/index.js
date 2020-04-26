import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';

const Bag = ({
  data = [],
  total = 'R$ 0,00',
  onMinusProduct,
  onPlusProduct,
  onRemoveProduct,
}) => {
  return (
    <div className="bag">
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
          <span>Sua sacola está vazia :/</span>
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
  onMinusProduct: PropTypes.func,
  onPlusProduct: PropTypes.func,
  onRemoveProduct: PropTypes.func,
};

Bag.defaultProps = {
  data: [],
  total: 'R$ 0,00',
  onMinusProduct: () => null,
  onPlusProduct: () => null,
  onRemoveProduct: () => null,
};

export default Bag;
