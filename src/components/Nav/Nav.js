// IMPORTS //
// External
import React from "react";
import { Link } from "react-router-dom";

// UTILS //

// COMPONENT //
const Nav = () => (
  <nav>
    <Link to="/">Home</Link>{' '}
    <Link to="/test">Test</Link>{' '}
    <Link to="/asdf">Not Found</Link><br />
  </nav>
);

// PROP-TYPES //
Nav.propTypes = {};

// EXPORTS //
export default Nav;
