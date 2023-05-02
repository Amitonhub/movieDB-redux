import { Reducer, combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./RegistrationReducers/LogInReducer";
import sidebarReducer from "./SidebarReducers/SidebarReducer";
import moviesReducer from "./MoviesReducers/MoviesReducer";
import { wishlistReducer } from "./WishlistReducers/WishlistReducer";
import movieDetailsReducer from "./MovieDetailsReducers/MovieDetailsReducer";
import signUpReducer from "./RegistrationReducers/SignUpReducer";


const rootReducer: Reducer<any, any> = combineReducers({
  signUp: signUpReducer,
  logIn: loginReducer,
  sidebar: sidebarReducer,
  movies: moviesReducer,
  wishlist: wishlistReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
