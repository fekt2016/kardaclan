import React from "react";
import Nav from "../Layout/Nav";
import { Outlet } from "react-router-dom";

import Footer from "../Layout/Footer";


const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
