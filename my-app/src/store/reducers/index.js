import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer'
import favoritesReducer from './favoritesReducers'

const reducer = combineReducers({
  contacts : contactsReducer,
  favorites: favoritesReducer
})

export default reducer;