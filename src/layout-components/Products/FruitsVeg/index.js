import React, { useState } from 'react';
import data from './data.json';
import ShowProducts from '../ShowProducts';

function FruitsVeg({ ButtonText }) {
  const [products] = useState(data.products);
  return <ShowProducts products={products} ButtonText={ButtonText} />;
}

export default FruitsVeg;
