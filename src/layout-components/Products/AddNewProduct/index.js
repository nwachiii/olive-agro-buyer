import React, { useState } from "react";
import { Grid, Card, Divider } from "@material-ui/core";
import axios from "axios";

//components
import NewProductForm from "./NewProductForm";

function AddNewProduct() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState(null);

  const formStyles = {
    input: {
      padding: "15px 7px",
      borderRadius: "10px",
      height: "55px",
      width: "100%",
      border: "1px solid lightgray",
      marginBottom: "7px",
      color: '#929292'
    },
    formInput: {
      marginTop: "7px",
      marginLeft: "15px",
    },
  };
  const resetForm = () => {
    return (
      setProductName(""),
      setProductCategory(""),
      setProductSubCategory(""),
      setProductQty(""),
      setProductPrice(""),
      setProductImg(null)
    );
  };

      
      const getImageUrl = async () => {
        const image = new FormData();
        image.append("image", productImg);
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const res = await axios.post(
            "https://www.api.oliveagro.org/api/users/upload",
            image,
            config
          );
          return res.data.image;
        } catch (error) {
          console.log(error.response.data.message);
        }
      };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productImage = await getImageUrl();

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = JSON.stringify({
      name: productName,
      price_range: productPrice,
      quantity: productQty,
      imageUrl: productImage,
      category_name: productCategory,
      sub_category_name: productSubCategory,
    });
    console.log("body: ", body)
    
    try {
      await axios.post(
        "https://www.api.oliveagro.org/api/product/create",
        {
          name: productName,
          price_range: productPrice,
          quantity: productQty,
          imageUrl: productImage,
          category_name: productCategory,
          sub_category_name: productSubCategory,
        },
        config
        );
      } catch (error) {
        console.log(error);
      }
    
      resetForm();
    };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={6}>
        <Card className="p-4 mb-4">
          <div className="font-size-lg font-weight-bold">Add new product</div>
          <Divider className="my-4" />
          <Grid container>
            <Grid item xs={12} lg={12}>
              {/* Add new product form component */}
              <NewProductForm
                productName={productName}
                productCategory={productCategory}
                productSubCategory={productSubCategory}
                productPrice={productPrice}
                productQty={productQty}
                productImg={productImg}
                setProductName={setProductName}
                setProductCategory={setProductCategory}
                setProductSubCategory={setProductSubCategory}
                setProductPrice={setProductPrice}
                setProductQty={setProductQty}
                setProductImg={setProductImg}
                handleSubmit={handleSubmit}
                formStyles={formStyles}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddNewProduct;
