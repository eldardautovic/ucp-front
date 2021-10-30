import { createSlice } from '@reduxjs/toolkit'

export const announcmentSlice = createSlice({
  name: 'announcments',
  initialState: {
    announcments: null
  },
  reducers: {
    setAnnouncments: (state, action) => {
        state.announcments = action.payload;
    },
    setInitialState: (state) => {
        state.announcments = null
    }
  },
})


export const announcmentActions = announcmentSlice.actions;
export const announcmentReducer = announcmentSlice.reducer;