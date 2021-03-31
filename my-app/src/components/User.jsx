import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function User (props) {
  const history = useHistory();
  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch();

  function addToFavorite (user) {
    if(favorites.some(favorite => favorite.id === user.id)){
      return console.log('fail');
    }
    dispatch({type: 'favorites/addFavorite', payload: user})
  }

  function toDetail (id) {
    history.push(`/details/${id}`)
  }

  return (
    <>
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.user.first_name}</td>
      <td>{props.user.last_name}</td>
      <td>{props.user.email}</td>
      <td>
        <img src={props.user.avatar} alt=""/>
      </td>
      <td>
        <button onClick={() => addToFavorite(props.user)} className="btn btn-primary">Favorite</button>
        <button onClick={() => toDetail(props.user.id)} className="btn btn-primary">Detail</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>

    </>
  )
}


export default User;