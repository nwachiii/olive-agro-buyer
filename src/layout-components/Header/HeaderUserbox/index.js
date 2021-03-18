import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Avatar, Box, Menu, Button, Hidden } from "@material-ui/core";

import { logout } from "../../../redux/actions/auth";
import AuthLists from "./AuthLists";
import GuestsLists from "./GuestsLists";

function HeaderUserbox({ auth, logout }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //get authenticated user
  const { isAuthenticated } = auth;
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center"
      >
        <Box className="d-flex flex-wrap">
          <Hidden smDown>
            <h6 className="text-white-80 text-center my-auto mx-3">
              {user ? `Welcome, ${user.firstName}` : ""}
            </h6>
          </Hidden>
          <Avatar sizes="44" alt={user ? user.firstName : ""} />
        </Box>
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">
            {user ? ` ${user.firstName}  ${user.lastName}` : ""}
          </div>
          <span className="text-white-50 text-center">Vendor</span>
        </div>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        onClose={handleClose}
        className="ml-2"
      >
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-3">
          {isAuthenticated ? (
            <AuthLists userName={user.firstName} logout={logout} />
          ) : (
            <GuestsLists />
          )}
        </div>
      </Menu>
    </Fragment>
  );
}

HeaderUserbox.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(HeaderUserbox);
