import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    username: null,
    admin: false
  },
  reducers: {
    logIn: (state, action) => {
        state.loggedIn = true;
        state.username = action.payload.username;
        state.admin = action.payload.admin;
      },
      logOut: (state) => {
        state.admin = null;
        state.username = null;
        state.loggedIn = false;
    }
  },
})


export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;