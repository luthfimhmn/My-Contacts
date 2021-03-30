import React, { useState } from 'react';

function UserForm (props) {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')


  function formOnSubmit (event) {
    event.preventDefault();
    props.addUser({first_name, last_name, email, avatar})
    setFirst_name('')
    setLast_name('')
    setEmail('')
    setAvatar('')
  }

  return (
    <>
      <h1>Add User Form</h1>
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

      <label htmlFor="avatar">Avatar Url :</label><br/>
      <input
        id="avatar"
        type="text"
        name="avatar"
        value={avatar}
        onChange={e => setAvatar(e.target.value)}
      /><br/><br/>

      <button className="btn btn-primary">submit</button>
      </form>
    </>
  )
}

export default UserForm