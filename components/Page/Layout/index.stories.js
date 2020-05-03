import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../public/static/css/main.css';
import { withKnobs } from '@storybook/addon-knobs';

import Layout from '.';

storiesOf('UI|Layout/Layout', module)
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
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  ));
