import React from "react";

const Footer = ({ copyright }) => (
  <nav className="navbar navbar-dark bg-dark">
    <h4 className="text-white">&copy; {copyright}</h4>
  </nav>
);

export default Footer;
