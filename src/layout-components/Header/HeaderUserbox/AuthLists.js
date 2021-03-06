import React from "react";
import { Link } from "react-router-dom";
import { Box, Avatar, List, ListItem, Divider } from "@material-ui/core";

const AuthLists = ({ userName, logout }) => {
  return (
    <>
      <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
        <Box>
          <Avatar sizes="44" alt={userName} src={Avatar} />
        </Box>
        <div className="pl-3  pr-3">
          <div className="font-weight-bold text-center pt-2 pb-1 line-height-1">
            {userName}
          </div>
          <span className="text-black-80 text-center pt-2">Admin</span>
        </div>
        <Divider className="w-100 mt-2" />
        <ListItem button>My Account</ListItem>
        <ListItem button>Settings</ListItem>
        <ListItem button>
          <Link to="/Login" onClick={logout}>
            Log out
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default AuthLists;
