import React from "react";
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
    listCategories,
    listSubCatById,
    selectedCatId,
    setSelectedCatId,
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
          <InputLabel id="demo-simple-select-filled-label">
            Select Category
          </InputLabel>

          <Select
            // id={id}
            value={productCategory ? productCategory : ""}
            onChange={(e) => {
              setProductCategory(e.target.value);
              // setSelectedCatId();
              console.log(productCategory);
            }}
          >
            {listCategories === undefined ? (
              <h6 className={classes.textColor}>" Loading... "</h6>
            ) : (
              listCategories.map((category, id) => (
                <MenuItem key={id} value={category.name ? category.name : ""}>
                  {category.name}
                  {productName === category.name &&
                    setSelectedCatId(category._id)}
                  {/* {console.log("productName: ", productName)}
                  {console.log("catId / key:", category._id)}
                  {console.log("SelectedCatId: ", selectedCatId)} */}
                </MenuItem>
              ))
            )}
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
          <InputLabel id="demo-simple-select-filled-label">
            Select Sub-category
          </InputLabel>

          <Select
            // id={id}
            value={productSubCategory ? productSubCategory : ""}
            onChange={(e) => {
              setProductSubCategory(e.target.value);
            }}
          >
            {listSubCatById === undefined ? (
              <h6 className={classes.textColor}>
                " Please select a category... "
              </h6>
            ) : (
              listSubCatById.map((subCategory, id) => (
                <MenuItem
                  key="id"
                  value={subCategory.name ? subCategory.name : ""}
                >
                  {subCategory.name}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Grid>
      {/* <Grid item xs={12} lg={6}>
         <FormControl
          label="Product category"
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-filled-label">
            Select Sub-category
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            defaultValue={productSubCategory || ""}
            onChange={(e) => setProductSubCategory(e.target.value)}
          >
            <MenuItem value="" disabled>
              <em>None</em>
            </MenuItem>
            <MenuItem value="Fruits/Vegs">Fruits/Vegs</MenuItem>
            <MenuItem value="Drinks">Drinks</MenuItem>
            <MenuItem value="Dry Herbs">Dry Herbs</MenuItem>
            <MenuItem value="Flours">Flours</MenuItem>
            <MenuItem value="Legumes">Legumes</MenuItem>
            <MenuItem value="Oils">Oils</MenuItem>
            <MenuItem value="Spices">Spices</MenuItem>
          </Select>
        </FormControl>
      </Grid> */}

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
