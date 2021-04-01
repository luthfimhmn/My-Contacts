const initialState = {
  data: [],
  loading: false,
  error: null,
  contact: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "contacts/setContacts":
      return {...state, data: action.payload}
    case "contacts/addContact":
      return {...state, data: [...state.data, action.payload]}
    default:
      return state
  }
}

export default reducer