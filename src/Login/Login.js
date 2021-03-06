import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

//components
import { login } from "../redux/actions/auth";

const VendorLogin = ({ login, isAuthenticated }) => {
  // login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const paperStyle = {
    padding: 30,
    minHeight: 300,
    maxHeight: "auto",
    width: 380,
    maxWidth: "100vw",
    margin: "100px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e", marginBottom: "1em" };
  const btnstyle = {
    margin: "12px 0",
    color: "white",
    backgroundColor: "#0e9146",
  };
  const textfieldStyle = { margin: "1em 0", backgroundColor: "white" };

  // redirect if login
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MetaTags>
        <title>Olive Agro | Login</title>
        <meta
          name="description"
          content="Login and Register page for olive agro admin "
        />
      </MetaTags>

      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h4>Vendor Login</h4>
          </Grid>
          <form onSubmit={(e) => handleSubmit(e)}>
            <TextField
              type="email"
              value={email}
              placeholder="eee@gmail.com"
              label="email"
              name="email"
              onChange={(e) => handleChange(e)}
              fullWidth
              required
              style={textfieldStyle}
            />
            <TextField
              type="password"
              placeholder="************"
              value={password}
              label="password"
              name="password"
              onChange={(e) => handleChange(e)}
              style={textfieldStyle}
              // minLength='6'
              fullWidth
              required
            />
            <Typography className="my-2">
              <Link to="/">Forgot password ?</Link>
            </Typography>
            <div className="button-box">
              <Button type="submit" style={btnstyle} fullWidth>
                Log in
              </Button>
            </div>
            <div className="text-center my-3">
              <Link to="/Register">Don't have an account yet? Register</Link>
            </div>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

VendorLogin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(VendorLogin);
