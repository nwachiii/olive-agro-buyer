import React from "react";

import { Box, Container, makeStyles } from "@material-ui/core";

//components
import Page from "../../Page";
import Drinks from "../Drinks";
import DryHerbs from "../DryHerbs";
import FruitsVeg from "../FruitsVeg";
import Flours from "../Flours";
import Legumes from "../Legumes";
import Oils from "../Oils";
import Spices from "../Spices";
import PageTitle from "layout-components/PageTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function AllProducts() {
  const classes = useStyles();
  const ButtonText = "Contact Vendor";
  return (
    <Page className={classes.root} title="All Products">
      <Container maxWidth={false}>
        <Box mt={3}>
          <PageTitle
            titleHeading="All Products"
            titleDescription="Available Categories include: Dry herbs, Flours, Fruits and Vegetables, Drinks, Legumes, Oils, and Spices "
          />
          <DryHerbs ButtonText={ButtonText} />
          <Flours ButtonText={ButtonText} />
          <FruitsVeg ButtonText={ButtonText} />
          <Drinks ButtonText={ButtonText} />
          <Legumes ButtonText={ButtonText} />
          <Oils ButtonText={ButtonText} />
          <Spices ButtonText={ButtonText} />
        </Box>
      </Container>
    </Page>
  );
}

export default AllProducts;

//Use the code below as a guide to consume products in each category; use the filter method(if category_name === category name ? display the response else display null)
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchUsers } from "../redux";

// function UsersContainer({ userData, fetchUsers }) {
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   return userData.loading ? (
//     <h2>Loading</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <h2>Users List</h2>
//       <div>
//         {userData &&
//           userData.users &&
//           userData.users.map((user) => <p>{user.name}</p>)}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
