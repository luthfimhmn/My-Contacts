import React from 'react';

function Navbar (props) {
  return (
    <nav className="navbar sticky-top navbar-light shadow bg-light">
      <h3>Fetch User by {props.name}</h3>
    </nav>
  )
}

export default Navbar;