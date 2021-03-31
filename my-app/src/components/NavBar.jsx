import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Navbar (props) {
  return (
    <nav className="navbar sticky-top navbar-light shadow bg-light">
      <h3>Fetch User by {props.name}</h3>
      <Router>
        <Link to='/details/1'>Go To detail</Link>
      </Router>
    </nav>
  )
}

export default Navbar;