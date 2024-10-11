import {configureStore} from "@reduxjs/toolkit"
import authorizeReducer from "./slices/authorize.slice.js"
import tokenCollectReducer from "./slices/tokenCollect.slice.js"

export const store = configureStore({
    reducer:{
        authorize:authorizeReducer,
        token:tokenCollectReducer,
    }
})