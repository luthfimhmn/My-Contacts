import { useSelector } from "react-redux";
import Favorite from '../components/Favorite'
import Navbar from '../components/NavBar'

function Favorites () {

  const favorites = useSelector(state => state.favorites)
  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>Your Favorites Contact</h1>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Photos</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
      {
        favorites.map((favorite, index) => {
          return (
            <Favorite
              favorite={favorite}
              index={index}
              key={favorite.id}
            >
            </Favorite>
          )
        })
      }
      </tbody>
      </table><br/><br/>
    </div>
    </>
  )
}

export default Favorites;