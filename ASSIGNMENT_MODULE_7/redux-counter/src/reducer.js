import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name : 'count',
    initialState: 0,
    reducers:{
         change: (state, action)=>{
            console.log(action.payload)
            return state = action.payload.value;
        }
    }
})

export const {change} = countSlice.actions;
export default countSlice.reducer;