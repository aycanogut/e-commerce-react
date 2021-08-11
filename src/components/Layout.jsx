import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {

  const history = useHistory();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (history.location.pathname === '/') {
      setIsHome(true);
    }
  }, [])


  return (
    <div>
      {isHome ? <Header /> : <Navbar />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
