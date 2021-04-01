
// action creator
export function setContacts (payload) {
  return {
    type: 'contacts/setContacts',
    payload
  }
}

export function addContact (payload) {

}

export function setContactsAsync () {
  return (dispatch) => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(contacts => {
        dispatch(setContacts(contacts.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}