import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../../Actions/ActionTypes/WishlistActionTypes";
import { getAllWishlistItems } from "../../LocalStorageUtils/LocalStorageUtils";
import { Movie } from "../../Types/HomeTypes";


const initialState: Movie[] = getAllWishlistItems ? JSON.parse(getAllWishlistItems) : [];

export const wishlistReducer = (state = initialState, action: any): Movie[] => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};
