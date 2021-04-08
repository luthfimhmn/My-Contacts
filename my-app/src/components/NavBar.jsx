import React from 'react';
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="navbar sticky-top navbar-light shadow bg-light">
      <h3><Link to='/'>My Contacts</Link></h3>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/AddUser'>Add User</Link>
      <Link to='/About'>About</Link>
    </nav>
  )
}

export default Navbar;