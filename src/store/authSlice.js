import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAdmin : false,
    userData : {

    },
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        login : (state, action) => {
            state.isAdmin = true
            state.userData = action.payload
        },
        logout : (state) => {
            state.isAdmin = false
            state.userData = {}
        }
    }
})

export const {login , logout} = userSlice.actions
export default userSlice.reducer