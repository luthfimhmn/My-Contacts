import { useDispatch } from 'react-redux'
import User from '../components/User'
import FormUser from '../components/FormUser'
import useFetch from '../helpers/hooks/useFetch';
import Navbar from '../components/NavBar'


function Home () {
  const {data: users, setData: setUsers} = useFetch('https://reqres.in/api/users')
  const dispatch = useDispatch();
  dispatch({ type: 'contacts/setContacts', payload: users})

  function addUser (user) {
    setUsers(users.concat(user))
  }

  return (
    <div className="container">
      <Navbar/>

      <h2>List of User</h2>
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
            users.map((user, index) => {
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

      <FormUser addUser={addUser} users={users}></FormUser>
    </div>
  )
}

export default Home;