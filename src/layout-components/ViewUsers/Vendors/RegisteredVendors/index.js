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

const RegisteredVendors = () => {
  const classes = useStyles();
  const [RegisteredVendors] = useState(data);

  return (
    <Page className={classes.root} title="Registered Vendors">
      <Container maxWidth={false}>
        <Toolbar componentTitle="Registered Vendors" />
        <Box mt={3}>
          <Results RegisteredVendors={RegisteredVendors} />
        </Box>
      </Container>
    </Page>
  );
};

export default RegisteredVendors;
