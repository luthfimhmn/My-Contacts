// action creator
export function setContacts (payload) {
  return {
    type: 'contacts/setContacts',
    payload
  }
}

export function addContact (payload) {
  return {
    type: 'contacts/addContact',
    payload
  }
}

export function setContactsAsync (url) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(contacts => {
        dispatch(setContacts(contacts.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}