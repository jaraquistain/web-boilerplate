// IMPORTS //
// External
import React from "react";
import { Link } from "react-router-dom";

// UTILS //

// COMPONENT //
const Nav = (props) => (
  <nav>
    <Link to="/">Home</Link>{' '}
    <Link to="/a">Not Found</Link><br />
  </nav>
);

// PROP-TYPES //
Nav.propTypes = {};

// EXPORTS //
export default Nav;