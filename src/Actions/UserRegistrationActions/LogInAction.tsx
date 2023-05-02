import { LogInData } from "../../Types/types";

export const logIn = (user: LogInData) => ({
  type: "LOG_IN",
  payload: user,
});

export const logOutAction = () => ({
  type: "LOG_OUT",
});
