import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { IconButton, Box } from '@material-ui/core';

import projectLogo from '../../assets/images/Asset 2.png';
import headerText from '../../assets/images/Asset 4.png';

const HeaderLogo = () => {
  return (
    <Fragment>
      <div className={clsx('app-header-logo', {})}>
        <Box className="header-logo-wrapper" title="Olive Agro App">
          <Link to="/DashboardDefault" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className="header-logo-wrapper-btn">
              <img
                className="app-header-logo-img"
                alt="Olive Agro "
                src={projectLogo}
              />
            </IconButton>
          </Link>
          <Box className="">
            <img
              className="header-logo-text"
              alt="Olive Agro "
              src={headerText}
            />
          </Box>
        </Box>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
