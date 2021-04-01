const initialState = {
  contacts: [],
  contact: {},
  favorites: []
}

function reducer(state = initialState, action) {
  if (action.type === 'contacts/setContacts') {
    return {...state, contacts: action.payload}
  } else if (action.type === 'contacts/addContact') { //udah masuk
    console.log(action);
    return {...state, contacts: [...state.contacts, action.payload]}
  } else if (action.type === 'favorites/addFavorite') {
    return {...state, favorites: state.favorites.concat(action.payload)}
  } else if (action.type === 'favorites/removeFavorite') {
    return {...state, favorites: state.favorites.filter(favorite => favorite.id !== action.payload)}
  } else if (action.type === 'contact/reset') {
    return {...state, contact: {}}
  }
  return {...state}
}

export default reducer;