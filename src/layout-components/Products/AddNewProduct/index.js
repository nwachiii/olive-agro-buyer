import React, { useState } from 'react';
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
  OutlinedInput
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ImageUpload from './ImageUpload';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  margin: {
    margin: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function AddNewProduct() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState('');
  const [values, setValues] = useState({
    price: ''
  });

  const handlePriceChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newProduct = {
      id: new Date().getTime(),
      text: product
    };

    setProducts([...products].concat(newProduct));
    setProduct('');
  };

  const [category, setCategory] = useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };
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
                className="d-flex p-3 flex-wrap direction-column">
                <Grid xs={12} lg={6}>
                  <TextField
                    fullWidth
                    className="m-2"
                    id="outlined-basic"
                    label="Product name"
                    variant="outlined"
                    onChange={e => setProduct(e.target.value)}
                    value={product}
                  />
                </Grid>
                <Grid xs={12} lg={6} className="mx-2">
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}>
                    <InputLabel
                      id="demo-simple-select-filled-label"
                      labelWidth={60}>
                      Select Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={category}
                      onChange={handleChange}>
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
                  variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Price
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.price}
                    onChange={handlePriceChange('price')}
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
                  className="px-6 mx-auto my-3"
                  size="xl"
                  variant="contained"
                  type="submit"
                  style={{
                    color: 'white',
                    backgroundColor: '#0e9146',
                    width: '100%'
                  }}>
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddNewProduct;
