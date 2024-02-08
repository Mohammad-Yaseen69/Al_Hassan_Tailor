import { createSlice } from "@reduxjs/toolkit";

const AnimationSlice = createSlice({
    name: "Animation",
    initialState : {
        completed : false
    },
    reducers : {
        toggleComplete : (state) => {
            state.completed = !state.completed;
        }
    }
})

export const {toggleComplete} = AnimationSlice.actions
export default AnimationSlice.reducer;