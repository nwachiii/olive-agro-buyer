import React, { Fragment } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

import { IconButton, Box, Tooltip } from "@material-ui/core";

import { connect } from "react-redux";

import projectLogo from "../../../assets/images/Asset 3.png";
import headerText from "../../../assets/images/Asset 4.png";

import { setSidebarToggleMobile } from "../../../redux/reducers/ThemeOptions";

import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const SidebarHeader = (props) => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const { sidebarToggleMobile, setSidebarToggleMobile } = props;

  return (
    <Fragment>
      <div className={clsx("app-sidebar-header", {})}>
        <Box className="header-logo-wrapper" title="Olive Agro">
          <Link to="/Home" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className="header-logo-wrapper-btn"
            >
              <img className="app-sidebar-logo" alt="" src={projectLogo} />
            </IconButton>
          </Link>
          <Box className="">
            <img className="header-logo-text-mobile" alt="" src={headerText} />
          </Box>
        </Box>
        <Box className="app-sidebar-header-btn-mobile">
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
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
