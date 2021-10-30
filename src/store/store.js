import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./user/userSlice";
import { announcmentReducer } from "./announcments/announcmentSlice";

export default configureStore({
    reducer: {
        user: userReducer, 
        announcments: announcmentReducer,
    }
});