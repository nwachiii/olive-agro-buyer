import React from "react";

import { Box, Container, makeStyles } from "@material-ui/core";

//components
import Page from "../../PageTitle/Page";
import PageTitle from "layout-components/PageTitle";
import ShowProducts from "../ShowProducts";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function DeleteProducts() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Delete Products">
      <Container maxWidth={false}>
        <Box mt={3}>
          <PageTitle
            titleHeading="Delete Products"
            titleDescription="Available Categories include: Dry herbs, Flours, Fruits and Vegetables, Drinks, Legumes, Oils, and Spices "
          />
          <ShowProducts />
        </Box>
      </Container>
    </Page>
  );
}

export default DeleteProducts;
