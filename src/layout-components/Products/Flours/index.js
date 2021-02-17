import React, { useState } from 'react';
import data from './data.json';
import ShowProducts from '../ShowProducts';

function Flours() {
  const [products] = useState(data.products);
  return <ShowProducts products={products} />;
}

export default Flours;
