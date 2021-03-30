import './App.css';
import React, { useEffect, useState } from 'react'
import User from './components/User'
import FormUser from './components/FormUser'

function App () {
  const [name] = useState('Luthfi')
  const [users, setUsers] = useState([])

  function fetchUsers () {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }

  function addUser (user) {
    setUsers(users.concat(user))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="container">
      <h1>Fetch User by {name}</h1>

      <h2>List of User</h2>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
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

export default App;
