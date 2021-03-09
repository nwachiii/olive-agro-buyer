import React from "react";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Grid,
  TextField,
  Button,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//components
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
      transitionDuration: "1.5s",
    },
    padding: "1em 6px",
    margin: "3px auto",
  },
}));
const NewProductForm = (productProps) => {
  const {
    handleSubmit,
    handleInputChange,
    productPrice,
    productCategory,
    productName,
  } = productProps;
  const classes = useStyles();
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex p-3 flex-wrap direction-column"
    >
      <Grid item xs={12} lg={6}>
        <TextField
          fullWidth
          className="m-2"
          id="outlined-basic"
          label="Product name"
          variant="outlined"
          onChange={handleInputChange}
          value={productName}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-filled-label">
            Select Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          >
            <MenuItem value={productCategory} onChange={handleInputChange}>
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
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={productPrice}
          onChange={handleInputChange}
          startAdornment={<InputAdornment position="start">#</InputAdornment>}
        />
      </FormControl>
      <Grid item xs={12} lg={12}>
        <ImageUpload />
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
