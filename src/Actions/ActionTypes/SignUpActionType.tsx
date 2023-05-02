export type SignUpAction =
  | { type: "SIGN_UP_SUCCESS"; payload: { userId: string; signedIn: boolean } }
  | { type: "SIGN_UP_ERROR"; payload: string };

