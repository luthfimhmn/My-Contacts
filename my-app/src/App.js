import './App.css';
import React from 'react'
import UserList from './components/UserList'
import FormUser from './components/FormUser'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'Luthfi Muhaimin',
      users : []
    }
  }

  fetchUser = () => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err => console.log(err))
  }

  addUser = (user) => {
    let newUsersData = this.state.users.concat(user)
    this.setState({
      ...this.state,
      users: newUsersData
    })
  }

  componentDidMount () {
    this.fetchUser()
  }

  render () {
    const { users } = this.state
    return (
    <div className="container">
      <h1>Fetch User by {this.state.name}</h1>

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
                <UserList user={user} key={index}></UserList>
              )
            })
          }
        </tbody>
      </table><br/><br/>

      <FormUser addUser={this.addUser} users={this.state.users}></FormUser>
    </div>
    )
  }
}

export default App;
