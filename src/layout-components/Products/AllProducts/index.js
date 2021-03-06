import React from "react";

import { Container, makeStyles } from "@material-ui/core";

//components
import Page from "../../PageTitle/Page";
// import Drinks from "../Drinks";
// import DryHerbs from "../DryHerbs";
// import FruitsVeg from "../FruitsVeg";
// import Flours from "../Flours";
// import Legumes from "../Legumes";
// import Oils from "../Oils";
// import Spices from "../Spices";
// import PageTitle from "layout-components/PageTitle";
import ShowProducts from "../ShowProducts";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function AllProducts() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="All Products">
      <Container maxWidth={false}>
        <ShowProducts />
        {/* <DryHerbs ButtonText={ButtonText} />
          <Flours ButtonText={ButtonText} />
          <FruitsVeg ButtonText={ButtonText} />
          <Drinks ButtonText={ButtonText} />
          <Legumes ButtonText={ButtonText} />
          <Oils ButtonText={ButtonText} />
          <Spices ButtonText={ButtonText} /> */}
      </Container>
    </Page>
  );
}

export default AllProducts;
