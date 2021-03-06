import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaTags from "react-meta-tags";
import { fetchProducts } from "../../redux/actions/productActions";

import {
  Grid,
  Card,
  CardContent,
  Button,
  ButtonGroup,
} from "@material-ui/core";

function ShowProducts() {
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  console.log(productList);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <MetaTags>
        <title>All Products</title>
        <meta name="Display Products" content="Display Products." />
      </MetaTags>
      <Grid container spacing={4}>
        {loading ? (
          <div>Loading....</div>
        ) : (
          products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <img
                  alt={product.name}
                  className="card-img-top"
                  src={product.imageUrl}
                />
                <CardContent className="p-3">
                  <h5 className="card-title font-weight-bold font-size-lg flex-wrap">
                    {product.name}
                  </h5>
                  <p className="card-text">{product.category_name}</p>
                  <p className="card-text">
                    PRICE: <strong>{product.price_range}</strong>
                  </p>
                  <ButtonGroup>
                    <Button
                      size="large"
                      style={{ color: "white", backgroundColor: "#0e9146" }}
                    >
                      CONTACT VENDOR
                    </Button>
                  </ButtonGroup>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default ShowProducts;
