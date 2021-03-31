import React, { useState } from 'react';
import Navbar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux';

function AddUser () {
  // const {data: users} = useFetch('https://reqres.in/api/users')
  const [id, setId] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)
  // dispatch({type: 'contacts/setContacts', payload: users})

  function formOnSubmit (event) {
    event.preventDefault();
    setId(+contacts[contacts.length - 1].id + 1)
    // props.addUser({id, first_name, last_name, email, avatar})
    dispatch({ type: 'contacts/addContact', payload: {id, first_name, last_name, email, avatar}})
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