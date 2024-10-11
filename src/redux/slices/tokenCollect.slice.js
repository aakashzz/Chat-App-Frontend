import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tokenAvailable:false,
    token: {},
}

const tokenCollectSlice = createSlice({
    name:"token",
    initialState,
    reducers:{
        collectToken: function(state,action){
            state.tokenAvailable = true,
            state.token = action.payload
        },
        removeToken:function(state){
            state.tokenAvailable=false,
            state.token = {}
        }
    }
})

export default tokenCollectSlice.reducer;
export const {collectToken,removeToken} = tokenCollectSlice.actions
