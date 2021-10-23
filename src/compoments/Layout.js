import React from "react";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import Main from "./Main";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <NavBar />
      <SideNav />
      <Main />
      <Footer />
    </div>
  );
}
export default Layout;
