import { SignUpAction } from "../../Actions/ActionTypes/SignUpActionType";
import { SignUpState } from "../../Types/types";



const initialState: SignUpState = {
  userId: null,
  signedIn: false,
  error: null,
};

const signUpReducer = (
  state = initialState,
  action: SignUpAction
): SignUpState => {
  switch (action.type) {
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        userId: action.payload.userId,
        signedIn: action.payload.signedIn,
        error: null,
      };
    case 'SIGN_UP_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
