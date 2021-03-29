import './App.css';
import React from 'react'
import UserList from './components/UserList'
import FormUser from './components/FormUser'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'Luthfi Muhaimin',
      users : [],
      showForm: false
    }
  }

  printName = () => {
    console.log(this.state.user.name)
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
            users.map(user => {
              return (
                <UserList user={user} key={user.id}></UserList>
              )
            })
          }
        </tbody>
      </table><br/><br/>

      <FormUser addUser={this.addUser}></FormUser>
    </div>
    )
  }
}

export default App;
