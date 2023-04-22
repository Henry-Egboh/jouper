import { Outlet } from "react-router-dom";
import Sidebar from "../otherComp/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Grid templateColumns='repeat(6, 1fr)' columnGap={4}>
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={5}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
