import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';

// Example Pages

import Buttons from './example-pages/Buttons';
import NavigationMenus from './example-pages/NavigationMenus';
import Pagination from './example-pages/Pagination';
import Inbox from './layout-components/Inbox';
import Badges from './example-pages/Badges';
import Icons from './example-pages/Icons';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables4 from './example-pages/RegularTables4';
import AllOrders from './layout-components/OliveOrders/AllOrders';
import AddCategory from './layout-components/Products/AddCategory';
import FruitsVeg from './layout-components/Products/FruitsVeg';
import Drinks from './layout-components/Products/Drinks';
import Spices from './layout-components/Products/Spices';
import DryHerbs from './layout-components/Products/DryHerbs';
import Legumes from './layout-components/Products/Legumes';
import Flours from './layout-components/Products/Flours';
import Oils from './layout-components/Products/Oils';
import Customers from './layout-components/ViewUsers/Customers';
import PendingVendors from './layout-components/ViewUsers/Vendors/PendingVendors';
import RegisteredVendors from './layout-components/ViewUsers/Vendors/RegisteredVendors';

const Home = lazy(() => import('./layout-components/Home'));
const Cards3 = lazy(() => import('./example-components/Cards3'));
const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const Accordions = lazy(() => import('./example-pages/Accordions'));
const Modals = lazy(() => import('./example-pages/Modals'));
const Notifications = lazy(() => import('./example-pages/Notifications'));
const Popovers = lazy(() => import('./example-pages/Popovers'));
const Tabs = lazy(() => import('./example-pages/Tabs'));
const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));
const Maps = lazy(() => import('./example-pages/Maps'));
const ListGroups = lazy(() => import('./example-pages/ListGroups'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.7
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
          }>
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route path={['/LandingPage']}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/LandingPage" component={LandingPage} />
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>

            <Route
              path={[
                '/Home',
                '/Buttons',
                '/Dropdowns',
                '/NavigationMenus',
                '/Pagination',
                '/Inbox',
                '/AddCategory',
                '/FruitsVeg',
                '/Spices',
                '/Drinks',
                '/DryHerbs',
                '/Legumes',
                '/Oils',
                '/Flours',
                '/PendingVendors',
                '/RegisteredVendors',
                '/Customers',
                '/Notifications',
                '/Popovers',
                '/Tabs',
                '/AllOrders'
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/Home" component={Home} />
                    <Route path="/Buttons" component={Buttons} />
                    <Route
                      path="/NavigationMenus"
                      component={NavigationMenus}
                    />
                    <Route path="/Pagination" component={Pagination} />
                    <Route path="/Inbox" component={Inbox} />
                    <Route path="/Badges" component={Badges} />
                    <Route path="/Icons" component={Icons} />
                    <Route
                      path="/UtilitiesHelpers"
                      component={UtilitiesHelpers}
                    />
                    <Route path="/Cards3" component={Cards3} />
                    <Route path="/Accordions" component={Accordions} />
                    <Route path="/Modals" component={Modals} />
                    <Route path="/Notifications" component={Notifications} />
                    <Route path="/Popovers" component={Popovers} />
                    <Route path="/Tabs" component={Tabs} />
                    <Route path="/RegularTables1" component={RegularTables1} />
                    <Route path="/RegularTables4" component={RegularTables4} />
                    <Route path="/AllOrders" component={AllOrders} />
                    <Route path="/AddCategory" component={AddCategory} />
                    <Route path="/FruitsVeg" component={FruitsVeg} />
                    <Route path="/Spices" component={Spices} />
                    <Route path="/Drinks" component={Drinks} />
                    <Route path="/DryHerbs" component={DryHerbs} />
                    <Route path="/Legumes" component={Legumes} />
                    <Route path="/Oils" component={Oils} />
                    <Route path="/Flours" component={Flours} />
                    <Route path="/PendingVendors" component={PendingVendors} />
                    <Route
                      path="/RegisteredVendors"
                      component={RegisteredVendors}
                    />
                    <Route path="/Customers" component={Customers} />
                    <Route path="/ApexCharts" component={ApexCharts} />
                    <Route path="/Maps" component={Maps} />
                    <Route path="/ListGroups" component={ListGroups} />
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
