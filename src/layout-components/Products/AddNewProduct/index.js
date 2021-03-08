import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Grid,
  Card,
  TextField,
  Divider,
  Button,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//components
import { addProduct } from "../../../redux";
import { ImageUpload } from "./ImageUpload";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  uploadBtnStyle: {
    color: "#000",
    backgroundColor: "lightgray",
    width: "100%",
    fontWeight: 800,
    "&:hover": {
      color: "white",
      backgroundColor: "#0e9146",
      transform: "scale(0.8)",
      transitionDuration: "1s",
    },
    padding: "1em 6px",
    margin: "3px auto",
  },
}));

function AddNewProduct() {
  const classes = useStyles();
  const [product, setProduct] = useState([
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
    setProduct({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct([
      {
        product_name: "",
        product_category: "",
        product_price: "",
        product_img: "",
      },
    ]);
  };

  // const handleCategoryChange = (event) => {
  //   setProduct(event.target.value);
  // };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={6}>
        <Card className="p-4 mb-4">
          <div className="font-size-lg font-weight-bold">Add new product</div>
          <Divider className="my-4" />
          <Grid container>
            <Grid item xs={12} lg={12} spacing={6}>
              <form
                onSubmit={handleSubmit}
                className="d-flex p-3 flex-wrap direction-column"
              >
                <Grid xs={12} lg={6}>
                  <TextField
                    fullWidth
                    className="m-2"
                    id="outlined-basic"
                    label="Product name"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={product.product_name}
                  />
                </Grid>
                <Grid xs={12} lg={6} className="mx-2">
                  <FormControl
                    fullWidth
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel
                      id="demo-simple-select-filled-label"
                      labelWidth={60}
                    >
                      Select Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={product.product_category}
                      onChange={handleInputChange}
                    >
                      <MenuItem value="">
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
                </Grid>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Price
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={product.product_price}
                    onChange={handleInputChange}
                    startAdornment={
                      <InputAdornment position="start">#</InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
                <Grid xs={12} lg={12} placeItems="center">
                  <ImageUpload />
                </Grid>
                <Button
                  size="xl"
                  type="submit"
                  className={classes.uploadBtnStyle}
                  onClick={handleSubmit}
                >
                  UPLOAD PRODUCT
                </Button>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

// export default AddNewProduct;
export default connect(null, { addProduct })(AddNewProduct);
