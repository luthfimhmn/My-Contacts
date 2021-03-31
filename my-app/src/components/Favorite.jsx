import { useDispatch } from "react-redux";

function Favorite (props) {
  const dispatch = useDispatch();

  function removeFavorite (id){
    dispatch({type: 'favorites/removeFavorite', payload: id})
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
          <button onClick={() => removeFavorite(props.id)} className="btn btn-danger">Remove</button>
        </td>
      </tr>
    </>
  )
}

export default Favorite;