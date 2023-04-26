import { Outlet } from "react-router-dom";
import Sidebar from "../otherComp/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../otherComp/NavBar";
import Footer from "../otherComp/Footer";

const Layout = () => {
  return (
    <>
      <Grid>
        <NavBar />
      <Grid templateColumns='repeat(6, 1fr)' columnGap={{base: '0rem', lg: '2rem'}}>
        <GridItem as='aside' colSpan={1} hideBelow='md'>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={5}>
          <Outlet />
        </GridItem>
      </Grid>
      <Footer />
      </Grid>
    </>
  );
};

export default Layout;
