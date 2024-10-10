import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userDetails: {},
}

const authorizeSlice = createSlice({
    name:"authorize",
    initialState,
    reducers:{
        login: function(state,action){
            state.status = true,
            state.userDetails = action.payload
        },
        logout:function(state){
            state.status=false,
            state.userDetails = {}
        }
    }
})

export default authorizeSlice.reducer;
export const {login,logout} = authorizeSlice.actions
