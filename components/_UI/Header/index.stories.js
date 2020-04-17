import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../public/static/css/main.css';
import { withKnobs } from '@storybook/addon-knobs';

import Header from '.';

storiesOf('UI|Button/Header', module)
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
  .add('default', () => <Header />);
