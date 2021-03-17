import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { Grid, Card, Divider } from "@material-ui/core";
import axios from "axios";

//components
// import { addProduct } from "../../../redux";
import { getImageUrl } from "../../../redux";
import NewProductForm from "./NewProductForm";

function AddNewProduct() {
  const [name, setName] = useState("");
  const [price_range, setPrice_range] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [category_name, setCategory_name] = useState("");
  const [sub_category_name, setSub_category_name] = useState("");

  // const resetForm = () => {
  //   return (
  //     setName("")
  // setPrice_range("")
  // setImageUrl(null)
  // setCategory_name("")
  // setSub_category_name("")
  //   )
  // };

  // states for API calls
  const [listCategories, setListCategories] = useState(undefined);
  const [listSubCatById, setListSubCatById] = useState(undefined);
  const [catId, setCatId] = useState(undefined);
  const [selectedCatId, setSelectedCatId] = useState(null);

  //fetch all categories
  useEffect(() => {
    axios
      .get("https://www.api.oliveagro.org/api/category/list/all")
      .then((response) => {
        const res = response.data.categories.map((category, index) => category);

        //map all category details
        setListCategories(res);
        console.log("categories Inside axios", res);

        //map all available category Ids
        setCatId(res.map((category, index) => category._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //fetch subcategory by category ID
  //set id to be the selected category id
  useEffect(() => {
    const filteredId = () => catId.filter((index) => index === selectedCatId);
    axios
      .get(
        `https://www.api.oliveagro.org/api/subCategory/category/${filteredId}`
      )
      .then((response) => {
        const res = response.data.categories.map(
          (subCategory, index) => subCategory
        );
        setListSubCatById(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productImage = await getImageUrl({ imageUrl });
    // resetForm();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      price_range,
      quantity,
      category_name,
      sub_category_name,
      imageUrl: productImage,
    });

    try {
      await axios.post(
        "https://www.api.oliveagro.org/api/product/create",
        body,
        config
      );
    } catch (error) {
      console.log(error);
    }
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
                productName={name}
                productCategory={category_name}
                productSubCategory={sub_category_name}
                productPrice={price_range}
                productQty={quantity}
                productImg={imageUrl}
                setProductName={setName}
                setProductCategory={setCategory_name}
                setProductSubCategory={setSub_category_name}
                setProductPrice={setPrice_range}
                setProductQty={setQuantity}
                setProductImg={setImageUrl}
                handleSubmit={handleSubmit}
                listCategories={listCategories}
                listSubCatById={listSubCatById}
                selectedCatId={selectedCatId}
                setSelectedCatId={setSelectedCatId}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddNewProduct;
// export default connect(null, { addProduct })(AddNewProduct);
