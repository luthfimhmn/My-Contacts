import React from 'react';

class UserList extends React.Component {
  render () {
    return (
         <tr>
           <td>{this.props.user.first_name}</td>
           <td>{this.props.user.last_name}</td>
           <td>{this.props.user.email}</td>
         </tr>
    )
  }
}

export default UserList