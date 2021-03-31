import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function User (props) {
  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch();

  function addToFavorite (id) {
    dispatch({type: 'favorites/addFavorite', payload: id})
  }

  useEffect(()=> {
    console.log('hehe');
  }, [favorites])

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
        <button className="btn btn-danger">Delete</button>
        <button onClick={() => addToFavorite(props.id)} className="btn btn-primary">Favorite</button>
        {JSON.stringify(favorites)}
      </td>
    </tr>

    </>
  )
}


export default User;