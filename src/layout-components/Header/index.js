import React, { Fragment } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

import { Hidden, IconButton, AppBar, Box, Tooltip } from "@material-ui/core";

import { connect } from "react-redux";

import { setSidebarToggleMobile } from "../../redux/reducers/ThemeOptions";
import projectLogo from "../../assets/images/Asset 3.png";

import HeaderLogo from "./HeaderLogo";
import HeaderUserbox from "./HeaderUserbox";

import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { Notifications } from "@material-ui/icons";

const Header = (props) => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  const {
    headerShadow,
    headerFixed,
    sidebarToggleMobile,
    setSidebarToggleMobile,
  } = props;

  return (
    <Fragment>
      <AppBar
        color="secondary"
        className={clsx("app-header", {})}
        position={headerFixed ? "fixed" : "absolute"}
        elevation={headerShadow ? 11 : 3}
      >
        {!props.isCollapsedLayout && <HeaderLogo />}
        <Box className="app-header-toolbar">
          <Hidden lgUp>
            <Box
              className="app-logo-wrapper"
              title="Olive Agro Amin's Dashboard"
            >
              <Link to="/Home" className="app-logo-link">
                <IconButton
                  color="primary"
                  size="medium"
                  className="app-logo-btn"
                >
                  <img
                    className="app-logo-img"
                    alt="olive agro project"
                    src={projectLogo}
                  />
                </IconButton>
              </Link>
              <Hidden smDown>
                <Box className="app-logo-text">OLIVE AGRO</Box>
              </Hidden>
            </Box>
          </Hidden>
          <Hidden smDown>
            <Box className="app-logo-text d-flex align-items-center">
              VENDOR'S DASHBOARD
            </Box>
          </Hidden>
          <Box className="d-flex align-items-center">
            <Notifications style={{ color: "#95c53e", cursor: "pointer" }} />
            <HeaderUserbox />
            <Box className="toggle-sidebar-btn-mobile">
              <Tooltip title="Toggle Sidebar" placement="right">
                <IconButton
                  color="inherit"
                  onClick={toggleSidebarMobile}
                  size="medium"
                >
                  {sidebarToggleMobile ? (
                    <MenuOpenRoundedIcon />
                  ) : (
                    <MenuRoundedIcon />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  headerShadow: state.ThemeOptions.headerShadow,
  headerFixed: state.ThemeOptions.headerFixed,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
