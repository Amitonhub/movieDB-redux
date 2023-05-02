import axios from "axios";
import { Movie } from "../Types/MovieTypes";
import { RootState, SignUpData } from "../Types/types";
import { ThunkAction } from "redux-thunk";
import { SignUpAction } from "../Actions/ActionTypes/SignUpActionType";
import { v4 as uuidv4 } from 'uuid';
import { signUpError, signUpSuccess } from "../Actions/UserRegistrationActions/SignUpAction";

export async function fetchMovies(): Promise<Movie[]> {
  try {
    const response = await axios.get(`https://api.tvmaze.com/shows`);
    return response.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      summary: item.summary,
      rating: item.rating.average,
      premiered: item.premiered,
    }));
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export const signUpSubmit = (
  signUpData: SignUpData
): ThunkAction<void, RootState, unknown, SignUpAction> => async (
  dispatch
) => {
  try {
    const userId = uuidv4();
    const userData = { ...signUpData, userid: userId };

    const url = 'https://6448e4bfb88a78a8f0f6d394.mockapi.io/users';
    await axios.post(url, userData);

    localStorage.setItem('userId', userId);
    localStorage.setItem('signedIn', 'true');

    dispatch(signUpSuccess(userId, true));

  } catch (error: any) {
    dispatch(signUpError(error));
  }
};
