import { LoginState } from "../Reducers/RegistrationReducers/LogInReducer";
import { SidebarState } from "../Reducers/SidebarReducers/SidebarReducer";
import { Movie } from "./HomeTypes";

export interface SignUpState {
  userId: string | null;
  signedIn: boolean;
  error: string | null;
}

export type SignUpData = {
  name: string;
  email: string;
  password: string;
  userid: string;
};

export type LogInData = {
  name: string;
  email: string;
  password: string;
  userId: string;
};

export interface RootState {
  logIn: LoginState;
  sidebar: SidebarState;
  movies: Movie[];
  wishlist: Movie[];
  movieDetails: Movie[];
}
