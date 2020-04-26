import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../public/static/css/main.css';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Bag from '.';
import Drawer from '../Drawer';

const data = [
  {
    name: 'Blusa Red Stripes',
    actual_price: 'R$ 149,90',
    installments: '3x R$ 66,63',
    size: 'PP',
    quantity: 1,
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4HZsF8oNnV0KcrmM6Fv7oJ3usRcFxPMCrkqr-fkKLW09rPS0&usqp=CAY',
    discount_percentage: '20%',
    path: '/',
  },
];

storiesOf('UI|Bag/Bag', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <div
      style={{
        padding: '15px',
        height: '90vh',
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => (
    <Drawer visible title="Sacola">
      <Bag
        data={data}
        total="R$ 149,90"
        isSearch={boolean('isSearch', false)}
      />
    </Drawer>
  ));
