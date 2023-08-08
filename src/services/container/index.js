import { configureStore } from "@reduxjs/toolkit";
// import reducer, change cus export default
import vsCodeReducer from './slices/vsCodeSlice'
import checkAuthen from './slices/authenUser'

const store = configureStore({
    reducer: {
        vsCodeReducer: vsCodeReducer,
        checkAuthen: checkAuthen,
    },
})

export default store