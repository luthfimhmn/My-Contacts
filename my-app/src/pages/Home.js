import { useDispatch, useSelector } from 'react-redux'
import User from '../components/User'
import useFetch from '../helpers/hooks/useFetch';
import Navbar from '../components/NavBar'
import { useEffect } from 'react';


function Home () {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)
  const {data: users} = useFetch('https://reqres.in/api/users')
  dispatch({ type: 'contacts/setContacts', payload: users})


  useEffect(() => {

  }, [contacts.length])
  return (
    <>
      <Navbar/>
      <div className="container">

        <h2>List of Contacts</h2>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((user, index) => {
                return (
                  <User
                    user={user}
                    index={index}
                    key={user.id}>
                  </User>
                )
              })
            }
          </tbody>
        </table><br/><br/>
      </div>
    </>
  )
}

export default Home;