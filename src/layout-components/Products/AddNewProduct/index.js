import React, { useState } from "react";
import { connect } from "react-redux";
import { Grid, Card, Divider } from "@material-ui/core";

//components
import { addProduct } from "../../../redux";
import NewProductForm from "./NewProductForm";

function AddNewProduct() {
  const [newProduct, setNewProduct] = useState([
    {
      product_name: "",
      product_category: "",
      product_price: "",
      product_img: "",
    },
  ]);

  // const handlePriceChange = (prop) => (event) => {
  //   setProduct({
  //     ...product.product_price,
  //     [prop]: event.target.value,
  //   });
  // };

  const handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setNewProduct({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    console.log(newProduct);
    setNewProduct([
      {
        product_name: "",
        product_category: "",
        product_price: "",
        product_img: "",
      },
    ]);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={6}>
        <Card className="p-4 mb-4">
          <div className="font-size-lg font-weight-bold">Add new product</div>
          <Divider className="my-4" />
          <Grid container>
            <Grid item xs={12} lg={12}>
              <NewProductForm
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                productName={newProduct.product_name}
                productCategory={newProduct.product_category}
                productPrice={newProduct.product_price}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

// export default AddNewProduct;
export default connect(null, { addProduct })(AddNewProduct);
