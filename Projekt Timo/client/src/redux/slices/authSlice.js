import { createSlice } from "@reduxjs/toolkit";

//liest "isAuth" von localstorage des Browsers
const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem("isAuth");
  //Return true oder false anhand Status eines Benutzers
  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }
  return false;
};

//State für isAuth ist initializiert
const initialState = {
  isAuth: userAuthFromLocalStorage(),
};

//Slice auth definiert, diese wird in jeder Seite benutzt, um bei jeder Seite zu prüfen ob ein Benutzer aunthentiziert ist
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuth = true;
    },
    unauthenticateUser: (state) => {
      state.isAuth = false;
    },
  },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions;
export default authSlice.reducer;
