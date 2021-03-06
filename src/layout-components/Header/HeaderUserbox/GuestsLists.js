import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";

const GuestsLists = () => {
  return (
    <>
      <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
        <ListItem button>
          <Link to="/Login">Login</Link>
        </ListItem>
        <ListItem button>
          <Link to="/Register">Register</Link>
        </ListItem>
      </List>
    </>
  );
};

export default GuestsLists;
