import React from 'react';

class UserForm extends React.Component {
  constructor () {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  formOnSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state)
  }

  render () {
    return (
      <form onSubmit={this.formOnSubmit}>
        <label htmlFor="first_name">First Name :</label><br/>
        <input
          id="name"
          name="first_name"
          type="text"
          value={this.state.first_name}
          onChange={this.handleOnChange}
        />
        <br/>

        <label htmlFor="last_name">Last Name :</label><br/>
        <input
          id="last_name"
          type="text"
          name="last_name"
          value={this.state.last_name}
          onChange={this.handleOnChange}
        /><br/>

        <label htmlFor="email">Email :</label><br/>
        <input
          id="email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleOnChange}
        /><br/>

        <button>submit</button>
      </form>
    )
  }
}

export default UserForm