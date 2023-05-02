export const setSearchQuery = (query: string) => ({
  type: "SET_SEARCH_QUERY",
  payload: query
});

export const toggleLogout = () => ({
  type: "TOGGLE_LOGOUT"
});