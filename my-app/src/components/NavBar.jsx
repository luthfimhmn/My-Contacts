import React from 'react';
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="navbar sticky-top navbar-light shadow bg-light">
      <Link to='/'><h3>My Contacts</h3></Link>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/About'>About</Link>
    </nav>
  )
}

export default Navbar;