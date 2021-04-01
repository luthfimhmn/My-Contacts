import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { addFavorite } from '../store/actions/favorites';

function User (props) {
  const history = useHistory();
  const favorites = useSelector(state => state.favorites.data)
  const dispatch = useDispatch();

  function removeFavorite (id){
    dispatch({type: 'favorites/removeFavorite', payload: id})
  }

  function addToFavorite (contact) {
    if(favorites.some(favorite => favorite.id === contact.id)){
      return console.log('fail');
    }
    dispatch(addFavorite(contact, favorites))
  }

  function toDetail (id) {
    history.push(`/details/${id}`)
  }

  if(props.category === 'contacts') {
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
        </td>
      </tr>

      </>
    )
  }

  return (
    <>
      <tr>
        <td>{props.index + 1}</td>
        <td>{props.favorite.first_name + ' ' + props.favorite.last_name}</td>
        <td>{props.favorite.email}</td>
        <td>
          <img src={props.favorite.avatar} alt=""/>
        </td>
        <td>
          <button onClick={() => removeFavorite(props.favorite.id)} className="btn btn-danger">Remove</button>
        </td>
      </tr>
    </>
  )
}


export default User;