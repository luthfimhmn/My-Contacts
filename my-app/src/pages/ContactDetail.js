import React from 'react';
import Navbar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import useFetch from '../helpers/hooks/useFetch'

function ContactDetail () {
  let { id } = useParams();
  const {data: user} = useFetch(`https://reqres.in/api/users/${id}`)

  return (
    <>
      <Navbar/>
      <div className="container center">
        <h1>{ `${user.first_name} ${user.last_name}`}</h1>
        <h3>Email : {user.email}</h3>
        <img src={user.avatar} alt='avatar'/>
      </div>
    </>
  )
}

export default ContactDetail;