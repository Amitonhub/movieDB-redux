interface Action {
    type: string;
    payload?: any;
  }
  
  export interface SidebarState {
    searchQuery: string;
    showLogout: boolean;
  }
  
  const initialState: SidebarState = {
    searchQuery: "",
    showLogout: false,
  };
  
  const sidebarReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case "SET_SEARCH_QUERY":
        return {
          ...state,
          searchQuery: action.payload,
        };
      case "TOGGLE_LOGOUT":
        return {
          ...state,
          showLogout: !state.showLogout,
        };
      default:
        return state;
    }
  };
  
  export default sidebarReducer;
  