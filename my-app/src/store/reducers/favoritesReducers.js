const initialState = {
  data: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "favorites/addFavorite":
      return {...state, data: state.data.concat(action.payload)}
    case "favorites/removeFavorite":
      return {...state, data: state.data.filter(favorite => favorite.id !== action.payload)}
    default:
      return state
  }
}

export default reducer;