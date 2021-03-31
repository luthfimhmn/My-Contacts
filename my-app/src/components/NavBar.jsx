import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="navbar sticky-top navbar-light shadow bg-light">
      <h3>Contacts</h3>
      <Router>
        <Link to='/details/1'>Go To detail</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/About'>About</Link>
      </Router>
    </nav>
  )
}

export default Navbar;