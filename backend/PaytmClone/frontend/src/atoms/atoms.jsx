import { atom } from "recoil";

export const loggedInState = atom({
  key: "loggedin",
  default: false,
});

export const tokenState = atom({
  key: "token",
  default: "",
});

//The one who is logged in
export const userState = atom({
  key: "user",
  default: {},
});

export const accountState = atom({
  key: "account",
  default: {},
});

//The one who is recieving
export const sendingUserState = atom({
  key: "sending",
  default: "",
});

export const recievingUserState = atom({
  key: "rec",
  default: "",
});
