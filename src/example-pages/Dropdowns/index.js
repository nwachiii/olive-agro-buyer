import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

export default function Dropdowns() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Dropdowns"
        titleDescription="A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list."
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}></Grid>
      </Grid>
    </Fragment>
  );
}
