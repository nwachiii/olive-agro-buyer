import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import data from '../PendingVendors/data'

import cacDocument from 'assets/documents/cac-document-sample.jpg';
import driversLicense from 'assets/documents/drivers-license-sample.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '2em'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);

// const VendorData = data;

function VendorInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* {VendorData.map(vendorInfo => (        ))}
       */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <img className="card-img" src={cacDocument} alt="" />
          <h5 className="card-title font-weight-bold font-size-md flex-wrap pt-3 px-3">
            CAC Document
          </h5>
        </Grid>
        <Grid item xs={12} sm={12}>
          <img className="card-img" src={driversLicense} alt="" />
          <h5 className="card-title font-weight-bold font-size-md flex-wrap pt-3 px-3">
            Director's ID
          </h5>
        </Grid>
      </Grid>
    </div>
  );
}

export default VendorInfo;
