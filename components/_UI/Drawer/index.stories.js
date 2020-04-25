import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../public/static/css/main.css';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Drawer from '.';

storiesOf('UI|Drawer/Drawer', module)
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
    <Drawer
      visible={boolean('visible', true)}
      title={text('title', 'Buscar produto')}
    />
  ));
