import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="container mx-auto mt-4">
      <Navbar />
      {children}
      <br />
    </div>
  );
}

export default Layout;
