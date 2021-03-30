import React, { useState } from 'react';

function UserForm (props) {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')


  function formOnSubmit (event) {
    event.preventDefault();
    props.addUser({first_name, last_name, email})
  }

  return (
    <form onSubmit={e => formOnSubmit(e)}>
      <label htmlFor="first_name">First Name :</label><br/>
      <input
        id="name"
        name="first_name"
        type="text"
        value={first_name}
        onChange={e => setFirst_name(e.target.value)}
      />
      <br/>

      <label htmlFor="last_name">Last Name :</label><br/>
      <input
        id="last_name"
        type="text"
        name="last_name"
        value={last_name}
        onChange={e => setLast_name(e.target.value)}
      /><br/>

      <label htmlFor="email">Email :</label><br/>
      <input
        id="email"
        type="text"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br/>

      <button>submit</button>
    </form>
  )
}

export default UserForm