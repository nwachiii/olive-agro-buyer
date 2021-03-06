import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "@material-ui/styles";

import MuiTheme from "./theme";

// Layout Blueprints

import { LeftSidebar } from "./layout-blueprints";

// layout-components

import Inbox from "./layout-components/Inbox";
import AllOrders from "./layout-components/OliveOrders/AllOrders";
import AllProducts from "./layout-components/Products/AllProducts";
import DeleteProducts from "./layout-components/Products/DeleteProducts";
import ChangeProducts from "./layout-components/Products/ChangeProducts";
import NewProduct from "./layout-components/Products/AddNewProduct";
import PendingVendors from "./layout-components/Vendors/PendingVendors";
import RegisteredVendors from "./layout-components/Vendors/RegisteredVendors";

const Home = lazy(() => import("./layout-components/Home"));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.7,
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load your dashboard
              </div>
            </div>
          }
        >
          <Switch>
            <Redirect exact from="/" to="/Home" />

            <Route
              path={[
                "/Home",

                "/Inbox",
                "/AllProducts",
                "/DeleteProducts",
                "/ChangeProducts",
                "/NewProduct",
                "/PendingVendors",
                "/RegisteredVendors",
                "/Notifications",
              ]}
            >
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route path="/Home" component={Home} />
                    <Route path="/Inbox" component={Inbox} />
                    <Route path="/AllOrders" component={AllOrders} />
                    <Route path="/AllProducts" component={AllProducts} />
                    <Route path="/DeleteProducts" component={DeleteProducts} />
                    <Route path="/ChangeProducts" component={ChangeProducts} />
                    <Route path="/NewProduct" component={NewProduct} />
                    <Route path="/PendingVendors" component={PendingVendors} />
                    <Route
                      path="/RegisteredVendors"
                      component={RegisteredVendors}
                    />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
