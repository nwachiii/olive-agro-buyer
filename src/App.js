import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/config/configureStore";
import { Provider } from "react-redux";
import Routes from "./Routes";
import ScrollToTop from "./utils/ScrollToTop";
import "./assets/base.scss";
import CssBaseline from "@material-ui/core/CssBaseline";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/olive-agro/">
          <CssBaseline />
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
