import React, { useState } from 'react';
import { Grid, Card, TextField, Divider, Button } from '@material-ui/core';

function AddCategory() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newCategory = {
      id: new Date().getTime(),
      text: category
    };

    setCategories([...categories].concat(newCategory));
    setCategory('');
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={6}>
        <Card className="p-4 mb-4">
          <div className="font-size-lg font-weight-bold">Add category</div>
          <Divider className="my-4" />
          <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
              <form
                onSubmit={handleSubmit}
                className="d-flex p-3 flex-wrap direction-column">
                <TextField
                  fullWidth
                  className="m-2"
                  id="outlined-basic"
                  label="category name"
                  variant="outlined"
                  onChange={e => setCategory(e.target.value)}
                  value={category}
                />
                <Button
                  className="px-6 mx-auto my-3"
                  size="xl"
                  variant="contained"
                  type="submit"
                  style={{ color: 'white', backgroundColor: '#0e9146' }}>
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

export default AddCategory;
