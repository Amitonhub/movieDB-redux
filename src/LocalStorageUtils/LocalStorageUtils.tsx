export const getAllWishlistItems = localStorage.getItem("wishlist");
export const localIsLoggedIn = localStorage.getItem("signedIn");
export const localWishlistData = localStorage.getItem("wishlist") || "[]";
export const localUserId = localStorage.getItem("userId");