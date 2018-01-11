export function selectUser(user) {
  return {
    type:"SELECT_USER",
    value: user
  }
}

export function setSearchText(searchText) {
  return {
    type:"SET_SEARCH_TEXT",
    value: searchText
  }
}
