import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../public/static/css/main.css';
import { withKnobs } from '@storybook/addon-knobs';

import Products from '.';

const data = [
  {
    name: 'Blusa Red Stripes',
    actual_price: 'R$ 149,90',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4HZsF8oNnV0KcrmM6Fv7oJ3usRcFxPMCrkqr-fkKLW09rPS0&usqp=CAY',
    discount_percentage: '20%',
    path: '/',
  },
];

storiesOf('UI|Products/Products', module)
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
  .add('default', () => <Products data={data} />);
