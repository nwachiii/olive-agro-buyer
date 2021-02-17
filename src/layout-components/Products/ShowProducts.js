//
import {
  Grid,
  Card,
  CardContent,
  Button,
  ButtonGroup
} from '@material-ui/core';
import React from 'react';

import stock1 from '../../assets/images/stock-photos/stock-1.jpg';

function ShowProducts({ products }) {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <img alt={product.title} className="card-img-top" src={stock1} />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg flex-wrap">
                {product.title}
              </h5>
              <p className="card-text">{product.category}</p>
              <p className="card-text">
                PRICE: <strong>{product.price}</strong>
              </p>
              <ButtonGroup>
                <Button color="secondary" size="large" variant="contained">
                  Add to Cart
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShowProducts;
