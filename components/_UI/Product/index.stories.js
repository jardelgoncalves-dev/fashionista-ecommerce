import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../public/static/css/main.css';
import { withKnobs } from '@storybook/addon-knobs';

import Product from '.';

const sizes = [
  {
    available: false,
    size: 'PP',
    sku: '5807_343_0_PP',
  },
  {
    available: true,
    size: 'P',
    sku: '5807_343_0_P',
  },
  {
    available: true,
    size: 'M',
    sku: '5807_343_0_M',
  },
  {
    available: true,
    size: 'G',
    sku: '5807_343_0_G',
  },
  {
    available: false,
    size: 'GG',
    sku: '5807_343_0_GG',
  },
];

storiesOf('UI|Product/Product', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <div
      style={{
        padding: '15px',
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <Product
      discount_percentage="20%"
      installments="3x R$ 66,63"
      name="VESTIDO TRANSPASSE BOW"
      image="https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578"
      actual_price="R$ 199,99"
      sizes={sizes}
    />
  ));
