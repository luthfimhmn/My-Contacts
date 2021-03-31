import React from 'react';
import { useParams } from 'react-router-dom'
import useFetch from '../helpers/hooks/useFetch'

function ContactDetail () {
  let { id } = useParams();
  const {data: user} = useFetch(`https://reqres.in/api/users/${id}`)

  return (
    <>
      <h1>Contact Detail Page</h1>
      <h2>{id}</h2>
      <h3>{ `${user.first_name} ${user.last_name}`}</h3>
      <img src={user.avatar}/>
    </>
  )
}

export default ContactDetail;