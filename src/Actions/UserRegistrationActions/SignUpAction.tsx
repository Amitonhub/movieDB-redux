import { SignUpAction } from "../ActionTypes/SignUpActionType";

export const signUpSuccess = ( userId: string, signedIn: boolean): SignUpAction => ({
  type: "SIGN_UP_SUCCESS",
  payload: { userId, signedIn },
});

export const signUpError = (error: string): SignUpAction => ({
  type: "SIGN_UP_ERROR",
  payload: error,
});
