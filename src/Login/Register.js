import PropTypes from "prop-types";
import React, { useState } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

//components
import { register } from "../redux/actions/auth";

const VendorRegister = ({ register, isAuthenticated }) => {
  let history = useHistory();

  // Register
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    password2,
  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register({ firstName, lastName, email, phoneNumber, password });
    console.log(formData);
    console.log("form submitted");
    history.push("/Login");
  };

  const paperStyle = {
    padding: 20,
    minHeight: 300,
    maxHeight: "auto",
    width: 580,
    maxWidth: "100vw",
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e", marginBottom: "1em" };
  const btnstyle = {
    margin: "8px 0",
    color: "white",
    backgroundColor: "#0e9146",
  };
  const textfieldStyle = { margin: "8px 0", backgroundColor: "white" };

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
          content="Register page for olive agro admin "
        />
      </MetaTags>

      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h4>Vendor Registration</h4>
          </Grid>
          <form onSubmit={(e) => onSubmit(e)}>
            <TextField
              type="text"
              value={firstName}
              placeholder="First Name"
              label="firstName"
              name="firstName"
              onChange={(e) => onChange(e)}
              fullWidth
              required
              style={textfieldStyle}
            />
            <TextField
              className="p"
              type="text"
              value={lastName}
              placeholder="Last Name"
              label="lastName"
              name="lastName"
              onChange={(e) => onChange(e)}
              fullWidth
              required
              style={textfieldStyle}
            />
            <TextField
              type="email"
              value={email}
              placeholder="eee@gmail.com"
              label="email"
              name="email"
              onChange={(e) => onChange(e)}
              fullWidth
              required
              style={textfieldStyle}
            />
            <TextField
              type="tel"
              value={phoneNumber}
              placeholder="08012345678"
              label="phoneNumber"
              name="phoneNumber"
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
              fullWidth
              required
              style={textfieldStyle}
            />
            <TextField
              type="password"
              placeholder="************"
              value={password2}
              label="confirm password"
              name="password2"
              onChange={(e) => onChange(e)}
              // minLength='6'
              fullWidth
              required
              style={textfieldStyle}
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" style={btnstyle} fullWidth>
              Register
            </Button>
            <div className="text-center my-4">
              <Link to="/Login">Already have an account? Log in</Link>
            </div>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

VendorRegister.propTypes = {
  location: PropTypes.object,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register })(VendorRegister);
