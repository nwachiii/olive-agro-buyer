import React, { Fragment } from 'react';

import clsx from 'clsx';

import { Paper } from '@material-ui/core';

import { connect } from 'react-redux';

const Footer = props => {
  const { footerFixed } = props;
  return (
    <Fragment>
      <Paper
        square
        className={clsx('app-footer text-black-50', {
          'app-footer--fixed': footerFixed
        })}>
        <div className="app-footer--inner">
          {/* <div className="app-footer--first">
            <List dense className="d-flex align-items-center">
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component="a"
                href="https://uifort.com/template/carolina-react-admin-dashboard-material-ui-free"
                target="_blank"
                rel="noopener noreferrer">
                <ListItemText primary="Purchase now" />
              </ListItem>
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component="a"
                href="https://uifort.com/template/carolina-react-admin-dashboard-material-ui-pro"
                target="_blank"
                rel="noopener noreferrer">
                <ListItemText primary="View PRO Version" />
              </ListItem>
            </List>
          </div> */}
          <div className="app-footer--second">
            <span>A React-redux Admin Dashboard with Material-UI</span> © 2020 -
            crafted with <span className="text-danger px-1">❤</span> by{' '}
            <a
              href="https://doshservices.com"
              rel="noopener noreferrer"
              target="_blank"
              title="UiFort.com">
              doshservices.com
            </a>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed
});
export default connect(mapStateToProps)(Footer);
