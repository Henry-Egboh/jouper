import { Outlet } from "react-router-dom";
import Sidebar from "../otherComp/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Grid templateColumns='repeat(6, 1fr)'>
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
