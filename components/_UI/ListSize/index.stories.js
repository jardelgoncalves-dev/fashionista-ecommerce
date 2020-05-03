import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../public/static/css/main.css';
import { withKnobs } from '@storybook/addon-knobs';

import ListSize from '.';

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

storiesOf('UI|List Size/ListSize', module)
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
  .add('default', () => <ListSize options={sizes} />);
