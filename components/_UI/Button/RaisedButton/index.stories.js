import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../../public/static/css/main.css';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import RaisedButton from '.';

storiesOf('UI|Button/RaisedButton', module)
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
    <RaisedButton
      text={text('text', 'Adicionar à Sacola')}
      loading={boolean('loading', false)}
      disabled={boolean('disabled', false)}
      className={text('className', '')}
    />
  ));
