import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

//components
import Page from '../../Page';
import Drinks from '../Drinks';
import DryHerbs from '../DryHerbs';
import FruitsVeg from '../FruitsVeg';
import Flours from '../Flours';
import Legumes from '../Legumes';
import Oils from '../Oils';
import Spices from '../Spices';
import PageTitle from 'layout-components/PageTitle';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

function ChangeProducts() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Change Products">
      <Container maxWidth={false}>
        <Box mt={3}>
          <PageTitle
            titleHeading="Change Products"
            titleDescription="Available Categories include: Dry herbs, Flours, Fruits and Vegetables, Drinks, Legumes, Oils, and Spices "
          />
          <FruitsVeg ButtonText="Edit Product" />
          <Flours ButtonText="Edit Product" />
          <DryHerbs ButtonText="Edit Product" />
          <Drinks ButtonText="Edit Product" />
          <Legumes ButtonText="Edit Product" />
          <Spices ButtonText="Edit Product" />
          <Oils ButtonText="Edit Product" />
        </Box>
      </Container>
    </Page>
  );
}

export default ChangeProducts;
