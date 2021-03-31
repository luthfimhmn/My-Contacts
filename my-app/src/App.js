import './App.css';
import {
  Home,
  PageLogin,
  ContactDetail,
  About
} from './pages/'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {

  return (
    <>
      <Router>
      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
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
