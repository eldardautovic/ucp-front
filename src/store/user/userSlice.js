import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    logIn: (state) => {
        state.loggedIn = true;
    },
    logOut: (state) => {
        state.loggedIn = false;
    }
  },
})


export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;