import React from 'react';

function User (props) {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.user.first_name}</td>
      <td>{props.user.last_name}</td>
      <td>{props.user.email}</td>
      <td>
        <img src={props.user.avatar} alt=""/>
      </td>
    </tr>
  )
}


export default User;