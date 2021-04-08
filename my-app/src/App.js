import {Suspense, lazy, useEffect} from 'react';
import './App.css';
import {
  Home,
  PageLogin,
  ContactDetail,
  Favorites,
  AddUser
} from './pages/'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setContactsAsync } from './store/actions/contacts';

const About = lazy(() => import('./pages/About'));

function App () {
  const url = 'https://reqres.in/api/users'
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContactsAsync(url))
  }, [url, dispatch])

  return (
    <>
      <Router>
      <Switch>
        <Suspense fallback={<div>Loading..</div>}>
        <Route exact path='/adduser'>
          <AddUser/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>
        <Route path='/about' component={About}/>
        <Route path='/details/:id'>
          <ContactDetail/>
        </Route>
        <Route exact path='/login'>
          <PageLogin/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        </Suspense>
      </Switch>
    </Router>
  </>
  )
}

export default App;
