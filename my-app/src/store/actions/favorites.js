export function addFavorite (payload) {
  return {
    type: 'favorites/addFavorite',
    payload
  }
}

// export function addFavoriteAsync () {
//   // return (dispatch, state) => {
//   //   if(state.some(favorite => favorite.id === payload.id)){
//   //     return console.log('fail');
//   //   }
//   // }
// }