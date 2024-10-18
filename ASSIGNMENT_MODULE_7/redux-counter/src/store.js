import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const storedata = configureStore({
    reducer: {
        count : reducer
    }
})
