import React from 'react';
import { Products } from '../components/_UI';

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

const Home = () => <Products data={data} />;

export default Home;
