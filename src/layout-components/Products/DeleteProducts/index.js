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
          <Legumes ButtonText="Delete" />
          <DryHerbs ButtonText="Delete" />
          <FruitsVeg ButtonText="Delete" />
          <Flours ButtonText="Delete" />
          <Drinks ButtonText="Delete" />
          <Oils ButtonText="Delete" />
          <Spices ButtonText="Delete" />
        </Box>
      </Container>
    </Page>
  );
}

export default DeleteProducts;
