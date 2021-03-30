import React from 'react';

function User (props) {
  return (
    <tr>
      <td>{props.user.first_name}</td>
      <td>{props.user.last_name}</td>
      <td>{props.user.email}</td>
    </tr>
  )
}
// class User extends React.Component {
//   render () {
//     return (
//          <tr>
//            <td>{this.props.user.first_name}</td>
//            <td>{this.props.user.last_name}</td>
//            <td>{this.props.user.email}</td>
//          </tr>
//     )
//   }
// }

export default User;