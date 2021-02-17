import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from '../../../Page';
import Toolbar from '../../../Toolbar';
import Results from './Results';
import data from './data';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const PendingVendors = () => {
  const classes = useStyles();
  const [PendingVendors] = useState(data);

  return (
    <Page className={classes.root} title="Pending Vendors">
      <Container maxWidth={false}>
        <Toolbar componentTitle="Pending Vendors" />
        <Box mt={3}>
          <Results PendingVendors={PendingVendors} />
        </Box>
      </Container>
    </Page>
  );
};

export default PendingVendors;
