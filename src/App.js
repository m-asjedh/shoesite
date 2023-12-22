import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  const pathsWithoutNavbar = ["/login", "/register"];
  const pathsWithoutFooter = ["/login", "/register", "/cart"];

  const displayNavbar = !pathsWithoutNavbar.includes(location.pathname);
  const displayFooter = !pathsWithoutFooter.includes(location.pathname);

  return (
    <div>
      {displayNavbar && <Navbar />}
      <Outlet />
      {displayFooter && <Footer />}
    </div>
  );
};

export default App;
