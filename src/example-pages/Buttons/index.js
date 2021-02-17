import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import ButtonsBasic from '../../example-components/Buttons/ButtonsBasic';
import ButtonsGroups from '../../example-components/Buttons/ButtonsGroups';
import ButtonsGroupsSizing from '../../example-components/Buttons/ButtonsGroupsSizing';
import ButtonsColors from '../../example-components/Buttons/ButtonsColors';
import ButtonsLinks from '../../example-components/Buttons/ButtonsLinks';
import ButtonsOutline from '../../example-components/Buttons/ButtonsOutline';
import ButtonsSizing from '../../example-components/Buttons/ButtonsSizing';
export default function Buttons() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Buttons"
        titleDescription="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
      />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ButtonsBasic />
          <div className="divider my-2" />
          <ButtonsSizing />
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="text-center">
            <ButtonsGroups />
            <div className="divider my-2" />
            <ButtonsGroupsSizing />
          </div>
        </Grid>
        <Grid item xs={12}>
          <ButtonsColors />
        </Grid>
      </Grid>

      <ButtonsLinks />

      <ButtonsOutline />
    </Fragment>
  );
}
