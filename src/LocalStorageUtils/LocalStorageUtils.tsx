import { SignUpData } from "../Types/types";

export const GetAllUsers = (): SignUpData[] => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

export const GetUserById = (userid: string): SignUpData | null => {
  const users = GetAllUsers();
  const user = users.find((u: SignUpData) => u.userid === userid);
  return user ? user : null;
};

export const getAllWishlistItems = localStorage.getItem("wishlist");
