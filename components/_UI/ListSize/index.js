import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ListSize = ({ options, selected, onClick }) => {
  const [select, onSelect] = useState({} || selected);

  return (
    <div className="size__container">
      <ul className="size__list">
        {Boolean(options && options.length) &&
          options.map((op) => (
            <li className="size__list__item" key={op.sku}>
              <div
                className={`item
                ${op.available && op.sku === select.sku ? 'item--active' : ''}
                ${!op.available ? 'item--disabled' : ''}
            `}
              >
                <input
                  type="radio"
                  checked={op.available && op.sku === select.sku}
                  disabled={!op.available}
                  onClick={() => {
                    if (op.available) {
                      onSelect(op);
                      onClick(op);
                    }
                  }}
                />
                <span>{op.size}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

ListSize.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      available: PropTypes.bool,
      size: PropTypes.string,
      sku: PropTypes.string,
    })
  ),
  selected: PropTypes.shape({
    available: PropTypes.bool,
    size: PropTypes.string,
    sku: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

ListSize.defaultProps = {
  options: [],
  selected: {},
  onClick: () => null,
};

export default ListSize;
