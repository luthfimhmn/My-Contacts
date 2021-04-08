export function addFavorite (payload) {
  return {
    type: 'favorites/addFavorite',
    payload
  }
}