import { configureStore } from "@reduxjs/toolkit";
import userSlice from './authSlice'
import productsSlice from "./productsSlice";
import AnimationSlice from "./AnimationSlice";

const store = configureStore({
    reducer: {
        user : userSlice,
        products : productsSlice,
        Animation : AnimationSlice
    }
})

export default store;