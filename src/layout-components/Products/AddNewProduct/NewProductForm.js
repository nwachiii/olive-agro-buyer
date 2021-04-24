import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  OutlinedInput,
  FormControl,
} from "@material-ui/core";

//components
import { useStyles } from "./theme";

const NewProductForm = (productProps) => {
  const classes = useStyles();
  const [listCategories, setListCategories] = useState([]);
  const [listSubCatById, setListSubCatById] = useState([]);
  const [currentCatId, setCurrentCatId] = useState(null);

  //fetch all categories
  useEffect(() => {
    axios
      .get("https://www.api.oliveagro.org/api/category/list/all")
      .then((response) => {
        //map all category details
        setListCategories(response.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  //fetch subcategory by category ID
  //set id to be the selected category id
  const getCatId = async (categoryId) => {
    console.log(listCategories);
    console.log("Category Id arg:", categoryId);

    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // eslint-disable-next-line
    try {
      await axios
        .get(
          `https://www.api.oliveagro.org/api/subCategory/category/${categoryId}`,
          config
        )
        .then((response) => {
          setListSubCatById(response.data.subCategory);
          console.log("Get sub categories", listSubCatById);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const {
    productName,
    productCategory,
    productPrice,
    productQty,
    productImg,
    setProductName,
    setProductCategory,
    setProductSubCategory,
    setProductPrice,
    setProductQty,
    setProductImg,
    handleSubmit,
    formStyles,
  } = productProps;

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex p-3 flex-wrap direction-column"
    >
      <Grid item xs={12} lg={6}>
        <TextField
          fullWidth
          className="m-2 pr-2"
          id="outlined-basic"
          label="Product name"
          variant="outlined"
          defaultValue={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <div style={formStyles.formInput}>
          <select
            onChange={(e) => {
              setProductCategory(e.target.value);
              // getCatId(e.target.value);
              // getCatId(currentCatId);
            }}
            style={formStyles.input}
          >
            <option value="" selected disabled hidden>
              Select Category
            </option>
            {!listCategories.length ? (
              <h4 className={classes.textColor}>
                Please check your network connection and ensure you are logged
                in
              </h4>
            ) : (
              listCategories.map((category, id) => (
                <option
                  key={id}
                  value={category.name}
                  // value={category._id}
                  // onChange={(e) => setCurrentCatId(category._id)}
                >
                  {category.name}
                </option>
              ))
            )}
          </select>
        </div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div style={formStyles.formInput}>
          <select
            style={formStyles.input}
            onChange={(e) => {
              setProductSubCategory(e.target.value);
            }}
          >
            <option value="" selected disabled hidden>
              Select Sub-category
            </option>
            {!listSubCatById.length
              ? "null"
              : listSubCatById.map((subCategory, id) => (
                  <option key={id} value={subCategory.name}>
                    {subCategory.name}
                  </option>
                ))}
          </select>
        </div>
      </Grid>

      <Grid item xs={12} lg={6}>
        <TextField
          fullWidth
          className="m-2 pl-2 pr-2"
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          defaultValue={productQty}
          onChange={(e) => setProductQty(e.target.value)}
        />
      </Grid>
      <FormControl
        label="Product Price"
        fullWidth
        className={classes.margin}
        variant="outlined"
      >
        <OutlinedInput
          defaultValue={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          startAdornment={<InputAdornment position="start">#</InputAdornment>}
        />
      </FormControl>
      <Grid item xs={12} lg={12} className="d-flex flex-column my-3 ml-2">
        <label className="text-ash">Product Image: </label>
        <input
          type="file"
          placeholder=""
          name={productImg}
          onChange={(e) => setProductImg(e.target.files[0])}
          required
        />
      </Grid>
      <Button
        size="large"
        type="submit"
        className={classes.uploadBtnStyle}
        onClick={handleSubmit}
      >
        UPLOAD PRODUCT
      </Button>
    </form>
  );
};

export default NewProductForm;
