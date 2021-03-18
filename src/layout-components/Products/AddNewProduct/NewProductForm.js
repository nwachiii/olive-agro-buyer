import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  MenuItem,
  InputLabel,
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

  const getCatId = (arg) => {
    // eslint-disable-next-line
    listCategories.filter((category) => {
      if (category.name === arg) {
        console.log("filter category", category);
        console.log("argument", arg);
        getSubCategories(category._id);
        return category;
      }
    });
  };

  //fetch all categories
  useEffect(() => {
    axios
      .get("https://www.api.oliveagro.org/api/category/list/all")
      .then((response) => {
        //map all category details
        setListCategories(response.data.categories);
        console.log("categories Inside axios", listCategories);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  //fetch subcategory by category ID
  //set id to be the selected category id
  const getSubCategories = async (selectedCatId) => {
    try {
      await axios
        .get(
          `https://www.api.oliveagro.org/api/subCategory/category/${selectedCatId}`
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
    productSubCategory,
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
        <FormControl
          label="Product category"
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel>Select Category</InputLabel>

          <Select
            value={productCategory}
            onChange={(e) => {
              getCatId(productCategory);
              setProductCategory(e.target.value);
            }}
          >
            {!listCategories
              ? null
              : listCategories.map((category, id) => (
                  <MenuItem key={id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl
          label="Product category"
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel>Select Sub-category</InputLabel>

          <Select
            value={productSubCategory}
            onChange={(e) => {
              setProductSubCategory(e.target.value);
            }}
          >
            {listSubCatById.map((subCategory, id) => (
              <MenuItem key={id} value={subCategory.name}>
                {subCategory.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} lg={6}>
        <TextField
          fullWidth
          className="m-2 pl-2"
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
          id="outlined-adornment-amount"
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
