import { configureStore } from "@reduxjs/toolkit";
// import reducer, change cus export default
import vsCodeReducer from './slices/vsCodeSlice'

const store = configureStore({
    reducer: {
        vsCodeReducer: vsCodeReducer
    },
})

export default store