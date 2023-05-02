import { LogInData } from "../../Types/types";

export interface LoginState {
  isSignedIn: string;
  user: LogInData | null;
}

const userFromLocal = localStorage.getItem("user");
console.log(userFromLocal);

const signedInFromLocal = localStorage.getItem('signedIn')
console.log(signedInFromLocal)

const initialState: LoginState = {
  isSignedIn: signedInFromLocal ? JSON.parse(signedInFromLocal) : [],
  user: userFromLocal ? JSON.parse(userFromLocal) : [],
};

export const loginReducer = (
  state: LoginState = initialState,
  action: any
): LoginState => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isSignedIn: 'true',
        user: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        isSignedIn: 'false',
        user: null,
      };
    default:
      return state;
  }
};
