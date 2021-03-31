import { createStore } from 'redux';

const initialState = {
  contacts: [],
  contact: {},
  favorites: []
}

function reducer(state = initialState, action) {
  if (action.type === 'test') {
    return { ...state, contacts: state.contacts}
  } else if (action.type === 'contacts/setContacts') {
    return {...state, contacts: action.payload}
  } else if (action.type === 'contacts/addContact') {
    return {...state, contacts: [...state.contacts, action.payload]}
  } else if (action.type === 'favorites/addFavorite') {
    return {...state, favorites: [...state.favorites, action.payload]}
  }
  return {...state}
}

const store = createStore(reducer);

export default store;