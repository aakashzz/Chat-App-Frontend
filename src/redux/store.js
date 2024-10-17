import {configureStore} from "@reduxjs/toolkit"
import authorizeReducer from "./slices/authorize.slice.js"

export const store = configureStore({
    reducer:{
        authorize:authorizeReducer
    }
})