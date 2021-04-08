import React, { useState } from 'react';
import Navbar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../store/actions/contacts';

function AddUser () {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data)

  function nextUserId(users) {
    const maxId = users.reduce((maxId, user) => Math.max(user.id, maxId), -1)
    return maxId + 1
  }

  function formOnSubmit (event) {
    event.preventDefault();
    const payload  = {
      id: nextUserId(contacts),
      first_name,
      last_name,
      email,
      avatar
    }
    dispatch(addContact(payload))
    setFirst_name('')
    setLast_name('')
    setEmail('')
    setAvatar('')
  }

  return (
    <>
      <Navbar/>
      <div className="container center">
        <h1>Add Contact Form</h1>
        <form onSubmit={e => formOnSubmit(e)}>
        <label htmlFor="first_name">First Name :</label><br/>
        <input
          id="name"
          name="first_name"
          placeholder="First Name.."
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
          placeholder="Last Name.."
          value={last_name}
          onChange={e => setLast_name(e.target.value)}
        /><br/>

        <label htmlFor="email">Email :</label><br/>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email.."
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br/>

        <label htmlFor="avatar">Avatar Url :</label><br/>
        <input
          id="avatar"
          type="text"
          name="avatar"
          placeholder="Avatar url.."
          value={avatar}
          onChange={e => setAvatar(e.target.value)}
        /><br/><br/>

        <button className="btn btn-primary">submit</button>
        </form>
      </div>
    </>
  )
}

export default AddUser