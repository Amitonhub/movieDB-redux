const initialState = {
    movies: [],
    searchQuery: "",
  };

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "SET_SEARCH_QUERY":
        return {
          ...state,
          searchQuery: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;