import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../public/static/css/main.css';
import { withKnobs, text } from '@storybook/addon-knobs';

import Loading from '.';

storiesOf('UI|Loading/Loading', module)
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
  .add('default', () => <Loading className={text('className', '')} />);
