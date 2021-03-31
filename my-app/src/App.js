import './App.css';
import React, { useState } from 'react'
import Navbar from './components/NavBar'
import ContactDetail from './pages/ContactDetail'
import Home from './pages/Home'
import PageLogin from './pages/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {

  return (
    <>
      <Navbar/>
      <h1>Login Page</h1>


      <Router>
      <Switch>
        <Route path='/details/:id'>
          <ContactDetail/>
        </Route>
        <Route exact path='/login'>
          <PageLogin/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App;
