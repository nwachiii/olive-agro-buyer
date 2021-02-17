import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  Box,
  Menu,
  Button,
  List,
  ListItem,
  Divider,
  Hidden
} from '@material-ui/core';

// import avatar5 from '../../assets/images/avatars/avatar5.jpg';
export default function HeaderUserbox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userName = 'Daudu Gbenga';
  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <Box className="d-flex flex-wrap">
          <Hidden smDown>
            <h6 className="text-white-80 text-center my-auto mx-3">
              Hi, {userName}{' '}
            </h6>
          </Hidden>
          <Avatar sizes="44" alt="Daudu Gbenga" src={Avatar} />
        </Box>
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">{userName}</div>
          <span className="text-white-50">Agricultural Engineer</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-3">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
              <Avatar sizes="44" alt="Daudu Gbenga" src={Avatar} />
            </Box>
            <div className="pl-3  pr-3">
              <div className="font-weight-bold text-center pt-2 pb-1 line-height-1">
                {userName}
              </div>
              <span className="text-black-80 text-center pt-2">
                Agricultural Engineer
              </span>
            </div>
            <Divider className="w-100 mt-2" />
            <ListItem button>My Account</ListItem>
            <ListItem button>Profile settings</ListItem>
            <ListItem button>Active sales</ListItem>
            <Divider className="w-100 my-2" />
            <ListItem button>Settings</ListItem>
            <ListItem button>Log out</ListItem>
          </List>
        </div>
      </Menu>
    </Fragment>
  );
}
